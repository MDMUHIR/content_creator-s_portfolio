<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  discount: string;
  cover_image: string;
  published: boolean;
  created: string;
  updated: string;
  starting_date?: string;
  ending_date?: string;
  course_link?: string;
  initial_video_link?: string;
  class_type?: string;
  duration?: string;
  instructor?: string;
  batch?: string;
}

// route + pocketbase
const route = useRoute();
const { $pb } = useNuxtApp();

const course = ref<Course | null>(null);
const loading = ref(true);

// poster / fallback image (the uploaded image path you provided)
const posterSrc = "/mnt/data/eaef8e9e-4e42-4369-b9a6-c5c57f534f56.png";

// helpers to detect provider
const isYouTubeUrl = (url: string) => {
  return /(?:youtube\.com\/watch\?v=|youtu\.be\/)/i.test(url);
};
const getYouTubeEmbed = (url: string) => {
  const match = url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
  return match ? `https://www.youtube.com/embed/${match[1]}?rel=0` : "";
};

const isDirectVideoUrl = (url: string) => {
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
};

const fetchCourse = async () => {
  try {
    loading.value = true;
    const id = route.params.id as string;
    const result = await $pb.collection("courses").getOne(id);
    course.value = result as Course;
  } catch (err) {
    console.error("Error fetching course:", err);
    course.value = null;
  } finally {
    loading.value = false;
  }
};

const getVideoUrl = () => {
  if (!course.value) return "";
  // priority: explicit initial_video_link (external or direct file) -> video_file (PocketBase) -> cover_image (fallback)
  if (course.value.initial_video_link) return course.value.initial_video_link;
};

const embedUrl = computed(() => {
  if (!course.value) return "";
  const url = getVideoUrl();
  if (!url) return "";
  if (isYouTubeUrl(url)) return getYouTubeEmbed(url);

  return "";
});

const isYouTubeEmbed = computed(
  () => !!embedUrl.value && isYouTubeUrl(getVideoUrl())
);

const isDirectVideo = computed(() => {
  const url = getVideoUrl();
  return !!url && isDirectVideoUrl(url);
});

const hasPreview = computed(() => {
  // we show "free preview" when there is any video source or cover image
  return !!getVideoUrl() || !!course.value?.cover_image;
});

const openPreview = () => {
  // simple behavior: if direct video exists, scroll to video (or play programmatically)
  // if iframe exists, nothing special needed (iframe has controls)
  const el = document.querySelector("video");
  if (el && (el as HTMLVideoElement).pause) {
    (el as HTMLVideoElement).scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    try {
      (el as HTMLVideoElement).play();
    } catch (e) {
      /* autoplay may be blocked */
    }
  } else {
    // scroll to top of preview card
    const preview = document.querySelector(".lg\\:col-span-5");
    if (preview)
      (preview as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  }
};

// small helper for truncated short description
const shortDescription = computed(() => {
  if (!course.value) return "";
  // create a naive short excerpt if description is long HTML
  const text = course.value.description
    ? course.value.description.replace(/<\/?[^>]+(>|$)/g, "")
    : "";
  return text.length > 240 ? text.slice(0, 240) + "..." : text;
});

const formattedPrice = computed(() => {
  if (!course.value) return "0";
  // ensure number-like formatting; you may adapt for locale
  return typeof course.value.price === "number"
    ? course.value.price.toLocaleString()
    : course.value.price;
});

// Helper: parse ISO date safely
const parseDate = (dateStr?: string) => {
  if (!dateStr) return null;
  const date = new Date(dateStr);
  return isNaN(date.getTime()) ? null : date;
};

// Days until course starts
const daysUntilStart = computed(() => {
  const startDate = parseDate(course.value?.starting_date);
  if (!startDate) return null;
  const now = new Date();
  const diffTime = startDate.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
});

// Discounted Price (if applicable)
const discountedPrice = computed(() => {
  if (!course.value) return 0;
  if (course.value.discount) {
    const discount = parseFloat(course.value.discount);
    return course.value.price - discount;
  }
  return course.value.price;
});

onMounted(() => {
  fetchCourse();
});
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-12">
    <!-- Loading -->
    <div v-if="loading" class="text-center py-20">
      <p class="text-lg text-gray-600">Loading course...</p>
    </div>

    <!-- Not found -->
    <div v-else-if="!course" class="text-center py-20">
      <h1 class="text-4xl font-bold mb-4 text-red-500">Course not found</h1>
      <p class="text-lg text-gray-600 mb-8">
        The course you are looking for does not exist.
      </p>
      <NuxtLink
        to="/courses"
        class="inline-block bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl shadow"
      >
        ← Back to Courses
      </NuxtLink>
    </div>

    <!-- Course -->
    <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Left column: info -->
      <div class="lg:col-span-7">
        <!-- small badges + rating row -->
        <div class="flex flex-wrap items-center gap-3 mb-4">
          <span
            class="inline-flex items-center bg-amber-100 text-amber-700 rounded-full px-3 py-1 text-sm font-medium"
            >{{ course.class_type }}</span
          >
          <span
            class="inline-flex items-center bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm font-medium"
            >Early Bird</span
          >

          <div class="flex items-center gap-2 ml-2">
            <svg
              class="w-5 h-5 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927C9.349 2.03 10.651 2.03 10.951 2.927l.9 3.111a1 1 0 00.95.69h3.286c.969 0 1.371 1.24.588 1.81l-2.658 1.93a1 1 0 00-.364 1.118l.9 3.111c.3.897-.755 1.64-1.54 1.118L10 13.347l-2.672 1.458c-.785.522-1.84-.221-1.54-1.118l.9-3.111a1 1 0 00-.364-1.118L3.667 8.538c-.783-.57-.38-1.81.588-1.81h3.286a1 1 0 00.95-.69l.9-3.111z"
              />
            </svg>
            <span class="text-sm font-semibold text-gray-700">4.7</span>
            <a href="#" class="text-sm text-blue-600 underline ml-2">
              (125 Ratings)</a
            >
          </div>
        </div>

        <!-- Title -->
        <h1
          class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4"
        >
          {{ course.title }}
        </h1>

        <!-- short description / excerpt -->
        <p class="text-gray-700 mb-6 max-w-2xl" v-html="shortDescription"></p>

        <!-- CTAs and price row -->
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3 mb-6"
        >
          <div class="flex items-center gap-3">
            <NuxtLink
              :to="`/checkout/${course.id}`"
              class="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white px-5 py-3 rounded-lg font-semibold shadow"
            >
              রেজিস্টার করুন
            </NuxtLink>

            <button
              v-if="hasPreview"
              @click="openPreview"
              class="inline-flex items-center bg-white border border-gray-200 hover:shadow-md px-4 py-3 rounded-lg text-gray-800"
            >
              ফ্রি প্রিভিউ
            </button>
          </div>

          <div class="mt-3 sm:mt-0">
            <span class="text-2xl font-bold text-amber-600"
              >৳ {{ discountedPrice }}</span
            >
            <span
              class="ml-3 text-xl font-semibold text-gray-400 line-through italic"
              >৳ {{ course.price }}</span
            >
            <div class="text-sm text-gray-500">(One-time payment)</div>
          </div>
        </div>

        <!-- info chips -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <div class="p-4 bg-white border rounded-lg shadow-sm">
            <div class="text-xs text-gray-500">ক্লাস টাইপ</div>
            <div class="mt-1 text-sm font-semibold text-gray-800">
              {{ course.class_type }}
            </div>
          </div>
          <div class="p-4 bg-white border rounded-lg shadow-sm">
            <div class="text-xs text-gray-500">মেয়াদ</div>
            <div class="mt-1 text-sm font-semibold text-gray-800">
              {{
                daysUntilStart !== null ? daysUntilStart + " দিন পরে শুরু" : "-"
              }}
            </div>
          </div>
          <!-- <div class="p-4 bg-white border rounded-lg shadow-sm">
            <div class="text-xs text-gray-500">সিট বাকি</div>
            <div class="mt-1 text-sm font-semibold text-gray-800">৮৬ টি</div>
          </div> -->
        </div>

        <!-- Full description -->
        <div
          class="prose prose-lg text-gray-800 max-w-none"
          v-html="course.description"
        ></div>

        <!-- Bottom CTA -->
        <div class="mt-10 flex gap-3">
          <NuxtLink
            to="/courses"
            class="inline-flex items-center bg-white border border-gray-200 px-5 py-3 rounded-lg text-gray-700 hover:shadow-md"
          >
            ← Back to Courses
          </NuxtLink>
        </div>
      </div>

      <!-- Right column: preview card -->
      <div class="lg:col-span-5">
        <div
          class="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
        >
          <!-- header over card like small black strip -->
          <div
            class="px-4 py-2 bg-black bg-opacity-75 text-white text-sm font-medium flex items-center gap-2"
          >
            <svg
              class="w-4 h-4 text-amber-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            ক্লিক করে দেখুন কোর্স এর ডেমো ক্লিপ
          </div>

          <!-- video area -->
          <div class="p-4">
            <div class="w-full rounded-lg overflow-hidden relative bg-gray-50">
              <!-- YouTube/Vimeo iframe -->
              <iframe
                v-if="isYouTubeEmbed"
                :src="embedUrl"
                class="w-full aspect-video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <!-- direct video file -->
              <video
                v-else-if="isDirectVideo"
                :src="getVideoUrl()"
                controls
                :poster="posterSrc"
                class="w-full aspect-video bg-black"
              >
                Your browser does not support the video tag.
              </video>

              <!-- fallback: cover image -->
              <img
                v-else
                :src="posterSrc"
                :alt="course.title"
                class="w-full aspect-video object-cover"
              />

              <!-- optional floating play badge for non-iframe videos -->
              <button
                v-if="!isYouTubeEmbed && !isDirectVideo"
                @click="openPreview"
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 hover:bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
                aria-label="Open preview"
              >
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            <!-- small metadata under preview -->
            <div class="mt-4 flex justify-between items-center">
              <div>
                <div class="text-sm text-gray-500">Instructor</div>
                <div class="text-sm font-medium text-gray-800">
                  {{ course.instructor || "TBA" }}
                </div>
              </div>

              <div class="text-right">
                <div class="text-sm text-gray-500">Duration</div>
                <div class="text-sm font-medium text-gray-800">
                  {{ course.duration || "-" }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- batch info card -->
        <div
          class="mt-6 bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
        >
          <div class="flex items-center justify-between">
            <div>
              <div class="text-xs text-gray-500">বাচ শুরু</div>
              <div class="text-sm font-semibold text-gray-800">
                {{ course.starting_date || "-" }}
              </div>
            </div>
            <div>
              <div class="text-xs text-gray-500">লাইভ ক্লাস</div>
              <div class="text-sm font-semibold text-gray-800">-</div>
            </div>
            <div class="text-right">
              <div class="text-xs text-gray-500">ভর্তি চলছে</div>
              <div class="text-sm font-semibold text-gray-800">
                {{ course.batch }} ব্যাচে
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- right col end -->
    </div>
  </div>
</template>

<style scoped>
/* Tweak aspect-video for older browsers: keep consistent ratio */
.aspect-video {
  aspect-ratio: 16 / 9;
}

/* subtle prose styles override to keep in our light theme */
.prose :where(h1, h2, h3, h4) {
  color: #111827; /* gray-900 */
}
</style>

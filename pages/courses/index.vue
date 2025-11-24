<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

interface Course {
  id: string;
  title: string;
  description?: string;
  price: number;
  discount: string;
  cover_image: string;
  published: boolean;
  created: string;
  updated: string;
  starting_date?: string;
  ending_date?: string;
  course_link?: string;
}

const courses = ref<Course[]>([]);
const searchTerm = ref("");
const sortBy = ref("created");
const loading = ref(true);

const { $pb } = useNuxtApp();

const fetchCourses = async () => {
  try {
    loading.value = true;
    const result = await $pb.collection("courses").getFullList({
      filter: "published = true",
      sort: "-created",
    });
    courses.value = result as unknown as Course[];
  } catch (err) {
    console.error("Error loading courses:", err);
  } finally {
    loading.value = false;
  }
};

const getCourseImageUrl = (course: Course) =>
  course.cover_image
    ? $pb.getFileUrl(course, course.cover_image)
    : "/placeholder-course.jpg";

const shortExcerpt = (html?: string) => {
  if (!html) return "";
  const text = html.replace(/<[^>]*>/g, "").trim();
  return text.length > 100 ? text.slice(0, 100) + "..." : text;
};

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const daysUntilStart = (course: Course): number | null => {
  if (!course.starting_date) return null;
  const diff = new Date(course.starting_date).getTime() - Date.now();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

const shouldShowStartsSoon = (course: Course) => {
  const days = daysUntilStart(course);
  return days !== null && days > 0 && days <= 7;
};

const courseDiscountPercent = (course: Course) => {
  const discount = Number(course.discount || 0);
  if (!discount) return null;
  return Math.round((discount / Number(course.price)) * 100);
};

const finalPrice = (course: Course) => {
  const discount = Number(course.discount || 0);
  return Math.max(0, Number(course.price) - discount);
};

const filteredCourses = computed(() => {
  let list = courses.value.filter((c) => {
    const search = searchTerm.value.toLowerCase();
    const desc = c.description ? c.description.replace(/<[^>]*>/g, "") : "";
    return (c.title + " " + desc).toLowerCase().includes(search);
  });

  switch (sortBy.value) {
    case "starting_date":
      list.sort((a, b) => {
        const da = a.starting_date
          ? new Date(a.starting_date).getTime()
          : Infinity;
        const db = b.starting_date
          ? new Date(b.starting_date).getTime()
          : Infinity;
        return da - db;
      });
      break;
    case "price":
      list.sort((a, b) => finalPrice(a) - finalPrice(b));
      break;
    case "price_desc":
      list.sort((a, b) => finalPrice(b) - finalPrice(a));
      break;
    case "discount":
      list.sort(
        (a, b) =>
          (courseDiscountPercent(b) || 0) - (courseDiscountPercent(a) || 0)
      );
      break;
    default:
      list.sort(
        (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
      );
  }
  return list;
});

onMounted(() => fetchCourses());
</script>

<template>
  <div class="min-h-screen py-10">
    <div class="container mx-auto px-4">
      <section class="header">
        <!-- Header -->
        <div class="mb-10">
          <h1 class="text-4xl font-bold text-gray-900">All Courses</h1>
          <p class="text-gray-600 mt-2 text-lg">
            Browse our latest expert-led courses.
          </p>
        </div>

        <!-- Filters -->
        <div class="bg-white rounded-2xl border p-6 mb-10">
          <div
            class="flex flex-col lg:flex-row justify-between gap-6 items-start lg:items-center"
          >
            <!-- Search + Sort -->
            <div class="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <!-- Search -->
              <input
                v-model="searchTerm"
                type="text"
                placeholder="Search courses..."
                class="w-full sm:w-80 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />

              <!-- Sort -->
              <select
                v-model="sortBy"
                class="w-full sm:w-56 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
              >
                <option value="created">Newest First</option>
                <option value="starting_date">Soonest Start</option>
                <option value="price">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="discount">Biggest Discount</option>
              </select>
            </div>

            <!-- Stats -->
            <div class="text-gray-700">
              <span class="text-3xl font-bold text-amber-600">
                {{ filteredCourses.length }}
              </span>
              <span class="font-medium">
                course{{ filteredCourses.length !== 1 ? "s" : "" }}
              </span>
              <p class="text-xs text-gray-400">Updated just now</p>
            </div>
          </div>
        </div>
      </section>

      <main class="bg-[#F9F6F3] rounded-3xl p-4">
        <!-- Loading -->
        <div
          v-if="loading"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <div
            v-for="n in 8"
            :key="n"
            class="bg-white border rounded-xl h-80 animate-pulse"
          ></div>
        </div>

        <!-- Empty -->
        <div
          v-else-if="filteredCourses.length === 0"
          class="text-center py-20 text-gray-600"
        >
          <h3 class="text-2xl font-semibold mb-3">
            {{ courses.length === 0 ? "No courses yet" : "No courses found" }}
          </h3>
          <button
            v-if="searchTerm"
            @click="searchTerm = ''"
            class="mt-4 px-5 py-3 bg-amber-500 text-white rounded-xl"
          >
            Clear Search
          </button>
        </div>

        <!-- Courses -->
        <div
          v-else
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <NuxtLink
            v-for="course in filteredCourses"
            :key="course.id"
            :to="`/courses/${course.id}`"
            class="block bg-white rounded-xl border hover:border-amber-500 transition p-4"
          >
            <!-- Image -->
            <div class="relative mb-4">
              <img
                :src="getCourseImageUrl(course)"
                class="w-full h-48 object-cover rounded-lg"
              />

              <!-- Discount -->
              <span
                v-if="courseDiscountPercent(course)"
                class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded"
              >
                -{{ courseDiscountPercent(course) }}%
              </span>

              <!-- Starts Soon -->
              <span
                v-if="shouldShowStartsSoon(course)"
                class="absolute top-2 right-2 bg-amber-600 text-white text-xs px-2 py-1 rounded"
              >
                Starts in {{ daysUntilStart(course) }}d
              </span>
            </div>

            <!-- Title -->
            <h3 class="font-bold text-gray-900 text-lg mb-2 line-clamp-2">
              {{ course.title }}
            </h3>

            <!-- Description -->
            <p class="text-gray-600 text-sm line-clamp-2 mb-4">
              {{ shortExcerpt(course.description) }}
            </p>

            <!-- Start Date -->
            <p
              v-if="course.starting_date"
              class="text-xs text-gray-500 mb-3 flex items-center gap-1"
            >
              📅 Starts {{ formatDate(course.starting_date) }}
            </p>

            <!-- Price -->
            <div class="flex justify-between items-end">
              <div>
                <div class="text-2xl font-bold text-amber-600">
                  ৳ {{ finalPrice(course).toLocaleString() }}
                </div>
                <div
                  v-if="courseDiscountPercent(course)"
                  class="text-sm text-gray-500 line-through"
                >
                  ৳ {{ Number(course.price).toLocaleString() }}
                </div>
              </div>

              <span
                class="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                View Details
              </span>
            </div>
          </NuxtLink>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>

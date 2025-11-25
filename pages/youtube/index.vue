<script setup lang="ts">
import { ref, onMounted } from "vue";

interface YoutubeVideo {
  id: string;
  title: string;
  video_id: string;
  description: string;
  created: string;
}

const videos = ref<YoutubeVideo[]>([]);
const loading = ref(true);

const { $pb } = useNuxtApp();

// SEO Head
useHead({
  title: "YouTube Videos - Asadudzaman Joy",
  meta: [
    {
      name: "description",
      content:
        "Watch tutorials, vlogs, and tech content from Asadudzaman Joy's YouTube channel. Learn about web development, software engineering, and technology.",
    },
    { property: "og:title", content: "YouTube Videos - Asadudzaman Joy" },
    {
      property: "og:description",
      content:
        "Watch tutorials, vlogs, and tech content from Asadudzaman Joy's YouTube channel. Learn about web development, software engineering, and technology.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://asadjoy.com/youtube" },
    { property: "og:image", content: "https://asadjoy.com/images/profile.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "YouTube Videos - Asadudzaman Joy" },
    {
      name: "twitter:description",
      content:
        "Watch tutorials, vlogs, and tech content from Asadudzaman Joy's YouTube channel. Learn about web development, software engineering, and technology.",
    },
    {
      name: "twitter:image",
      content: "https://asadjoy.com/images/profile.jpg",
    },
  ],
  link: [{ rel: "canonical", href: "https://asadjoy.com/youtube" }],
});

const fetchVideos = async () => {
  try {
    const result = await $pb.collection("youtube_videos").getList(1, 50, {
      sort: "-created",
    });
    videos.value = result.items as YoutubeVideo[];
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
  } finally {
    loading.value = false;
  }
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

onMounted(fetchVideos);
</script>

<template>
  <div class="container mx-auto py-10">
    <!-- Header -->
    <h1 class="text-4xl font-bold mb-3">
      Popular <span class="text-red-600">YouTube</span> Videos
    </h1>
    <p class="mb-8 text-lg text-gray-400">
      A collection of my tutorials, vlogs, and tech content from YouTube.
    </p>

    <main class="bg-[#F9F6F3] rounded-3xl p-6">
      <!-- Loading Skeleton -->
      <div
        v-if="loading"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div
          v-for="n in 6"
          :key="n"
          class="animate-pulse bg-gray-800 rounded-xl h-64"
        ></div>
      </div>

      <!-- Empty State -->
      <div
        v-else-if="videos.length === 0"
        class="text-center text-gray-400 py-12"
      >
        <p class="text-lg">No videos available yet. Check back soon!</p>
      </div>

      <!-- Masonry Grid -->
      <div v-else class="columns-1 md:columns-2 lg:columns-3 gap-6">
        <div
          v-for="video in videos"
          :key="video.id"
          class="break-inside-avoid rounded-xl overflow-hidden bg-white borde r border-gray-700 hover:border-gray-500 transition mb-6 shadow-sm"
        >
          <!-- Video -->
          <div class="relative w-full">
            <div class="aspect-video">
              <iframe
                :src="`https://www.youtube.com/embed/${video.video_id}`"
                frameborder="0"
                allowfullscreen
                class="w-full h-full"
              ></iframe>
            </div>
          </div>

          <!-- Content -->
          <div class="p-5">
            <h3 class="text-lg font-semibold leading-tight mb-2">
              <a
                :href="`https://www.youtube.com/embed/${video.video_id}`"
                target="_blank"
              >
                {{ video.title }}
              </a>
            </h3>

            <p class="text-gray-400 text-sm mb-3">
              {{ video.description.replace(/<\/?p>/g, "") }}
            </p>

            <p class="text-xs text-gray-500">
              Published: {{ formatDate(video.created) }}
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Clean subtle card hover */
.card-hover:hover {
  transform: translateY(-2px);
}
</style>

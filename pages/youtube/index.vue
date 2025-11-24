<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">YouTube Videos</h1>
    <p class="mb-8 text-lg text-gray-300">A collection of my tutorials, vlogs, and other content from my YouTube channel.</p>

    <div v-if="videos.length === 0" class="text-center text-gray-400 py-12">
      <p class="text-lg">No videos available yet. Check back soon!</p>
    </div>

    <!-- Masonry Grid -->
    <div v-else class="columns-1 md:columns-2 lg:columns-3 gap-6">
      <div v-for="video in videos" :key="video.id" class="break-inside-avoid bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition mb-6">
        <div class="aspect-w-16 aspect-h-9">
          <iframe
            :src="`https://www.youtube.com/embed/${video.video_id}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="w-full h-full"
          ></iframe>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">{{ video.title }}</h3>
          <p class="text-gray-400">{{ video.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// YouTube Video interface based on PocketBase collection
interface YoutubeVideo {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  title: string;
  video_id: string;
  description: string;
}

const videos = ref<YoutubeVideo[]>([]);
const { $pb } = useNuxtApp();

const fetchVideos = async () => {
  try {
    const result = await $pb.collection('youtube_videos').getList(1, 50, {
      sort: '-created',
    });
    videos.value = result.items as unknown as YoutubeVideo[];
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
  }
};

onMounted(() => {
  fetchVideos();
});
</script>

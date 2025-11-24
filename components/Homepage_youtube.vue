<script setup lang="ts">
// YouTube video interface based on PocketBase collection
interface YoutubeVideo {
  id: string;
  title: string;
  video_id: string;
  description: string;
  created: string;
}

const videos = ref<YoutubeVideo[]>([])
const loading = ref(false)

const { $pb } = useNuxtApp()

// Fetch latest YouTube videos from PocketBase
const fetchVideos = async () => {
  try {
    loading.value = true
    const result = await $pb.collection('youtube_videos').getList(1, 4, {
      sort: '-created'
    })
    videos.value = result.items as unknown as YoutubeVideo[]
  } catch (error) {
    console.error('Error fetching YouTube videos:', error)
  } finally {
    loading.value = false
  }
}

// Format date for display
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

// Load videos on mount
onMounted(() => {
  fetchVideos()
})
</script>

<template>
  <section>
    <div class="mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-2">
        Latest <span class="text-red-600">YouTube Videos</span>
      </h2>
      <p class="text-gray-600 mb-10 max-w-xl">
        Tutorials, vlogs, and tech content from my YouTube channel.
      </p>

      <div v-if="loading" class="text-center py-12">
        <p class="text-gray-600">Loading latest videos...</p>
      </div>

      <div v-else-if="videos.length === 0" class="text-center py-12">
        <p class="text-gray-600">No videos available yet.</p>
      </div>

      <!-- Masonry Grid -->
      <div v-else class="columns-1 md:columns-2 lg:columns-3 gap-6">
        <article
          v-for="video in videos"
          :key="video.id"
          class="break-inside-avoid bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden mb-6"
        >
          <!-- Video -->
          <div class="relative w-full">
            <div class="aspect-video">
              <iframe
                :src="`https://www.youtube.com/embed/${video.video_id}`"
                frameborder="0"
                allowfullscreen
                class="w-full h-full rounded-t-2xl"
              ></iframe>
            </div>
          </div>

          <div class="p-6">
            <div class="flex items-center text-sm text-gray-500 mb-3">
              <span class="bg-red-100 text-red-600 px-2 py-1 rounded mr-3">Video</span>
              <span>{{ formatDate(video.created) }}</span>
            </div>

            <h3 class="text-xl font-semibold mb-3">
              <a
                :href="`https://www.youtube.com/watch?v=${video.video_id}`"
                target="_blank"
                class="hover:text-red-600 transition-colors"
              >
                {{ video.title }}
              </a>
            </h3>

            <p
              class="text-gray-600 mb-4 text-sm"
              v-html="video.description ? video.description.substring(0, 150) + '...' : 'No description available.'"
            ></p>

            <a
              :href="`https://www.youtube.com/watch?v=${video.video_id}`"
              target="_blank"
              class="text-red-600 font-medium hover:text-red-700 transition-colors"
            >
              Watch on YouTube →
            </a>
          </div>
        </article>
      </div>

      <!-- View All -->
      <div v-if="videos.length > 0" class="text-center mt-8">
        <NuxtLink
          to="/youtube"
          class="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          View All Videos →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
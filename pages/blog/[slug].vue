<template>
  <div>
    <div v-if="loading" class="text-center py-12">
      <p class="text-lg text-gray-400">Loading blog post...</p>
    </div>

    <div v-else-if="!blog" class="text-center py-12">
      <h1 class="text-4xl font-bold mb-4 text-red-400">Blog post not found</h1>
      <p class="text-lg text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
      <NuxtLink to="/blog" class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
        ← Back to Blog
      </NuxtLink>
    </div>

    <div v-else>
      <div class="mb-8">
        <div class="flex items-center text-sm text-gray-400 mb-4">
          <span class="bg-blue-600 px-2 py-1 rounded mr-3">Blog</span>
          <span>{{ formatDate(blog.created) }}</span>
        </div>
        <h1 class="text-5xl font-bold mb-4">{{ blog.title }}</h1>
      </div>

      <div v-if="blog.cover_image" class="mb-8">
        <img
          :src="getCoverImageUrl(blog)"
          :alt="blog.title"
          class="w-full rounded-lg shadow-lg max-h-96 object-cover"
        />
      </div>

      <div class="prose prose-lg prose-invert max-w-none" v-html="blog.content"></div>

      <div class="mt-12 pt-8 border-t border-gray-700">
        <NuxtLink to="/blog" class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
          ← Back to Blog
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Blog interface based on PocketBase collection
interface Blog {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  title: string;
  content: string;
  cover_image: string;
  slug: string;
}

const route = useRoute()
const { $pb } = useNuxtApp()

const blog = ref<Blog | null>(null)
const loading = ref(true)

// Fetch blog by slug
const fetchBlog = async () => {
  try {
    loading.value = true
    const slug = route.params.slug as string;
    const result = await $pb.collection('blogs').getFirstListItem(`slug = "${slug}"`);
    blog.value = result as unknown as Blog
  } catch (error) {
    console.error('Error fetching blog:', error)
    blog.value = null
  } finally {
    loading.value = false
  }
}

const getCoverImageUrl = (blog: Blog) => {
  if (blog.cover_image) {
    return $pb.getFileUrl(blog, blog.cover_image);
  }
  return '';
};

// Format date for display
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Load blog on mount
onMounted(() => {
  fetchBlog()
})
</script>

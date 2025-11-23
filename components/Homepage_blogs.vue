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

const blogs = ref<Blog[]>([])
const loading = ref(false)

const { $pb } = useNuxtApp()

// Fetch latest blogs from PocketBase
const fetchBlogs = async () => {
  try {
    loading.value = true
    const result = await $pb.collection('blogs').getList(1, 4, {
      sort: '-created'
    })
    blogs.value = result.items as unknown as Blog[]
  } catch (error) {
    console.error('Error fetching blogs:', error)
  } finally {
    loading.value = false
  }
}

const getCoverImageUrl = (blog: Blog) => {
  if (blog.cover_image) {
    return $pb.getFileUrl(blog, blog.cover_image)
  }
  return ''
}

// Format date for display
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

// Load blogs on mount
onMounted(() => {
  fetchBlogs()
})
</script>

<template>
  <section class="py-16 bg-[#F9F6F3]">
    <div class=" mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-2">
        Latest <span class="text-blue-600">Blog Posts</span>
      </h2>
      <p class="text-gray-600 mb-10 max-w-xl">
        Thoughts, insights, and tutorials on web development, software engineering, and technology.
      </p>

      <div v-if="loading" class="text-center py-12">
        <p class="text-gray-600">Loading latest blogs...</p>
      </div>

      <div v-else-if="blogs.length === 0" class="text-center py-12">
        <p class="text-gray-600">No blog posts available yet.</p>
      </div>

      <!-- Masonry Grid -->
      <div v-else class="columns-1 md:columns-2 lg:columns-3 gap-6">
        <article
          v-for="blog in blogs"
          :key="blog.id"
          class="break-inside-avoid bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden mb-6"
        >
          <img
            v-if="blog.cover_image"
            :src="getCoverImageUrl(blog)"
            :alt="blog.title"
            class="w-full object-cover"
          />

          <div class="p-6">
            <div class="flex items-center text-sm text-gray-500 mb-3">
              <span class="bg-blue-100 text-blue-600 px-2 py-1 rounded mr-3">Blog</span>
              <span>{{ formatDate(blog.created) }}</span>
            </div>

            <h3 class="text-xl font-semibold mb-3">
              <NuxtLink
                :to="`/blog/${blog.slug}`"
                class="hover:text-blue-600 transition-colors"
              >
                {{ blog.title }}
              </NuxtLink>
            </h3>

            <p
              class="text-gray-600 mb-4 text-sm"
              v-html="blog.content ? blog.content.substring(0, 150) + '...' : 'No content available.'"
            ></p>

            <NuxtLink
              :to="`/blog/${blog.slug}`"
              class="text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              Read More →
            </NuxtLink>
          </div>
        </article>
      </div>

      <!-- View All -->
      <div v-if="blogs.length > 0" class="text-center mt-8">
        <NuxtLink
          to="/blog"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          View All Posts →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>


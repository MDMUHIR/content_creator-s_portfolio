<template>
  <div class="sm:container mx-auto py-10">
    <h1 class="text-4xl font-bold mb-8">
      Latest <span class="text-blue-600">Blogs</span>
    </h1>
    <p class="mb-8 text-lg text-gray-800">
      Thoughts, insights, and tutorials on web development, software
      engineering, and technology.
    </p>

    <div v-if="blogs.length === 0" class="text-center text-gray-800 py-12">
      <p class="text-lg">No blog posts yet. Check back soon!</p>
    </div>

    <!-- Masonry Grid -->
    <div v-else class="columns-1 md:columns-2 lg:columns-3 gap-6">
      <article
        v-for="blog in blogs"
        :key="blog.id"
        class="break-inside-avoid bg-[#F9F6F3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition mb-6"
      >
        <img
          v-if="blog.cover_image"
          :src="getCoverImageUrl(blog)"
          :alt="blog.title"
          class="w-full object-cover"
        />
        <div class="p-6">
          <div class="flex items-center text-sm text-gray-400 mb-4">
            <span class="bg-blue-600 px-2 py-1 rounded mr-3">Blog</span>
            <span>{{ formatDate(blog.created) }}</span>
          </div>
          <h2 class="text-2xl font-bold mb-4">
            <NuxtLink
              :to="`/blog/${blog.slug}`"
              class="hover:text-blue-400 transition-colors"
            >
              {{ blog.title }}
            </NuxtLink>
          </h2>
          <p
            class="text-black mb-4"
            v-html="
              blog.content
                ? blog.content.substring(0, 200) + '...'
                : 'No content available.'
            "
          ></p>
          <div class="flex justify-end items-center">
            <NuxtLink
              :to="`/blog/${blog.slug}`"
              class="text-blue-400 hover:text-blue-300"
            >
              Read More →
            </NuxtLink>
          </div>
        </div>
      </article>
    </div>

    <div
      v-if="blogs.length > 0 && blogs.length % 10 === 0"
      class="text-center mt-12"
    >
      <button
        @click="loadMoreBlogs"
        class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        :disabled="loading"
      >
        {{ loading ? "Loading..." : "Load More Posts" }}
      </button>
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

const blogs = ref<Blog[]>([]);
const loading = ref(false);
const page = ref(1);

const { $pb } = useNuxtApp();

// SEO Head
useHead({
  title: "Blog - Asadudzaman Joy",
  meta: [
    {
      name: "description",
      content:
        "Thoughts, insights, and tutorials on web development, software engineering, and technology by Asadudzaman Joy.",
    },
    { property: "og:title", content: "Blog - Asadudzaman Joy" },
    {
      property: "og:description",
      content:
        "Thoughts, insights, and tutorials on web development, software engineering, and technology by Asadudzaman Joy.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://asadjoy.com/blog" },
    { property: "og:image", content: "https://asadjoy.com/images/profile.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Blog - Asadudzaman Joy" },
    {
      name: "twitter:description",
      content:
        "Thoughts, insights, and tutorials on web development, software engineering, and technology by Asadudzaman Joy.",
    },
    {
      name: "twitter:image",
      content: "https://asadjoy.com/images/profile.jpg",
    },
  ],
  link: [{ rel: "canonical", href: "https://asadjoy.com/blog" }],
});

console.log(
  "Blog index component mounted." +
    blogs.value.length +
    " blogs currently loaded."
);
// Fetch blogs from PocketBase
const fetchBlogs = async (pageNum: number = 1) => {
  console.log("Attempting to fetch blogs...");
  try {
    loading.value = true;
    const result = await $pb.collection("blogs").getList(pageNum, 10, {
      sort: "-created",
    });
    console.log("Successfully fetched blogs:", result);
    if (pageNum === 1) {
      blogs.value = result.items as unknown as Blog[];
    } else {
      blogs.value.push(...(result.items as unknown as Blog[]));
    }
    console.log("Blogs ref updated:", blogs.value);
  } catch (error) {
    console.error("Error fetching blogs:", error);
  } finally {
    loading.value = false;
    console.log("Finished fetching blogs.");
  }
};

const getCoverImageUrl = (blog: Blog) => {
  if (blog.cover_image) {
    return $pb.getFileUrl(blog, blog.cover_image);
  }
  return "";
};

// Load more blogs
const loadMoreBlogs = async () => {
  page.value++;
  await fetchBlogs(page.value);
};

// Format date for display
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Load initial blogs
onMounted(() => {
  fetchBlogs();
});
</script>

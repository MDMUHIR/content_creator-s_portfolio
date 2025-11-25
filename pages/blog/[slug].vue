<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Loading State -->
    <div v-if="loading" class="container mx-auto px-4 py-24">
      <div class="max-w-4xl mx-auto">
        <div class="animate-pulse">
          <div class="h-8 bg-gray-200 rounded w-32 mb-6"></div>
          <div class="h-12 bg-gray-200 rounded mb-6"></div>
          <div class="h-96 bg-gray-200 rounded-xl mb-8"></div>
          <div class="space-y-4">
            <div class="h-4 bg-gray-200 rounded"></div>
            <div class="h-4 bg-gray-200 rounded w-5/6"></div>
            <div class="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Not Found -->
    <div v-else-if="!blog" class="container mx-auto px-4 py-24 text-center">
      <div class="max-w-2xl mx-auto">
        <div class="mb-8">
          <div
            class="bg-red-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg
              class="w-12 h-12 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p class="text-lg text-gray-600 mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <NuxtLink
            to="/blog"
            class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Blog
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Blog Post -->
    <div v-else>
      <!-- Hero Section -->
      <article class="relative overflow-hidden">
        <div v-if="blog.cover_image" class="relative h-96 md:h-[500px]">
          <img
            :src="getCoverImageUrl(blog)"
            :alt="blog.title"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
          ></div>
          <div class="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
            <div class="max-w-5xl mx-auto">
              <div class="flex items-center gap-4 text-sm mb-4 opacity-90">
                <span
                  class="bg-blue-600/90 px-3 py-1 rounded-full text-xs font-medium"
                  >Blog</span
                >
                <span>•</span>
                <span>{{ formatDate(blog.created) }}</span>
                <span>•</span>
                <span>{{ readingTime }} min read</span>
              </div>
              <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
                {{ blog.title }}
              </h1>
            </div>
          </div>
        </div>

        <!-- Content Container -->
        <div class="container mx-auto px-4 -mt-16 relative z-10">
          <div class="max-w-5xl mx-auto">
            <div class="grid md:grid-cols-4 gap-10">
              <!-- Main Content -->
              <div class="md:col-span-3">
                <div
                  class="bg-white rounded-3xl shadow-2xl p-8 md:p-12 prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-blue-600 hover:prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:pl-6 prose-blockquote:italic prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100"
                >
                  <div v-html="blog.content"></div>
                </div>

                <!-- Share Buttons -->
                <div
                  class="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200"
                >
                  <h3 class="font-bold text-lg mb-4 flex items-center gap-2">
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
                      />
                    </svg>
                    Share this post
                  </h3>
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <button
                      @click="shareTwitter"
                      class="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1a91da] transition"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M8.29 20.25c7.55 0 11.68-6.26 11.68-11.67 0-.18 0-.36-.01-.53A8.34 8.34 0 0022 5.92a8.14 8.14 0 01-2.36.65 4.12 4.12 0 01-1.8-2.27 8.22 8.22 0 01-2.4.92 4.1 4.1 0 00-6.99 3.74A11.64 11.64 0 013.16 4.2a4.1 4.1 0 001.27 5.48 4.07 4.07 0 01-1.86-.51v.05a4.1 4.1 0 003.29 4.02 4.07 4.07 0 01-1.85.07 4.1 4.1 0 003.83 2.85A8.23 8.23 0 012 19.38a11.57 11.57 0 006.29.87"
                        />
                      </svg>
                      Twitter
                    </button>
                    <button
                      @click="shareLinkedIn"
                      class="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:bg-[#095797] transition"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3s-1.73-3.1-4.24-3.1c-1.47 0-2.54.79-3.15 1.94v-1.64H8.14v8.1h2.97v-4.5c0-1.19.42-2 1.8-2 .75 0 1.35.6 1.35 1.9v4.6h2.98zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.1H5.27v8.1h2.99z"
                        />
                      </svg>
                      LinkedIn
                    </button>
                    <button
                      @click="shareFacebook"
                      class="flex items-center gap-2 px-4 py-2 bg-[#4267B2] text-white rounded-lg hover:bg-[#365899] transition"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                        />
                      </svg>
                      Facebook
                    </button>
                    <button
                      @click="copyLink"
                      class="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      {{ copied ? "Copied!" : "Copy Link" }}
                    </button>
                  </div>
                </div>

                <!-- Back Button -->
                <div class="mt-12">
                  <NuxtLink
                    to="/blog"
                    class="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 font-medium text-lg transition"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    Back to all posts
                  </NuxtLink>
                </div>
              </div>

              <!-- Sidebar: Table of Contents -->
              <aside class="hidden md:block">
                <div
                  class="sticky top-24 bg-white rounded-2xl shadow-xl p-6 border border-gray-200"
                >
                  <h3 class="font-bold text-lg mb-4 text-gray-900">
                    On this page
                  </h3>
                  <nav class="space-y-2 text-sm">
                    <template v-for="heading in headings" :key="heading.id">
                      <a
                        :href="`#${heading.id}`"
                        class="block py-1 text-gray-600 hover:text-blue-600 transition"
                        :class="{
                          'pl-4': heading.level === 3,
                          'font-medium': heading.level === 2,
                        }"
                      >
                        {{ heading.text }}
                      </a>
                    </template>
                    <p
                      v-if="headings.length === 0"
                      class="text-gray-500 italic"
                    >
                      No headings found
                    </p>
                  </nav>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { $pb } = useNuxtApp();

interface Blog {
  id: string;
  title: string;
  content: string;
  cover_image: string;
  slug: string;
  created: string;
  updated: string;
}

const blog = ref<Blog | null>(null);
const loading = ref(true);
const copied = ref(false);
const headings = ref<{ id: string; text: string; level: number }[]>([]);

// SEO Head
const pageTitle = computed(() => blog.value ? `${blog.value.title} - Asadudzaman Joy` : 'Blog Post - Asadudzaman Joy');
const pageDescription = computed(() => {
  if (blog.value?.content) {
    const text = blog.value.content.replace(/<[^>]*>/g, '').trim();
    return text.length > 160 ? text.slice(0, 160) + '...' : text;
  }
  return 'Read this insightful blog post by Asadudzaman Joy on web development and technology.';
});
const pageImage = computed(() => blog.value?.cover_image ? getCoverImageUrl(blog.value) : 'https://asadjoy.com/images/profile.jpg');
const pageUrl = computed(() => `https://asadjoy.com/blog/${route.params.slug}`);

useHead({
  title: pageTitle,
  meta: [
    { name: "description", content: pageDescription },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    { property: "og:type", content: "article" },
    { property: "og:url", content: pageUrl },
    { property: "og:image", content: pageImage },
    { property: "article:author", content: "Asadudzaman Joy" },
    { property: "article:published_time", content: () => blog.value?.created },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    { name: "twitter:image", content: pageImage },
  ],
  link: [
    { rel: "canonical", href: pageUrl },
  ],
  script: computed(() => [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.value?.title,
        "description": pageDescription.value,
        "image": pageImage.value,
        "author": {
          "@type": "Person",
          "name": "Asadudzaman Joy"
        },
        "publisher": {
          "@type": "Person",
          "name": "Asadudzaman Joy"
        },
        "datePublished": blog.value?.created,
        "dateModified": blog.value?.updated,
        "url": pageUrl.value
      })
    }
  ])
});

const fetchBlog = async () => {
  try {
    loading.value = true;
    const slug = route.params.slug as string;
    const record = await $pb
      .collection("blogs")
      .getFirstListItem(`slug="${slug}"`);
    blog.value = record as any;

    await nextTick();
    extractHeadings();
  } catch (error) {
    console.error("Blog not found:", error);
    blog.value = null;
  } finally {
    loading.value = false;
  }
};

const getCoverImageUrl = (blog: Blog) => {
  return blog.cover_image ? $pb.getFileUrl(blog, blog.cover_image) : "";
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const readingTime = computed(() => {
  if (!blog.value?.content) return 1;
  const wordsPerMinute = 225;
  const wordCount = blog.value.content
    .replace(/<[^>]*>/g, "")
    .split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
});

const extractHeadings = () => {
  const content = document.querySelector(".prose");
  if (!content) return;

  headings.value = [];
  const elements = content.querySelectorAll("h2, h3");
  elements.forEach((el) => {
    const text = el.textContent || "";
    const id = text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    el.id = id;
    headings.value.push({
      id,
      text,
      level: el.tagName === "H2" ? 2 : 3,
    });
  });
};

// Share functions
const shareTwitter = () => {
  const url = window.location.href;
  const text = blog.value?.title;
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text + " →"
    )}&url=${encodeURIComponent(url)}`,
    "_blank"
  );
};

const shareLinkedIn = () => {
  const url = window.location.href;
  window.open(
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`,
    "_blank"
  );
};

const shareFacebook = () => {
  const url = window.location.href;
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    "_blank"
  );
};

const copyLink = async () => {
  await navigator.clipboard.writeText(window.location.href);
  copied.value = true;
  setTimeout(() => (copied.value = false), 2000);
};

onMounted(() => {
  fetchBlog();
});
</script>

<style scoped>
.prose :where(h2):not(:where([class~="not-prose"] *)) {
  @apply text-3xl mt-12 mb-6 border-b border-gray-200 pb-4;
}
.prose :where(h3):not(:where([class~="not-prose"] *)) {
  @apply text-2xl mt-10 mb-4;
}
</style>

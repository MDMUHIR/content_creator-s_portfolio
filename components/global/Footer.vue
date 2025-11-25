<template>
  <footer class="bg-gray-900 text-white mt-20">
    <!-- Main Footer Content -->
    <div class="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-16">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
      >
        <!-- Brand Section -->
        <div class="lg:col-span-1">
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-white mb-4">Asadudzaman Joy</h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-6">
              Content creator sharing insights on books, technology,
              productivity, and travel experiences across Bangladesh.
            </p>
          </div>

          <!-- Social Links -->
          <div class="flex space-x-4">
            <a
              href="https://www.youtube.com/@asadudzamanjoy"
              target="_blank"
              class="w-10 h-10 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="YouTube"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/asadudjoy"
              target="_blank"
              class="w-10 h-10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/asadudzamanjoy"
              target="_blank"
              class="w-10 h-10 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>

            <a
              href="https://www.tiktok.com/@asadudzaman_joy"
              target="_blank"
              class="w-10 h-10 hover:bg-black rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="TikTok"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-6">Quick Links</h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink
                to="/"
                class="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/about"
                class="text-gray-400 hover:text-white transition-colors duration-300"
              >
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/courses"
                class="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Courses
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/youtube"
                class="text-gray-400 hover:text-white transition-colors duration-300"
              >
                YouTube
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/blog"
                class="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Blog
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Content -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-6">Content</h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink
                to="/blog"
                class="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Latest Posts
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/youtube"
                class="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Video Tutorials
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/courses"
                class="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Online Courses
              </NuxtLink>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Book Reviews
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Travel Stories
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact & Newsletter -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-6">Stay Connected</h4>
          <!-- <p class="text-gray-400 text-sm mb-4">
            Get notified about new content, courses, and updates.
          </p> -->

          <!-- Newsletter Signup -->
          <!-- <form class="mb-6">
            <div class="flex">
              <input
                type="email"
                placeholder="Your email"
                class="flex-1 px-3 py-2 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </form> -->

          <!-- Contact Info -->
          <div class="text-sm text-gray-400">
            <p class="mb-2">
              <span class="block font-medium text-white">Email</span>
              <a
                href="mailto:contact.asadjoy@gmail.com"
                class="hover:text-white transition-colors"
              >
                contact.asadjoy@gmail.com
              </a>
            </p>
            <p>
              <span class="block font-medium text-white">Location</span>
              Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800">
      <div class="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            &copy; {{ new Date().getFullYear() }} Asadudzaman Joy. All rights
            reserved.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              class="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

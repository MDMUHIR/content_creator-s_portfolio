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
              href="#"
              class="w-10 h-10 bg-white hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="YouTube"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-white hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-white hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Twitter"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-white hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
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
          <p class="text-gray-400 text-sm mb-4">
            Get notified about new content, courses, and updates.
          </p>

          <!-- Newsletter Signup -->
          <form class="mb-6">
            <div class="flex">
              <input
                type="email"
                placeholder="Your email"
                class="flex-1 px-3 py-2 bg-white border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>

          <!-- Contact Info -->
          <div class="text-sm text-gray-400">
            <p class="mb-2">
              <span class="block font-medium text-white">Email</span>
              <a
                href="mailto:contact@example.com"
                class="hover:text-white transition-colors"
              >
                contact@example.com
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
            &copy; {{ new Date().getFullYear() }} Asaduzaman Joy. All rights
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

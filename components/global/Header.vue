<template>
  <header class="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="text-2xl font-bold text-gray-900">Asaduzaman Joy</NuxtLink>
        </div>
        <div class="hidden md:block">
          <ul class="flex space-x-8">
            <!-- <li><NuxtLink to="/" class="text-gray-700 hover:text-blue-600 transition-colors">Home</NuxtLink></li> -->
            <!-- <li><NuxtLink to="/about" class="text-gray-700 hover:text-blue-600 transition-colors">About</NuxtLink></li> -->
            <!-- <li><NuxtLink to="/portfolio" class="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</NuxtLink></li> -->
            <li><NuxtLink to="/courses" class="text-gray-700 hover:text-blue-600 transition-colors">Courses</NuxtLink></li>
            <!-- <li><NuxtLink to="/books" class="text-gray-700 hover:text-blue-600 transition-colors">Books</NuxtLink></li> -->
            <li><NuxtLink to="/youtube" class="text-gray-700 hover:text-blue-600 transition-colors">Popular videos</NuxtLink></li>
            <li><NuxtLink to="/blog" class="text-gray-700 hover:text-blue-600 transition-colors">Blog</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-gray-700 hover:text-blue-600 transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>
        <div class="md:hidden">
          <!-- Mobile menu button -->
          <button @click="toggleMenu" class="text-gray-700 hover:text-blue-600">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden">
        <ul class="px-2 pt-2 pb-3 space-y-1 bg-white rounded-md shadow-lg border">
          <li><NuxtLink to="/" class="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="block px-3 py-2 text-gray-700 hover:text-blue-600">About</NuxtLink></li>
          <li><NuxtLink to="/portfolio" class="block px-3 py-2 text-gray-700 hover:text-blue-600">Portfolio</NuxtLink></li>
          <li><NuxtLink to="/courses" class="block px-3 py-2 text-gray-700 hover:text-blue-600">Courses</NuxtLink></li>
          <li><NuxtLink to="/books" class="block px-3 py-2 text-gray-700 hover:text-blue-600">Books</NuxtLink></li>
          <li><NuxtLink to="/youtube" class="block px-3 py-2 text-gray-700 hover:text-blue-600">YouTube</NuxtLink></li>
          <li><NuxtLink to="/blog" class="block px-3 py-2 text-gray-700 hover:text-blue-600">Blog</NuxtLink></li>
          <li><NuxtLink to="/contact" class="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</NuxtLink></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

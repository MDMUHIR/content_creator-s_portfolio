<template>
  <header class="bg-gray-800 p-4">
    <nav class="container mx-auto flex justify-between">
      <NuxtLink to="/" class="text-xl font-bold">Jay's Portfolio</NuxtLink>
      <ul class="flex space-x-4">
        <!-- <li><NuxtLink to="/" class="hover:text-gray-400">Home</NuxtLink></li> -->
        <!-- <li><NuxtLink to="/portfolio" class="hover:text-gray-400">Portfolio</NuxtLink></li> -->
        <li><NuxtLink to="/courses" class="hover:text-gray-400">Courses</NuxtLink></li>
        <li><NuxtLink to="/books" class="hover:text-gray-400">Books</NuxtLink></li>
        <li><NuxtLink to="/youtube" class="hover:text-gray-400">YouTube</NuxtLink></li>
        <li><NuxtLink to="/blog" class="hover:text-gray-400">Blog</NuxtLink></li>
        <!-- <li><NuxtLink to="/about" class="hover:text-gray-400">About</NuxtLink></li> -->
        <li><NuxtLink to="/contact" class="hover:text-gray-400">Contact</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

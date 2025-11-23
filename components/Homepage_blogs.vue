<script setup></script>

<template>
  <section class="py-16 bg-[#F9F6F3]">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-2">
        How Can <span class="text-blue-600">I Help You?</span>
      </h2>
      <p class="text-gray-600 mb-10 max-w-xl">
        I provide useful resources and services to help you grow online.
      </p>

      <div class="grid md:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div
            class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4"
          >
            <span class="text-2xl">📹</span>
          </div>
          <h3 class="text-xl font-semibold mb-2">Grow a YouTube Channel</h3>
          <p class="text-gray-600 mb-4 text-sm">
            Learn my process for growing a YouTube channel based on consistency
            and smart content.
          </p>
          <NuxtLink to="/services/youtube" class="text-blue-600 font-medium">
            Learn more →
          </NuxtLink>
        </div>

        <!-- Card 2 -->
        <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div
            class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4"
          >
            <span class="text-2xl">⚡</span>
          </div>
          <h3 class="text-xl font-semibold mb-2">Be More Productive</h3>
          <p class="text-gray-600 mb-4 text-sm">
            Learn how to improve your habits, build routines, and work smarter
            every day.
          </p>
          <NuxtLink
            to="/services/productivity"
            class="text-green-600 font-medium"
          >
            Get started →
          </NuxtLink>
        </div>

        <!-- Card 3 -->
        <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div
            class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4"
          >
            <span class="text-2xl">💼</span>
          </div>
          <h3 class="text-xl font-semibold mb-2">Build an Online Business</h3>
          <p class="text-gray-600 mb-4 text-sm">
            Learn to turn your knowledge into an online business through systems
            and content.
          </p>
          <NuxtLink to="/services/business" class="text-purple-600 font-medium">
            Discover →
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

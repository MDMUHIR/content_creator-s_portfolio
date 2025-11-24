<template>
  <div class="bg-white text-black min-h-screen">
    <Header class="" />

    <main class="w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen">
      <div>
        <slot />
      </div>
    </main>

    <Footer />
  </div>
</template>

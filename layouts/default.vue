<template>
  <div class="bg-white text-black min-h-screen">
    <Header />

    <main class="w-full  mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div>
        <slot />
      </div>
    </main>

    <Footer />
  </div>
</template>

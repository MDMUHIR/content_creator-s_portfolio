<script setup>
import { ref, onMounted } from "vue";
const { $pb } = useNuxtApp();

const profile = ref("");

const fetchProfile = async () => {
  try {
    const records = await $pb.collection("portfolio").getFullList();
    const record = records[0];
    if (record?.profile_picture) {
      profile.value = $pb.getFileUrl(record, record.profile_picture);
    }
  } catch (err) {
    console.error("Profile fetch failed", err);
  }
};

onMounted(fetchProfile);
</script>

<template>
  <div class="font-sans antialiased text-gray-900 leading-relaxed">
    <!-- HERO SECTION -->
    <section
      class="relative overflow-hidden container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-28 bg-[#F9F6F3] rounded-3xl mt-6"
    >
      <!-- Background -->
      <div
        class="absolute inset-0 z-0 opacity-90 rounded-3xl"
        style="
          background-image: url('/images/wave.webp');
          background-size: cover;
          background-position: center;
        "
      ></div>

      <!-- Content Wrapper -->
      <div
        class="relative z-10 grid lg:grid-cols-2 items-center gap-10 sm:gap-14 md:gap-20"
      >
        <!-- Profile Image -->
        <div class="flex justify-center lg:justify-start order-2 lg:order-1">
          <img
            :src="profile || 'https://via.placeholder.com/600'"
            alt="Profile"
            class="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl shadow-xl object-cover border-4 border-white/70"
          />
        </div>

        <!-- Hero Text -->
        <div class="order-1 lg:order-2 text-center lg:text-left px-2 sm:px-0">
          <h1
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
          >
            Hey friends, I'm
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Asaduzaman Joy
            </span>
          </h1>

          <p
            class="text-lg sm:text-xl md:text-2xl text-gray-700 mb-3 font-medium"
          >
            Content Creator • Entrepreneur
          </p>

          <p
            class="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
          >
            I help people learn to code, build products, grow online businesses,
            and live more productive & fulfilling lives — all while having fun.
          </p>

          <div class="flex justify-center lg:justify-start">
            <NuxtLink
              to="/contact"
              class="px-8 sm:px-10 py-3 sm:py-4 border-2 border-gray-900 text-gray-900 font-semibold text-base sm:text-lg rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Say Hello 👋
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Newsletter Section -->
      <div
        class="relative z-10 bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 mt-16 sm:mt-20 md:mt-28 flex flex-col sm:flex-row items-center gap-10 sm:gap-12"
      >
        <div class="w-full sm:w-1/2">
          <h1
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3"
          >
            <span class="font-normal block">Join to</span> Lifenotes
          </h1>
          <p class="text-sm sm:text-base opacity-80 max-w-sm">
            Weekly tips on coding, productivity, YouTube, and building a life
            you love.
          </p>
        </div>

        <div class="w-full sm:w-1/2">
          <p
            class="font-semibold text-sm sm:text-base md:text-lg opacity-90 mb-3"
          >
            Weekly tips on coding, productivity, YouTube, and building a life
            you love.
          </p>

          <!-- Newsletter Form -->
          <form
            class="flex w-full bg-[#F9F6F3] rounded-full overflow-hidden shadow-inner px-1 sm:px-2 py-1 sm:py-2 sm:gap-2"
          >
            <input
              type="email"
              placeholder="you@example.com"
              class="flex-1 px-2 sm:px-4 py-2 sm:py-3 bg-transparent text-gray-900 text-sm sm:text-base md:text-lg focus:outline-none min-w-0"
              required
            />

            <button
              type="submit"
              class="px-3 sm:px-5 md:px-8 py-2 sm:py-3 bg-purple-600 text-white font-semibold text-xs sm:text-sm md:text-base rounded-full whitespace-nowrap hover:bg-purple-700 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>

          <p class="mt-2 text-xs sm:text-sm opacity-70">
            No spam • Unsubscribe anytime • 100% free
          </p>
        </div>
      </div>
    </section>

    <!-- BLOGS SECTION -->
    <section class="blog mt-20 overflow-hidden container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-28 bg-[#F9F6F3] rounded-3xl">
      <Homepage_blogs />
    </section>
  </div>
</template>

<style scoped>
/* Blob Animations */
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
.animate-blob {
  animation: blob 20s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
</style>

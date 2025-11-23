<script setup>
const { $pb } = useNuxtApp();
const profile = ref("");

const fetchProfile = async () => {
  try {
    const records = await $pb.collection("portfolio").getFullList("");
    const record = records[0];
    if (record) {
      profile.value = getImageUrl(record);
    }
  } catch (err) {
    console.error("Profile fetch failed", err);
  }
};

const getImageUrl = (record) => {
  if (record && record.profile_picture) {
    return $pb.getFileUrl(record, record.profile_picture);
  }
  return "";
};

onMounted(fetchProfile);
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"
      ></div>
      <div
        class="relative max-w-7xl mx-auto px-4 py-24 sm:py-32 text-center flex flex-col md:flex-row items-center justify-center gap-4"
      >
        <div class="left-part w-1/3 flex justify-center">
          <img
            :src="profile"
            class="w-72 h-72 rounded-full object-cover border"
            alt="Profile Picture"
          />
        </div>
        <div class="right-part w-2/3">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Hi, I'm <span class="text-blue-400">Asadudzaman Joy</span>
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-300 sm:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione similique sequi sed sunt dolores voluptate recusandae provident magni nihil, odio consequatur voluptatibus perferendis voluptatem nostrum vitae maiores placeat assumenda cumque, nam reiciendis qui culpa voluptas fugit sit. Ipsum velit porro commodi, veritatis cupiditate assumenda doloribus maiores, doloremque quo mollitia rem? Consequatur, fugiat? Doloribus, fuga? Vitae soluta asperiores dolorum doloribus, sequi fugit dolores facere cum itaque mollitia voluptates impedit temporibus quia, quod nobis commodi voluptas eum officia, assumenda autem? Iusto vitae impedit et ipsa sapiente. Voluptates dolorum rerum, alias autem architecto cum modi possimus! Ullam, voluptatem! Porro laboriosam maiores corporis velit!
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
           
            <NuxtLink
              to="/contact"
              class="text-base font-semibold leading-6 text-gray-300 hover:text-blue-400 transition-colors"
            >
              Get In Touch <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-24 bg-gray-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What I Do
          </h2>
          <p class="mt-4 text-lg leading-8 text-gray-300">
            I work with a variety of technologies and frameworks to bring ideas
            to life
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl
            class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16"
          >
            <div class="flex flex-col items-start">
              <div class="rounded-lg bg-blue-500/10 p-2">
                <div class="text-blue-400">
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659.171c-.864.092-1.21.486-1.21 1.171s.346.879 1.21 1.171a2.25 2.25 0 0 0 .659.17v5.715a.75.75 0 0 1-1.354.416l-7.5-5.25a.75.75 0 0 1 0-1.416l7.5-5.25A.75.75 0 0 1 9.75 3.104Z"
                    />
                  </svg>
                </div>
              </div>
              <h3 class="mt-4 text-lg font-semibold leading-6 text-white">
                Frontend Development
              </h3>
              <p class="mt-2 text-base leading-7 text-gray-300">
                Creating responsive, interactive user interfaces with Vue.js,
                React, and modern CSS frameworks like Tailwind CSS.
              </p>
            </div>
            <div class="flex flex-col items-start">
              <div class="rounded-lg bg-green-500/10 p-2">
                <div class="text-green-400">
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 3 3m-3-3V2.25m12.75 0v11.25a3 3 0 0 1-3 3"
                    />
                  </svg>
                </div>
              </div>
              <h3 class="mt-4 text-lg font-semibold leading-6 text-white">
                Backend Development
              </h3>
              <p class="mt-2 text-base leading-7 text-gray-300">
                Building robust APIs and server-side applications with Node.js,
                Python, and databases like PostgreSQL and MongoDB.
              </p>
            </div>
            <div class="flex flex-col items-start">
              <div class="rounded-lg bg-purple-500/10 p-2">
                <div class="text-purple-400">
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 14.25v-2.625c0-.621-.504-1.125-1.125-1.125h-1.5c-.621 0-1.125.504-1.125 1.125v2.625M21 12h-2.25m-4.5 0h4.5m-4.5 0v-1.5c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v1.5m-6.75 0v1.5c0 .621-.504 1.125-1.125 1.125H16.5c-.621 0-1.125-.504-1.125-1.125v-1.5M21 12v3m-9-3v3"
                    />
                  </svg>
                </div>
              </div>
              <h3 class="mt-4 text-lg font-semibold leading-6 text-white">
                Database Design
              </h3>
              <p class="mt-2 text-base leading-7 text-gray-300">
                Designing efficient, scalable database schemas and implementing
                optimal query strategies for high-performance applications.
              </p>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p class="mt-4 text-lg leading-8 text-gray-300">
            Some of my recent work that showcases my skills and approach
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div
            class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3"
          >
            <div
              class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div class="p-6">
                <h3 class="text-xl font-semibold text-white mb-2">
                  E-Commerce Platform
                </h3>
                <p class="text-gray-300 mb-4">
                  A full-featured e-commerce solution with user authentication,
                  payment processing, and admin dashboard.
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    class="inline-block bg-blue-600 px-2 py-1 rounded text-sm"
                    >Vue.js</span
                  >
                  <span
                    class="inline-block bg-green-600 px-2 py-1 rounded text-sm"
                    >Node.js</span
                  >
                  <span
                    class="inline-block bg-purple-600 px-2 py-1 rounded text-sm"
                    >MongoDB</span
                  >
                </div>
                <NuxtLink
                  to="/portfolio"
                  class="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn More →
                </NuxtLink>
              </div>
            </div>
            <div
              class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div class="p-6">
                <h3 class="text-xl font-semibold text-white mb-2">
                  Task Management App
                </h3>
                <p class="text-gray-300 mb-4">
                  A collaborative task management application with real-time
                  updates and team collaboration features.
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    class="inline-block bg-blue-600 px-2 py-1 rounded text-sm"
                    >React</span
                  >
                  <span
                    class="inline-block bg-green-600 px-2 py-1 rounded text-sm"
                    >Express.js</span
                  >
                  <span
                    class="inline-block bg-red-600 px-2 py-1 rounded text-sm"
                    >Socket.io</span
                  >
                </div>
                <NuxtLink
                  to="/portfolio"
                  class="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn More →
                </NuxtLink>
              </div>
            </div>
            <div
              class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div class="p-6">
                <h3 class="text-xl font-semibold text-white mb-2">
                  Weather Analytics Dashboard
                </h3>
                <p class="text-gray-300 mb-4">
                  A comprehensive weather monitoring dashboard with data
                  visualization and predictive analytics.
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    class="inline-block bg-blue-600 px-2 py-1 rounded text-sm"
                    >Python</span
                  >
                  <span
                    class="inline-block bg-yellow-600 px-2 py-1 rounded text-sm"
                    >Flask</span
                  >
                  <span
                    class="inline-block bg-orange-600 px-2 py-1 rounded text-sm"
                    >Chart.js</span
                  >
                </div>
                <NuxtLink
                  to="/portfolio"
                  class="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn More →
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-12">
          <NuxtLink
            to="/portfolio"
            class="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
          >
            View All Projects
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section
      class="relative overflow-hidden bg-gradient-to-r from-blue-900/40 to-purple-900/40"
    >
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Start Your Next Project?
          </h2>
          <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Let's discuss how we can work together to bring your ideas to life.
            I'm always excited to take on new challenges and create something
            amazing.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink
              to="/contact"
              class="rounded-md bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              Get In Touch
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="text-base font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
            >
              Learn About Me <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

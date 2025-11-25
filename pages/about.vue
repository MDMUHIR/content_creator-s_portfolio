<script setup>
// SEO Head
useHead({
  title: "About Asadudzaman Joy - Content Creator & Developer",
  meta: [
    { name: "description", content: "Learn more about Asadudzaman Joy, a passionate full-stack developer and content creator with a love for creating beautiful web applications and sharing knowledge about books and technology." },
    { property: "og:title", content: "About Asadudzaman Joy - Content Creator & Developer" },
    { property: "og:description", content: "Learn more about Asadudzaman Joy, a passionate full-stack developer and content creator with a love for creating beautiful web applications and sharing knowledge about books and technology." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://asadjoy.com/about" },
    { property: "og:image", content: "https://asadjoy.com/images/profile.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "About Asadudzaman Joy - Content Creator & Developer" },
    { name: "twitter:description", content: "Learn more about Asadudzaman Joy, a passionate full-stack developer and content creator with a love for creating beautiful web applications and sharing knowledge about books and technology." },
    { name: "twitter:image", content: "https://asadjoy.com/images/profile.jpg" },
  ],
  link: [
    { rel: "canonical", href: "https://asadjoy.com/about" },
  ],
});
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">About Me</h1>
    <div class="max-w-4xl mx-auto">
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Who I Am</h2>
        <p class="text-lg mb-4">
          Hello! I'm Jay Ruhmuhir, a passionate full-stack developer with a love for creating beautiful,
          functional web applications. I specialize in modern web technologies and have extensive experience
          building scalable applications.
        </p>
        <p class="text-lg mb-4">
          My journey in software development began with a curiosity about how things work, and it has evolved
          into a career where I get to solve complex problems and build solutions that make a difference.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Skills & Technologies</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-gray-800 p-4 rounded-lg">
            <h3 class="font-semibold">Frontend</h3>
            <ul class="mt-2 text-sm">
              <li>JavaScript/TypeScript</li>
              <li>Vue.js/Nuxt.js</li>
              <li>React/Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div class="bg-gray-800 p-4 rounded-lg">
            <h3 class="font-semibold">Backend</h3>
            <ul class="mt-2 text-sm">
              <li>Node.js</li>
              <li>Python</li>
              <li>Django/Flask</li>
              <li>Express.js</li>
            </ul>
          </div>
          <div class="bg-gray-800 p-4 rounded-lg">
            <h3 class="font-semibold">Database</h3>
            <ul class="mt-2 text-sm">
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>PocketBase</li>
              <li>Redis</li>
            </ul>
          </div>
          <div class="bg-gray-800 p-4 rounded-lg">
            <h3 class="font-semibold">Tools</h3>
            <ul class="mt-2 text-sm">
              <li>Git</li>
              <li>Docker</li>
              <li>AWS/GCP</li>
              <li>Linux</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Experience</h2>
        <div class="space-y-6">
          <div class="bg-gray-800 p-6 rounded-lg">
            <div class="flex justify-between mb-2">
              <h3 class="font-semibold">Senior Full-Stack Developer</h3>
              <span class="text-gray-400">2023 - Present</span>
            </div>
            <p class="text-sm text-gray-400 mb-2">Tech Solutions Inc.</p>
            <p>Led development of multiple web applications serving 10k+ users.
            Implemented microservices architecture and improved performance by 40%.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <div class="flex justify-between mb-2">
              <h3 class="font-semibold">Full-Stack Developer</h3>
              <span class="text-gray-400">2021 - 2023</span>
            </div>
            <p class="text-sm text-gray-400 mb-2">StartupXYZ</p>
            <p>Built and maintained customer-facing web platforms using Vue.js, Node.js, and MongoDB.
            Collaborated with cross-functional teams to deliver projects on time.</p>
          </div>
        </div>
      </div>

      <div class="text-center">
        <h2 class="text-2xl font-semibold mb-4">Let's Connect</h2>
        <p class="text-lg">
          I'm always interested in new opportunities and collaborations.
          Feel free to reach out if you'd like to work together or just chat about technology!
        </p>
      </div>
    </div>
  </div>
</template>

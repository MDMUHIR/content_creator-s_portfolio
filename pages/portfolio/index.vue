<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">My Portfolio</h1>
    <p class="mb-8 text-lg text-gray-300">Here are some of the projects I've worked on. Each project represents a challenge solved and a lesson learned.</p>

    <div v-if="projects.length === 0" class="text-center text-gray-400 py-12">
      <p class="text-lg">No projects yet. Check back soon!</p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="project in projects" :key="project.id" class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <img v-if="project.image" :src="getProjectImageUrl(project)" :alt="project.title" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
          <p class="text-gray-400 mb-4" v-html="project.description"></p>
          <div class="mb-4">
            <span v-for="tag in project.tags.split(',')" :key="tag" class="inline-block bg-blue-600 px-2 py-1 rounded text-sm mr-2 mb-2">{{ tag.trim() }}</span>
          </div>
          <div class="flex space-x-4">
            <a :href="project.url" target="_blank" class="text-blue-400 hover:text-blue-300">View Project</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Project interface based on PocketBase collection
interface Project {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  title: string;
  description: string;
  image: string;
  url: string;
  tags: string;
}

const projects = ref<Project[]>([]);
const { $pb } = useNuxtApp();

const fetchProjects = async () => {
  try {
    const result = await $pb.collection('projects').getList(1, 50, {
      sort: '-created',
    });
    projects.value = result.items as unknown as Project[];
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
};

const getProjectImageUrl = (project: Project) => {
  if (project.image) {
    return $pb.getFileUrl(project, project.image);
  }
  return '';
};

onMounted(() => {
  fetchProjects();
});
</script>

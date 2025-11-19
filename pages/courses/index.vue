<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Courses</h1>
    <p class="mb-8 text-lg text-gray-300">Browse our collection of courses and tutorials to level up your skills.</p>

    <div v-if="courses.length === 0" class="text-center text-gray-400 py-12">
      <p class="text-lg">No courses available yet. Check back soon!</p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="course in courses" :key="course.id" class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <NuxtLink :to="`/courses/${course.id}`">
          <img v-if="course.cover_image" :src="getCourseImageUrl(course)" :alt="course.title" class="w-full h-48 object-cover">
        </NuxtLink>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">
            <NuxtLink :to="`/courses/${course.id}`" class="hover:text-blue-400 transition-colors">
              {{ course.title }}
            </NuxtLink>
          </h3>
          <p class="text-gray-400 mb-4" v-html="course.description"></p>
          <div class="flex justify-between items-center">
            <span class="text-2xl font-bold text-blue-400">${{ course.price }}</span>
            <NuxtLink :to="`/courses/${course.id}`" class="text-blue-400 hover:text-blue-300">View Details</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Course interface based on PocketBase collection
interface Course {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  title: string;
  description: string;
  price: number;
  cover_image: string;
  published: boolean;
}

const courses = ref<Course[]>([]);
const { $pb } = useNuxtApp();

const fetchCourses = async () => {
  try {
    const result = await $pb.collection('courses').getList(1, 50, {
      filter: 'published = true',
      sort: '-created',
    });
    courses.value = result.items as unknown as Course[];
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
};

const getCourseImageUrl = (course: Course) => {
  if (course.cover_image) {
    return $pb.getFileUrl(course, course.cover_image);
  }
  return '';
};

onMounted(() => {
  fetchCourses();
});
</script>

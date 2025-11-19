<template>
  <div>
    <div v-if="loading" class="text-center py-12">
      <p class="text-lg text-gray-400">Loading course...</p>
    </div>

    <div v-else-if="!course" class="text-center py-12">
      <h1 class="text-4xl font-bold mb-4 text-red-400">Course not found</h1>
      <p class="text-lg text-gray-400 mb-8">The course you're looking for doesn't exist.</p>
      <NuxtLink to="/courses" class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
        ← Back to Courses
      </NuxtLink>
    </div>

    <div v-else>
      <div class="mb-8">
        <h1 class="text-5xl font-bold mb-4">{{ course.title }}</h1>
      </div>

      <div v-if="course.cover_image" class="mb-8">
        <img
          :src="getCourseImageUrl(course)"
          :alt="course.title"
          class="w-full rounded-lg shadow-lg max-h-96 object-cover"
        />
      </div>

      <div class="prose prose-lg prose-invert max-w-none" v-html="course.description"></div>

      <div class="mt-8">
        <span class="text-3xl font-bold text-blue-400">${{ course.price }}</span>
      </div>

      <div class="mt-12 pt-8 border-t border-gray-700">
        <NuxtLink to="/courses" class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
          ← Back to Courses
        </NuxtLink>
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

const route = useRoute();
const { $pb } = useNuxtApp();

const course = ref<Course | null>(null);
const loading = ref(true);

const fetchCourse = async () => {
  try {
    loading.value = true;
    const id = route.params.id as string;
    const result = await $pb.collection('courses').getOne(id);
    course.value = result as unknown as Course;
  } catch (error) {
    console.error('Error fetching course:', error);
    course.value = null;
  } finally {
    loading.value = false;
  }
};

const getCourseImageUrl = (course: Course) => {
  if (course.cover_image) {
    return $pb.getFileUrl(course, course.cover_image);
  }
  return '';
};

onMounted(() => {
  fetchCourse();
});
</script>

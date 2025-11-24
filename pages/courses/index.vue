<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

interface Course {
  id: string;
  title: string;
  description?: string;
  price: number;
  discount: string;
  cover_image: string;
  published: boolean;
  created: string;
  updated: string;
  starting_date?: string;
  ending_date?: string;
  course_link?: string;
}

const courses = ref<Course[]>([]);
const searchTerm = ref("");
const sortBy = ref("created");
const loading = ref(true);
const { $pb } = useNuxtApp();

// Fetch courses
const fetchCourses = async () => {
  try {
    loading.value = true;
    const result = await $pb.collection("courses").getFullList({
      filter: "published = true",
      sort: "-created",
    });
    courses.value = result as Course[];
  } catch (err) {
    console.error("Error loading courses:", err);
  } finally {
    loading.value = false;
  }
};

// Image URL helper
const getCourseImageUrl = (course: Course) => {
  return course.cover_image
    ? $pb.getFileUrl(course, course.cover_image)
    : "/placeholder-course.jpg";
};

// Short excerpt
const shortExcerpt = (html: string | undefined) => {
  if (!html) return "";
  const text = html.replace(/<[^>]*>/g, "");
  return text.length > 100 ? text.slice(0, 100) + "..." : text;
};

// Date formatter
const formatDate = (d: string) => {
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

// Days until start
const daysUntilStart = (course: Course) => {
  if (!course.starting_date) return null;
  const diff = new Date(course.starting_date).getTime() - Date.now();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

// Discount helpers
const courseDiscountPercent = (course: Course) => {
  const discount = Number(course.discount || 0);
  if (!discount) return null;
  return Math.round((discount / Number(course.price)) * 100);
};

const finalPrice = (course: Course) => {
  const discount = Number(course.discount || 0);
  return Math.max(0, Number(course.price) - discount);
};

// Filtered & Sorted Courses
const filteredCourses = computed(() => {
  let list = courses.value.filter((c) => {
    const search = searchTerm.value.toLowerCase();
    const desc = c.description ? c.description.replace(/<[^>]*>/g, "") : "";
    const text = (c.title + " " + desc).toLowerCase();
    return text.includes(search);
  });

  switch (sortBy.value) {
    case "starting_date":
      list.sort((a, b) => {
        const da = a.starting_date
          ? new Date(a.starting_date).getTime()
          : Infinity;
        const db = b.starting_date
          ? new Date(b.starting_date).getTime()
          : Infinity;
        return da - db;
      });
      break;
    case "price":
      list.sort((a, b) => finalPrice(a) - finalPrice(b));
      break;
    case "price_desc":
      list.sort((a, b) => finalPrice(b) - finalPrice(a));
      break;
    case "discount":
      list.sort(
        (a, b) =>
          (courseDiscountPercent(b) || 0) - (courseDiscountPercent(a) || 0)
      );
      break;
    default:
      list.sort(
        (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
      );
  }

  return list;
});

onMounted(() => fetchCourses());
</script>
<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-5xl font-extrabold text-gray-900 mb-4">All Courses</h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Master new skills with our expert-led courses. New batches starting
        soon!
      </p>
    </div>

    <!-- Filters Bar -->
    <div
      class="mb-10 flex flex-col lg:flex-row gap-4 items-center justify-between"
    >
      <div class="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
        <!-- Search -->
        <div class="relative">
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Search by title or topic..."
            class="pl-12 pr-6 py-4 w-full lg:w-96 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
          />
          <svg
            class="absolute left-4 top-5 w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <!-- Sort -->
        <select
          v-model="sortBy"
          class="px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="created">Newest First</option>
          <option value="starting_date">Soonest Start</option>
          <option value="price">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="discount">Biggest Discount</option>
        </select>
      </div>

      <!-- Course count -->
      <div class="text-gray-600 font-medium">
        {{ filteredCourses.length }} course{{
          filteredCourses.length !== 1 ? "s" : ""
        }}
        available
      </div>
    </div>

    <!-- Loading Skeleton -->
    <div
      v-if="loading"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <div
        v-for="n in 6"
        :key="n"
        class="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse"
      >
        <div class="h-48 bg-gray-200"></div>
        <div class="p-6">
          <div class="h-6 bg-gray-200 rounded mb-3"></div>
          <div class="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
          <div class="h-10 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else-if="filteredCourses.length === 0" class="text-center py-24">
      <div
        class="bg-gray-100 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center"
      >
        <svg
          class="w-16 h-16 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      </div>
      <h3 class="text-2xl font-bold text-gray-800 mb-2">No courses found</h3>
      <p class="text-gray-600">Try adjusting your search or filters.</p>
    </div>

    <!-- Course Grid -->
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      <div
        v-for="course in filteredCourses"
        :key="course.id"
        class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
      >
        <NuxtLink :to="`/courses/${course.id}`" class="block">
          <!-- Cover Image -->
          <div class="relative overflow-hidden">
            <img
              :src="getCourseImageUrl(course)"
              :alt="course.title"
              class="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <!-- Discount Badge -->
            <div
              v-if="courseDiscountPercent(course)"
              class="absolute top-3 left-3 bg-red-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg animate-pulse"
            >
              -{{ courseDiscountPercent(course) }}% OFF
            </div>
            <!-- Starts Soon Badge -->
            <div
              v-if="
                daysUntilStart(course) !== null &&
                daysUntilStart(course) > 0 &&
                daysUntilStart(course) <= 7
              "
              class="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg"
            >
              Starts in {{ daysUntilStart(course) }} day{{
                daysUntilStart(course) > 1 ? "s" : ""
              }}
            </div>
          </div>

          <div class="p-6">
            <!-- Title -->
            <h3
              class="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors"
            >
              {{ course.title }}
            </h3>

            <!-- Short excerpt -->
            <p
              class="text-gray-600 text-sm mb-4 line-clamp-2"
              v-html="shortExcerpt(course.description)"
            ></p>

            <!-- Start Date -->
            <div
              v-if="course.starting_date"
              class="text-xs text-gray-500 mb-4 flex items-center gap-2"
            >
              <svg
                class="w-4 h-4 text-amber-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h.01a1 1 0 100-2H6zm3 0a1 1 0 000 2h.01a1 1 0 100-2H9zm3 0a1 1 0 000 2h.01a1 1 0 100-2h-.01zm-3 4a1 1 0 000 2h.01a1 1 0 100-2H9zm3 0a1 1 0 000 2h.01a1 1 0 100-2h-.01zm-3 4a1 1 0 000 2h.01a1 1 0 100-2H9z"
                  clip-rule="evenodd"
                />
              </svg>
              Starts {{ formatDate(course.starting_date) }}
            </div>

            <!-- Price -->
            <div class="flex items-center justify-between mt-5">
              <div>
                <!-- Discounted Price -->
                <div class="text-2xl font-bold text-amber-600">
                  ৳ {{ finalPrice(course).toLocaleString() }}
                </div>
                <!-- Old Price (strikethrough) -->
                <div
                  v-if="courseDiscountPercent(course)"
                  class="text-sm text-gray-500 line-through"
                >
                  ৳ {{ Number(course.price).toLocaleString() }}
                </div>
              </div>

              <!-- CTA Button -->
              <div class="text-right">
                <span
                  class="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-5 py-3 rounded-xl shadow-lg transform hover:scale-105 transition"
                >
                  View Details →
                </span>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>

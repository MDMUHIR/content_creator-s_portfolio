<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Books</h1>
    <p class="mb-8 text-lg text-gray-300">Check out my published books.</p>

    <div v-if="books.length === 0" class="text-center text-gray-400 py-12">
      <p class="text-lg">No books available yet. Check back soon!</p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="book in books" :key="book.id" class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <a :href="book.purchase_url" target="_blank">
          <img v-if="book.cover_image" :src="getBookImageUrl(book)" :alt="book.title" class="w-full h-64 object-cover">
        </a>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">
            <a :href="book.purchase_url" target="_blank" class="hover:text-blue-400 transition-colors">
              {{ book.title }}
            </a>
          </h3>
          <p class="text-gray-400 mb-4" v-html="book.description"></p>
          <div class="flex justify-end">
            <a :href="book.purchase_url" target="_blank" class="text-blue-400 hover:text-blue-300">Purchase Book</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Book interface based on PocketBase collection
interface Book {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  title: string;
  description: string;
  cover_image: string;
  purchase_url: string;
}

const books = ref<Book[]>([]);
const { $pb } = useNuxtApp();

const fetchBooks = async () => {
  try {
    const result = await $pb.collection('books').getList(1, 50, {
      sort: '-created',
    });
    books.value = result.items as unknown as Book[];
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

const getBookImageUrl = (book: Book) => {
  if (book.cover_image) {
    return $pb.getFileUrl(book, book.cover_image);
  }
  return '';
};

onMounted(() => {
  fetchBooks();
});
</script>

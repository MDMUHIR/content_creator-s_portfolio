<template>
  <div class="max-w-3xl mx-auto px-6 py-12">
    <!-- Header -->
    <h1 class="text-4xl font-bold text-gray-900 mb-4 text-center">
      Contact Me
    </h1>
    <p class="mb-10 text-lg text-gray-600 text-center max-w-xl mx-auto">
      Ready to start a project? I'd love to hear from you. Send me a message and
      I'll reply as soon as possible.
    </p>

    <!-- Success Message -->
    <div
      v-if="submitted"
      class="max-w-md mx-auto text-center bg-green-100 border border-green-300 rounded-xl p-6 mb-10"
    >
      <h3 class="text-xl font-semibold text-green-700 mb-1">
        Message Sent Successfully!
      </h3>
      <p class="text-green-600">
        Thank you for reaching out — I'll get back to you shortly.
      </p>
    </div>

    <!-- Contact Form -->
    <form
      @submit.prevent="submitForm"
      class="max-w-md mx-auto bg-white border border-gray-200 shadow-sm rounded-xl p-6"
    >
      <!-- Name -->
      <div class="mb-6">
        <label for="name" class="block text-sm font-medium text-gray-700 mb-2"
          >Name *</label
        >
        <input
          v-model="form.name"
          type="text"
          id="name"
          required
          class="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          placeholder="Your full name"
        />
      </div>

      <!-- Email -->
      <div class="mb-6">
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2"
          >Email *</label
        >
        <input
          v-model="form.email"
          type="email"
          id="email"
          required
          class="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          placeholder="your.email@example.com"
        />
      </div>

      <!-- Subject -->
      <div class="mb-6">
        <label
          for="subject"
          class="block text-sm font-medium text-gray-700 mb-2"
          >Subject</label
        >
        <input
          v-model="form.subject"
          type="text"
          id="subject"
          class="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          placeholder="What's this about?"
        />
      </div>

      <!-- Message -->
      <div class="mb-6">
        <label
          for="message"
          class="block text-sm font-medium text-gray-700 mb-2"
          >Message *</label
        >
        <textarea
          v-model="form.message"
          id="message"
          rows="5"
          required
          class="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-vertical"
          placeholder="Tell me about your project..."
        ></textarea>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="loading"
        class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <span v-if="loading" class="flex items-center justify-center">
          <svg
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Sending...
        </span>
        <span v-else>Send Message</span>
      </button>
    </form>

    <!-- Direct Contact Section -->
    <div class="max-w-md mx-auto mt-10 text-center">
      <p class="text-gray-500 mb-4">Or contact me directly:</p>

      <div class="space-y-3">
        <ContactItem label="Email" value="jayru@mhir.com" />
        <ContactItem label="LinkedIn" value="/in/jay-ruhmitem" />
        <ContactItem label="Twitter" value="@jayruhmitem" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

/* Reusable small contact item component */
const ContactItem = {
  props: ["label", "value"],
  template: `
    <div class="flex items-center justify-center gap-2 text-gray-700">
      <span class="font-medium">{{ label }}:</span>
      <span class="text-blue-600 hover:underline cursor-pointer">{{ value }}</span>
      <button
        class="text-gray-400 hover:text-gray-600"
        @click="copy(value)"
        title="Copy"
      >
        📋
      </button>
    </div>
  `,
  methods: {
    copy(text) {
      navigator.clipboard.writeText(text);
    },
  },
};

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const loading = ref(false);
const submitted = ref(false);

const submitForm = async () => {
  if (loading.value) return;

  loading.value = true;

  try {
    await new Promise((resolve) => setTimeout(resolve, 1500)); // mock API call

    form.value = { name: "", email: "", subject: "", message: "" };
    submitted.value = true;

    setTimeout(() => (submitted.value = false), 5000);
  } catch (error) {
    alert("Failed to send message. Please try again.");
  } finally {
    loading.value = false;
  }
};
</script>

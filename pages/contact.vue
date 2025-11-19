<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Contact Me</h1>
    <p class="mb-8 text-lg text-gray-300 text-center">Ready to start a project? I'd love to hear from you. Send me a message and I'll respond as soon as possible.</p>

    <div v-if="submitted" class="max-w-md mx-auto text-center bg-green-800 border border-green-700 rounded-lg p-6 mb-8">
      <h3 class="text-xl font-semibold text-green-300 mb-2">Thank you!</h3>
      <p class="text-green-200">Your message has been sent successfully. I'll get back to you soon.</p>
    </div>

    <form @submit.prevent="submitForm" class="max-w-md mx-auto bg-gray-800 rounded-lg p-6 shadow-lg">
      <div class="mb-6">
        <label for="name" class="block text-sm font-medium mb-2 text-gray-300">Name *</label>
        <input
          v-model="form.name"
          type="text"
          id="name"
          required
          class="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          placeholder="Your full name">
      </div>

      <div class="mb-6">
        <label for="email" class="block text-sm font-medium mb-2 text-gray-300">Email *</label>
        <input
          v-model="form.email"
          type="email"
          id="email"
          required
          class="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          placeholder="your.email@example.com">
      </div>

      <div class="mb-6">
        <label for="subject" class="block text-sm font-medium mb-2 text-gray-300">Subject</label>
        <input
          v-model="form.subject"
          type="text"
          id="subject"
          class="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          placeholder="What's this about?">
      </div>

      <div class="mb-6">
        <label for="message" class="block text-sm font-medium mb-2 text-gray-300">Message *</label>
        <textarea
          v-model="form.message"
          id="message"
          rows="5"
          required
          class="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-vertical"
          placeholder="Tell me about your project..."></textarea>
      </div>

      <button
        type="submit"
        :disabled="loading"
        class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800">
        <span v-if="loading" class="flex items-center justify-center">
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        </span>
        <span v-else>Send Message</span>
      </button>
    </form>

    <div class="max-w-md mx-auto mt-8 text-center">
      <p class="text-gray-400 mb-4">Or reach out directly:</p>
      <div class="space-y-2">
        <p class="text-gray-300">📧 jayru@mhir.com</p>
        <p class="text-gray-300">📱 LinkedIn: /in/jay-ruhmitem</p>
        <p class="text-gray-300">🐦 Twitter: @jayruhmitem</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      loading: false,
      submitted: false
    }
  },
  methods: {
    async submitForm() {
      if (this.loading) return

      this.loading = true

      try {
        // For demonstration, we'll just simulate the submission
        // In a real implementation, this would submit to your backend API
        await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call

        // Reset form
        this.form = { name: '', email: '', subject: '', message: '' }
        this.submitted = true

        // Hide success message after 5 seconds
        setTimeout(() => {
          this.submitted = false
        }, 5000)

      } catch (error) {
        console.error('Error submitting form:', error)
        // In a real implementation, show error message to user
        alert('Failed to send message. Please try again.')
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

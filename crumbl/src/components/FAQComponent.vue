<template>
  <div class="faq">
    <h2>Frequently Asked Questions</h2>
    <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
      <div class="faq-question" @click="toggleFaq(index)">
        <span>{{ faq.question }}</span>
        <span class="arrow">{{ activeIndex === index ? "▲" : "▼" }}</span>
      </div>
      <div v-if="activeIndex === index" class="faq-answer">
        <p>{{ faq.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQComponent",
  data() {
    return {
      faqs: [
        {
          question: "How can I place an order?",
          answer: "You can place an order online through our website or visit one of our stores.",
          link: "/how-to-order",
        },
        {
          question: "Do you offer gluten-free options?",
          answer: "Yes, we have a variety of gluten-free cookies available.",
          link: null,
        },
        {
          question: "Can I customize my cookies?",
          answer: "Absolutely! You can customize your cookies during the checkout process.",
          link: "/customization",
        },
      ],
      activeIndex: null,
    };
  },
  methods: {
    toggleFaq(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.faq {
  padding: 20px;
  font-family: 'Roboto', sans-serif;
}

h2 {
  font-size: 2rem;
  color: #ff6f61;
  margin-bottom: 20px;
}

.faq-item {
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;
  color: #333;
  transition: color 0.3s ease;
}

.faq-question:hover {
  color: #ff6f61;
}

.arrow {
  font-size: 1rem;
  color: #888;
}

.faq-answer {
  margin-top: 10px;
  font-size: 1rem;
  color: #555;
}

.faq-answer a {
  color: #ff6f61;
  text-decoration: none;
  font-weight: bold;
}

.faq-answer a:hover {
  text-decoration: underline;
}
</style>

<template>
  <div class="menu">
    <h2>Our Cookies</h2>
    <div class="cookie-list">
      <Card
        v-for="cookie in cookies"
        :key="cookie.id"
        :cookie="cookie"
        :addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import Card from "./CookieCard.vue";

export default {
  name: "AppMenu",
  components: {
    Card,
  },
  props: {
    cookies: {
      type: Array,
      required: true,
    },
    addToCart: {
      type: Function,
      required: true,
    },
  },
};
</script>

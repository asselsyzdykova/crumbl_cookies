<template>
  <div class="home-page">
    <div v-if="loading">Load...</div>
    <div v-else>

      <div class="search-bar">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search for cookies..."
        />
      </div>

      <div class="cookies-list">
        <CookieCard
          v-for="cookie in filteredCookies"
          :key="cookie.id"
          :name="cookie.name"
          :description="cookie.description"
          :image="cookie.image"
          :price="cookie.price"
          :id="cookie.id"
          @add-to-cart="addToCart"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CookieCard from "@/components/CookieCard.vue";
import { useCartStore } from "@/stores/cartStore";

export default {
  name: "HomeView",
  components: {
    CookieCard,
  },
  data() {
    return {
      cookies: [],
      loading: true,
      searchQuery: "",
    };
  },
  computed: {

    filteredCookies() {
      return this.cookies.filter((cookie) =>
        cookie.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    addToCart(cookie) {
      const cartStore = useCartStore();
      cartStore.addToCart(cookie);
    },
  },
  async created() {
    try {
      const response = await fetch("/src/data/cookies.json");
      this.cookies = await response.json();
    } catch (error) {
      console.error("Data loading error:", error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.home-page {
  padding: 1rem;
  text-align: center;
  padding-top: 120px;
}

.cookies-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.search-bar {
  margin-bottom: 1rem;
  text-align: center;
}

.search-bar input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 80%;
  max-width: 400px;
}
</style>

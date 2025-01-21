<script>
import { useCartStore } from "@/stores/cartStore";
import { useRouter } from "vue-router";

export default {
  name: "AppHeader",
  data() {
    return {
      cartStore: useCartStore(),
      router: useRouter(),
    };
  },
  computed: {
    totalQuantity() {
      return this.cartStore.totalQuantity;
    },
  },
  methods: {
    navigateToFeedback() {
      this.router.push({ name: 'feedback' });
    },
  },
};
</script>

<template>
  <header class="app-header">
    <h1>🍪 Crumbl Cookies</h1>
    <nav>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/feedback">Feedback</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
      </ul>
    </nav>
    <button class="cart-button" @click="cartStore.isCartVisible = !cartStore.isCartVisible">
      🛒 Cart ({{ totalQuantity }})
    </button>
  </header>
</template>


<style scoped>
header {
  background-color: #f8bbd0;
  padding: 1rem 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header h1 {
  margin: 0;
  color: #880e4f;
  font-size: 2rem;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 16px;
  margin: 0;
  padding: 0;
}

nav {
  margin-left: auto;
  display: flex;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.cart-button {
  background-color: white;
  color: #d879c2;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
  margin-left: 16px;
  transition: background-color 0.3s, transform 0.2s;
}

.cart-button:hover {
  background-color: #f3f3f3;
  transform: scale(1.05);
}
</style>

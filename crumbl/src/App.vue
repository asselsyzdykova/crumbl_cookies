<template>
  <div id="app">
    <AppHeader />
    <main>
      <router-view />
    </main>
    <CartSidebar v-if="cartStore.isCartVisible" />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import CartSidebar from "@/components/CartSidebar.vue";
import { useCartStore } from "@/stores/cartStore";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    CartSidebar,
  },
  data() {
    return {
      cartStore: useCartStore(),
    };
  },
  mounted() {
    this.cartStore.loadCartFromLocalStorage();
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  color: #333;
}

main {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 20vh;
}

footer {
  margin-top: auto;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>


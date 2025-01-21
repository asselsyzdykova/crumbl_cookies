import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state() {
    return {
      items: [],
      isCartVisible: false,
    };
  },
  getters: {
    totalQuantity(state) {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },
    totalPrice(state) {
      return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  actions: {

    loadCartFromLocalStorage() {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        this.items = JSON.parse(savedCart);
      }
    },
    saveCartToLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.items));
    },
    addToCart(cookie) {
      const existingItem = this.items.find((item) => item.id === cookie.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...cookie, quantity: 1 });
      }
      this.saveCartToLocalStorage();
    },
    removeOneFromCart(id) {
      const item = this.items.find((item) => item.id === id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          this.items = this.items.filter((item) => item.id !== id);
        }
        this.saveCartToLocalStorage();
      }
    },
  },
});

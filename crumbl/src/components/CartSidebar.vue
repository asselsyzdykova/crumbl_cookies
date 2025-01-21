<template>
  <div class="cart-sidebar">
    <h2>Cart</h2>
    <div v-if="items.length === 0">Your cart is empty</div>
    <div v-else>
      <ul>
        <li v-for="item in items" :key="item.id">
          <div class="cart-item">
            <img :src="item.image" :alt="item.name" class="cart-item-image" />
            <div>
              <p>{{ item.name }}</p>
              <p>Price: ${{ item.price }}</p>
              <p>Quantity: {{ item.quantity }}</p>
              <div class="cart-actions">
                <button @click="removeOne(item.id)">-</button>
                <button @click="addOne(item)">+</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="total-price">
        <p>Total amount: ${{ parseFloat(totalPrice).toFixed(2) }}</p>
      </div>
    </div>
    <button class="close-btn" @click="cartStore.isCartVisible = false">
      Close
    </button>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/cartStore";

export default {
  name: "CartSidebar",
  data() {
    return {
      cartStore: useCartStore(),
    };
  },
  computed: {
    items() {
      return this.cartStore.items;
    },
    totalPrice() {
      return this.cartStore.totalPrice;
    },
  },
  methods: {
    removeOne(id) {
      this.cartStore.removeOneFromCart(id);
    },
    addOne(item) {
      this.cartStore.addToCart(item);
    },
  },
};
</script>

<style scoped>
.cart-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  height: 100%;
  background: linear-gradient(135deg, #fdfbfb, #ebedee);
  border-left: 2px solid #e0e0e0;
  box-shadow: -3px 0 15px rgba(0, 0, 0, 0.2);
  padding: 20px;
  overflow-y: auto;
  z-index: 2000;
  transition: transform 0.3s ease-in-out;
  font-family: 'Arial', sans-serif;
}

h2 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 2px solid #ff6f61;
  padding-bottom: 10px;
}

.cart-item {
  display: flex;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.cart-item:hover {
  transform: scale(1.02);
}

.cart-item-image {
  width: 60px;
  height: 60px;
  margin-right: 15px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.cart-item p {
  margin: 5px 0;
  font-size: 0.9rem;
  color: #555;
}

.cart-actions {
  margin-top: 10px;
}

.cart-actions button {
  background-color: #ff6f61;
  color: white;
  border: none;
  padding: 6px 12px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 6px;
  font-size: 0.8rem;
  transition: background-color 0.3s ease-in-out;
}

.cart-actions button:hover {
  background-color: #e6554f;
}

.total-price {
  font-weight: bold;
  font-size: 1.2rem;
  color: #333;
  text-align: center;
  margin-top: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.close-btn {
  background-color: #d9534f;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 6px;
  font-size: 1rem;
  width: 100%;
  transition: background-color 0.3s ease-in-out;
}

.close-btn:hover {
  background-color: #c9302c;
}

ul {
  list-style: none;
  padding: 0;
}

@media (max-width: 768px) {
  .cart-sidebar {
    width: 100%;
  }

  h2 {
    font-size: 1.5rem;
  }

  .cart-item {
    flex-direction: column;
    align-items: center;
  }

  .cart-item-image {
    margin: 0 0 10px 0;
  }

  .total-price {
    font-size: 1rem;
  }

  .close-btn {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
}
</style>

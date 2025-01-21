<template>
  <div class="cookie-card">
    <img :src="image" :alt="name" class="cookie-image" />
    <div class="cookie-info">
      <h3 class="cookie-name">{{ name }}</h3>
      <p class="cookie-description">{{ description }}</p>
      <div class="cookie-footer">
        <p class="price">${{ price }}</p>
        <button @click="handleAddToCart" class="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CookieCard",
  props: {
    name: String,
    description: String,
    image: String,
    price: Number,
    id: Number,
  },
  methods: {
    handleAddToCart() {
      this.$emit("add-to-cart", {
        id: this.id,
        name: this.name,
        description: this.description,
        image: this.image,
        price: this.price,
      });
    },
  },
};
</script>

<style scoped>
.cookie-card {
  text-align: center;
  border: 2px solid #f5a623;
  padding: 20px;
  border-radius: 12px;
  width: 240px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}

.cookie-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.cookie-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  transition: opacity 0.3s ease;
}

.cookie-card:hover .cookie-image {
  opacity: 0.8;
}

.cookie-info {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.cookie-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
}

.cookie-description {
  font-size: 0.95rem;
  color: #777;
  margin-bottom: 12px;
}

.cookie-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.price {
  font-size: 1rem;
  font-weight: bold;
  color: #f5a623;
}

.add-to-cart-btn {
  background-color: #ff47c2;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-to-cart-btn:hover {
  background-color: #d1407b;
}

@media (max-width: 600px) {
  .cookie-card {
    width: 100%;
    padding: 15px;
  }

  .cookie-name {
    font-size: 1rem;
  }

  .price {
    font-size: 0.9rem;
  }

  .add-to-cart-btn {
    padding: 8px 16px;
  }
}
</style>

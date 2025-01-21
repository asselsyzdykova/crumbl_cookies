<template>
  <div class="feedback-view">
    <h1>Your Reviews for Crumbl Cookies</h1>
    <p>We want to know what you think of our cookies! Share your impressions!</p>

    <div class="review-form">
      <h2>Leave a review</h2>
      <form @submit.prevent="submitReview">
        <div class="form-group">
          <label for="name">Your name:</label>
          <input type="text" id="name" v-model="review.name" required />
        </div>
        <div class="form-group">
          <label for="rating">Score (1-5):</label>
          <input type="number" id="rating" v-model="review.rating" min="1" max="5" required />
        </div>
        <div class="form-group">
          <label for="comment">Your comment:</label>
          <textarea id="comment" v-model="review.comment" required></textarea>
        </div>
        <button type="submit">Send Feedback</button>
      </form>
    </div>

    <div class="reviews">
      <h2>Feedback from our customers</h2>
      <div v-if="reviews.length > 0" class="review-list">
        <div v-for="(review, index) in reviews" :key="index" class="review-item">
          <h3>{{ review.name }}</h3>
          <p><strong>Score:</strong> {{ review.rating }} / 5</p>
          <p>{{ review.comment }}</p>
        </div>
      </div>
      <p v-else>No reviews yet. Be the first!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedbackView",
  data() {
    return {
      review: {
        name: '',
        rating: 1,
        comment: ''
      },
      reviews: this.loadReviews()
    };
  },
  methods: {
    submitReview() {
      if (this.review.name && this.review.rating && this.review.comment) {
        this.reviews.push({ ...this.review });
        this.saveReviews();
        this.review.name = '';
        this.review.rating = 1;
        this.review.comment = '';
      }
    },
    saveReviews() {
      localStorage.setItem('reviews', JSON.stringify(this.reviews));
    },
    loadReviews() {
      const savedReviews = localStorage.getItem('reviews');
      return savedReviews ? JSON.parse(savedReviews) : [];
    }
  }
};
</script>

<style scoped>
.feedback-view {
  padding: 40px 20px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: #4f4f4f;
  min-height: 100vh;
  padding-top: 120px;
}

h1 {
  font-size: 3rem;
  color: #ff6f61;
  margin-bottom: 30px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  line-height: 1.6;
}

.review-form {
  background-color: #fff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeIn 1s ease-in-out;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-size: 1rem;
  color: #555;
  font-weight: 600;
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="number"],
textarea {
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  border: 2px solid #ccc;
  background-color: #f3f3f3;
  font-size: 1rem;
  transition: border-color 0.3s ease-in-out;
}

input[type="text"]:focus,
input[type="number"]:focus,
textarea:focus {
  border-color: #ff6f61;
  outline: none;
}

textarea {
  resize: vertical;
  height: 150px;
}

button {
  background-color: #ff6f61;
  color: white;
  font-size: 1.1rem;
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

button:hover {
  background-color: #e55a47;
  transform: scale(1.05);
}

.reviews {
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 50px;
}

.review-list {
  text-align: left;
}

.review-item {
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.review-item:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.review-item h3 {
  color: #333;
  font-size: 1.4rem;
  font-weight: 600;
}

.review-item p {
  color: #666;
  font-size: 1.1rem;
}

.review-item strong {
  color: #ff6f61;
}

.review-item span {
  display: block;
  color: #999;
  margin-top: 10px;
  font-style: italic;
}

@media (max-width: 768px) {
  .feedback-view {
    padding: 20px;
  }

  .review-form {
    padding: 20px;
  }

  .review-item {
    padding: 15px;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

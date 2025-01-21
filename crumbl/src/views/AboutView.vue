<template>
  <div class="about">
    <div class="about-content">
      <video class="about-video" autoplay muted loop>
        <source src="/videos/about_us.mp4" type="video/mp4" />
        Your browser does not support video playback.
      </video>
    </div>
    <div class="team">
      <h2>Our team</h2>
      <div class="team-members">
        <div class="team-member" v-for="member in team" :key="member.name">
          <img :src="member.image" :alt="member.name" />
          <h3>{{ member.name }}</h3>
          <p>{{ member.role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import teamData from "@/data/member.json";
export default {
  name: "AboutView",
  data() {
    return {
      team: teamData.team,
    };
  },
};
</script>

<style scoped>
.about {
  padding: 40px 0;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: #333;
}

h1 {
  font-size: 3rem;
  color: #ff6f61;
  margin-bottom: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.about-content {
  margin-top: 20px;
}

.about-video {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0;
  box-shadow: none;
}

.team {
  margin-top: 60px;
}

.team-members {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.team-member {
  text-align: center;
  max-width: 200px;
}

.team-member img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ff6f61;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.team-member img:hover {
  transform: scale(1.1);
}

.team-member h3 {
  font-size: 1.2rem;
  color: #333;
}

.team-member p {
  font-size: 1rem;
  color: #888;
}

@media (max-width: 768px) {
  .about-video {
    width: 100%;
    height: auto;
  }
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .team-members {
    justify-content: space-between;
  }
}
</style>

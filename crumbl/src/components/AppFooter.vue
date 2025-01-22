<template>
  <div class="content">
    <main>
    </main>
    <footer>
      <p>&copy; 2025 Crumbl Cookies. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}

.content {
  display: flex;
  flex-direction: column;
  min-height: 20vh;
}

main {
  flex: 1;
}

footer {
  padding: 1rem;
  background-color: #f8bbd0;
  color: #880e4f;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}
</style>

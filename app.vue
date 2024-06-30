<template>
  <div>
  <div class="container">
    <h1>Resep Makanan</h1>
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
    </section>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #fffaf0;
}
h1 {
  color: #ff6600;
  text-align: center;
  margin-bottom: 20px;
}
nav {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
}
nav a {
  color: #ffffff;
  background-color: #ff6600;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}
nav a:hover {
  background-color: #cc5200;
}
section h2 {
  color: #ff6600;
  margin-top: 20px;
  border-bottom: 2px solid #ff6600;
  padding-bottom: 5px;
}
</style>

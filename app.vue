<template>
  <div class="container">
    <h1>Resep Makanan</h1>
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/profile">Profil</nuxt-link>
      <nuxt-link to="/upload">Unggah Resep</nuxt-link>
    </nav>

    <section>
      <h2>Resep Terbaru</h2>
      <!-- Daftar resep terbaru -->

      <h2>Resep Populer</h2>
      <!-- Daftar resep populer -->
    </section>
  </div>
</template>

<style scoped>
body {
  font-family: 'Helvetica Neue', sans-serif;
  background: linear-gradient(to right, #ffafbd, #ffc3a0);
  margin: 0;
  padding: 0;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #ff6600;
  text-align: center;
  margin-bottom: 20px;
  font-size: 3em;
  text-shadow: 1px 1px 2px #fff;
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
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 30px;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

nav a:hover {
  background-color: #cc5200;
  transform: scale(1.05);
}

section h2 {
  color: #ff6600;
  margin-top: 20px;
  border-bottom: 2px solid #ff6600;
  padding-bottom: 5px;
  font-size: 2em;
}

.section-content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.recipe-card {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.recipe-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.recipe-card img {
  width: 100%;
  border-radius: 10px;
}

.recipe-card h3 {
  margin: 10px 0;
  color: #ff6600;
}

.recipe-card p {
  color: #666;
}
</style>

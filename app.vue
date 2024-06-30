<template>
  <div class="container">
    <h1>Resep Makanan</h1>
    <nav>
      <button id="home-btn">Home</button>
      <button id="search-btn">Pencarian</button>
      <button id="categories-btn">Kategori</button>
      <button id="profile-btn">Profil</button>
      <button id="upload-btn">Unggah Resep</button>
    </nav>
    <section>
      <h2>Resep Terbaru</h2>
      <!-- Daftar resep terbaru -->
      <h2>Resep Populer</h2>
      <!-- Daftar resep populer -->
    </section>
  </div>
</template>

<script>
  export default {
    mounted() {
      document.getElementById('home-btn').addEventListener('click', () => {
        this.$router.push('/');
      });
      document.getElementById('search-btn').addEventListener('click', () => {
        this.$router.push('/search');
      });
      document.getElementById('categories-btn').addEventListener('click', () => {
        this.$router.push('/categories');
      });
      document.getElementById('profile-btn').addEventListener('click', () => {
        this.$router.push('/profile');
      });
      document.getElementById('upload-btn').addEventListener('click', () => {
        this.$router.push('/upload');
      });
    }
  }
</script>

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

nav button {
  color: #ffffff;
  background-color: #ff6600;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

nav button:hover {
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
</style>

<template>
    <div class="container">
      <h1>{{ recipe.title }}</h1>
      <div class="recipe-details">
        <img :src="recipe.imageUrl" :alt="recipe.title" class="recipe-image">
        <div class="recipe-info">
          <p class="recipe-description">{{ recipe.description }}</p>
          <p><strong>Diunggah oleh:</strong> {{ recipe.author }}</p>
          <p><strong>Waktu memasak:</strong> {{ recipe.cookingTime }} menit</p>
          <!-- Tampilkan informasi detail lainnya yang diperlukan -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        recipe: {},
      };
    },
    async asyncData({ $firebase, params }) {
      const db = $firebase.db;
      const recipeId = params.recipeId; // Ambil recipeId dari params URL
  
      try {
        const recipeRef = db.collection('recipes').doc(recipeId);
        const doc = await recipeRef.get();
  
        if (doc.exists) {
          return {
            recipe: doc.data()
          };
        } else {
          console.log('Resep tidak ditemukan.');
          // Tindakan yang sesuai jika resep tidak ditemukan
        }
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
  
      return {
        recipe: {}
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    color: #ff6600;
    text-align: center;
    margin-bottom: 20px;
    font-size: 2.5em;
  }
  
  .recipe-details {
    display: flex;
    gap: 20px;
  }
  
  .recipe-image {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .recipe-info {
    flex: 1;
  }
  
  .recipe-description {
    color: #333;
    line-height: 1.6;
  }
  
  .recipe-info p {
    margin-bottom: 10px;
  }
  </style>
  
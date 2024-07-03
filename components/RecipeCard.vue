<template>
    <div class="recipe-card">
      <img :src="recipe.imageUrl" :alt="recipe.title">
      <h3>{{ recipe.title }}</h3>
      <p>{{ recipe.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      recipe: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
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
  
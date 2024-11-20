<template>
    <div class="dashboard">
      <nav class="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <router-link to="/dashboard/Avaliacao">Avaliar Filme</router-link>
          </li>
          <li>
            <router-link to="/dashboard/filmes">Filmes Avaliados</router-link>
          </li>
        </ul>
      </nav>
  
      <!-- Área de conteúdo dinâmico -->
      <main class="content">
        <router-view></router-view>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: "Dashboard",
  };
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
    min-height: 100vh;
  }
  
  .sidebar {
    width: 250px;
    background-color: #343a40;
    color: white;
    padding: 20px;
  }
  
  .sidebar h2 {
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar ul li {
    margin: 10px 0;
  }
  
  .sidebar ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
  }
  
  .sidebar ul li a:hover {
    text-decoration: underline;
  }
  
  .content {
    flex: 1;
    padding: 20px;
    background-color: #f8f9fa;
  }
  </style>
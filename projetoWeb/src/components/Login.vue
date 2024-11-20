<template>
    <div class="login-page">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Senha:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" class="btn btn-primary">Entrar</button>
      </form>
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: null,
      };
    },
    methods: {
      handleLogin() {
        const validEmail = 'arthur@gmail.com';
        const validPassword = '123456';
  
        if (this.email === validEmail && this.password === validPassword) {
          localStorage.setItem('auth', true);
          this.$router.push('/dashboard');
        } else {
          this.error = 'E-mail ou senha inválidos.';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-page {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .error-message {
    color: red;
    margin-top: 10px;
  }
  </style>
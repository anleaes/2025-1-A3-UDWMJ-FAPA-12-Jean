<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/clientes">Clientes</router-link> |
      <router-link to="/equipamentos">Equipamentos</router-link> |
      <router-link to="/servicos">Serviços</router-link>
    </nav>
    <router-view />
  </div>
</template>


<script>
export default {
  name: 'App'
}
</script>

<style scoped>
nav {
  background-color: #f4f4f4;
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>


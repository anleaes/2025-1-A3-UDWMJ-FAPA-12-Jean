<template>
  <div class="login">
    <h2>Login (Simples)</h2>
    <input v-model="usuario" type="text" placeholder="Usuário" />
    <input v-model="senha" type="password" placeholder="Senha" />
    <button @click="fazerLogin">Entrar</button>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      usuario: '',
      senha: ''
    }
  },
  methods: {
    fazerLogin() {
      if (this.usuario.trim() === '' || this.senha.trim() === '') {
        alert('Por favor, preencha usuário e senha.')
      } else {
        alert(`Bem-vindo, ${this.usuario}!`)
        // Redirecionar para home — ajuste a rota conforme seu projeto
        this.$router.push('/home')
      }
    }
  }
}
</script>

<style scoped>
.login {
  text-align: center;
  margin-top: 50px;
}
input {
  display: block;
  margin: 10px auto;
  padding: 8px;
}
</style>



<template>
  <div>
    <h2>Cadastro de Clientes</h2>

    <input v-model="nome" placeholder="Nome do Cliente" />
    <button @click="salvarCliente">{{ editando ? 'Atualizar' : 'Adicionar' }}</button>

    <ul>
      <li v-for="cliente in clientes" :key="cliente.id">
        {{ cliente.nome }}
        <button @click="prepararEdicao(cliente)">Editar</button>
        <button @click="deletarCliente(cliente.id)">Excluir</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchClientes, createCliente, updateCliente, deleteCliente } from '../services/api'

export default {
  name: 'ClientesPage',
  data() {
    return {
      nome: '',
      clientes: [],
      editando: false,
      clienteEditandoId: null
    }
  },
  methods: {
    async listarClientes() {
      const response = await fetchClientes()
      this.clientes = response.data
    },
    async salvarCliente() {
      if (this.nome.trim()) {
        if (this.editando) {
          await updateCliente(this.clienteEditandoId, { nome: this.nome })
        } else {
          await createCliente({ nome: this.nome })
        }
        this.nome = ''
        this.editando = false
        this.clienteEditandoId = null
        this.listarClientes()
      }
    },
    prepararEdicao(cliente) {
      this.nome = cliente.nome
      this.editando = true
      this.clienteEditandoId = cliente.id
    },
    async deletarCliente(id) {
      await deleteCliente(id)
      this.listarClientes()
    }
  },
  mounted() {
    this.listarClientes()
  }
}
</script>


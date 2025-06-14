<template>
  <div>
    <h2>Cadastro de Serviços</h2>

    <input v-model="nome" placeholder="Nome do Serviço" />
    <button @click="salvarServico">{{ editando ? 'Atualizar' : 'Adicionar' }}</button>

    <ul>
      <li v-for="servico in servicos" :key="servico.id">
        {{ servico.nome }}
        <button @click="prepararEdicao(servico)">Editar</button>
        <button @click="deletarServico(servico.id)">Excluir</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  fetchServicos,
  createServico,
  updateServico,
  deleteServico
} from '../services/api'

export default {
  name: 'ServicosPage',
  data() {
    return {
      nome: '',
      servicos: [],
      editando: false,
      servicoEditandoId: null
    }
  },
  methods: {
    async listarServicos() {
      const response = await fetchServicos()
      this.servicos = response.data
    },
    async salvarServico() {
      if (this.nome.trim()) {
        if (this.editando) {
          await updateServico(this.servicoEditandoId, { nome: this.nome })
        } else {
          await createServico({ nome: this.nome })
        }
        this.nome = ''
        this.editando = false
        this.servicoEditandoId = null
        this.listarServicos()
      }
    },
    prepararEdicao(servico) {
      this.nome = servico.nome
      this.editando = true
      this.servicoEditandoId = servico.id
    },
    async deletarServico(id) {
      await deleteServico(id)
      this.listarServicos()
    }
  },
  mounted() {
    this.listarServicos()
  }
}
</script>


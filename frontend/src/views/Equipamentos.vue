<template>
  <div>
    <h2>Cadastro de Equipamentos</h2>

    <input v-model="nome" placeholder="Nome do Equipamento" />
    <button @click="salvarEquipamento">{{ editando ? 'Atualizar' : 'Adicionar' }}</button>

    <ul>
      <li v-for="equipamento in equipamentos" :key="equipamento.id">
        {{ equipamento.nome }}
        <button @click="prepararEdicao(equipamento)">Editar</button>
        <button @click="deletarEquipamento(equipamento.id)">Excluir</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  fetchEquipamentos,
  createEquipamento,
  updateEquipamento,
  deleteEquipamento
} from '../services/api'

export default {
  name: 'EquipamentosPage',
  data() {
    return {
      nome: '',
      equipamentos: [],
      editando: false,
      equipamentoEditandoId: null
    }
  },
  methods: {
    async listarEquipamentos() {
      const response = await fetchEquipamentos()
      this.equipamentos = response.data
    },
    async salvarEquipamento() {
      if (this.nome.trim()) {
        if (this.editando) {
          await updateEquipamento(this.equipamentoEditandoId, { nome: this.nome })
        } else {
          await createEquipamento({ nome: this.nome })
        }
        this.nome = ''
        this.editando = false
        this.equipamentoEditandoId = null
        this.listarEquipamentos()
      }
    },
    prepararEdicao(equipamento) {
      this.nome = equipamento.nome
      this.editando = true
      this.equipamentoEditandoId = equipamento.id
    },
    async deletarEquipamento(id) {
      await deleteEquipamento(id)
      this.listarEquipamentos()
    }
  },
  mounted() {
    this.listarEquipamentos()
  }
}
</script>


<template>
  <div class="crud-clientes">
    <h2>Clientes</h2>
    <ClienteForm @saved="loadClientes" :editItem="editItem" />
    <ClienteList :items="clientes" @edit="onEdit" @delete="onDelete" />
  </div>
</template>

<script>
import { fetchClientes, deleteCliente } from '../services/api'
import ClienteForm from '../components/ClienteForm.vue'
import ClienteList from '../components/ClienteList.vue'

export default {
  name: 'CrudClientes',
  components: { ClienteForm, ClienteList },
  data() { return { clientes: [], editItem: null } },
  methods: {
    async loadClientes() { this.clientes = (await fetchClientes()).data },
    onEdit(item) { this.editItem = item },
    async onDelete(id) {
      await deleteCliente(id)
      this.loadClientes()
    }
  },
  mounted() { this.loadClientes() }
}
</script>

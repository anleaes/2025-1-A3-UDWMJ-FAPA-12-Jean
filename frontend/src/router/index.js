import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue'
import LoginPage from '../views/Login.vue'
import ClientesPage from '../views/Clientes.vue'
import EquipamentosPage from '../views/Equipamentos.vue'
import ServicosPage from '../views/Servicos.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/clientes', name: 'ClientesPage', component: ClientesPage },
  { path: '/equipamentos', name: 'EquipamentosPage', component: EquipamentosPage },
  { path: '/servicos', name: 'ServicosPage', component: ServicosPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router



import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001'
})

// Clientes
export const fetchClientes  = () => api.get('/clientes')
export const createCliente  = c => api.post('/clientes', c)
export const updateCliente  = (id, c) => api.put(`/clientes/${id}`, c)
export const deleteCliente  = id => api.delete(`/clientes/${id}`)

// Equipamentos
export const fetchEquipamentos  = () => api.get('/equipamentos')
export const createEquipamento  = e => api.post('/equipamentos', e)
export const updateEquipamento  = (id, e) => api.put(`/equipamentos/${id}`, e)
export const deleteEquipamento  = id => api.delete(`/equipamentos/${id}`)

// Serviços
export const fetchServicos  = () => api.get('/servicos')
export const createServico  = s => api.post('/servicos', s)
export const updateServico  = (id, s) => api.put(`/servicos/${id}`, s)
export const deleteServico  = id => api.delete(`/servicos/${id}`)
// Semana 5 - Commit 1: Criação do módulo api.js para comunicação com backend



# Projeto Manutenção - README

## Descrição
Projeto web de gerenciamento de manutenção desenvolvido com Vue.js no frontend e JSON Server para simular uma API REST no backend.  
O sistema permite cadastrar, listar e editar Clientes, Equipamentos e Serviços.  
O Login é simples, apenas uma interface sem autenticação real.

---

## Tecnologias Utilizadas

- Frontend: Vue.js  
- Backend simulado: JSON Server  
- Testes de API: Postman  

---

## Como rodar o projeto em outra máquina

### Pré-requisitos

- Node.js instalado (https://nodejs.org)  
- npm (gerenciador de pacotes do Node)  

### Passos para executar

1. Clone ou copie o projeto para sua máquina local.

2. Abra o terminal na pasta raiz do projeto.

3. Instale as dependências do backend e frontend (separadas):

```bash
npm install
cd frontend
npm install
cd ..
```

4. Inicie o servidor JSON Server e o frontend simultaneamente:

```bash
npm run start
```

- O JSON Server estará rodando na porta 3001 (API REST simulada)  
- O frontend Vue.js estará rodando na porta padrão (ex: 8080)  

---

## Testando as rotas API com Postman

- Base URL da API: `http://localhost:3001`

- Rotas disponíveis:

| Método | Endpoint          | Descrição                   |
|--------|-------------------|-----------------------------|
| GET    | /clientes         | Lista todos os clientes      |
| POST   | /clientes         | Adiciona um novo cliente     |
| PUT    | /clientes/:id     | Atualiza cliente por ID      |
| DELETE | /clientes/:id     | Remove cliente por ID        |
| GET    | /equipamentos     | Lista todos os equipamentos  |
| POST   | /equipamentos     | Adiciona novo equipamento    |
| PUT    | /equipamentos/:id | Atualiza equipamento por ID  |
| DELETE | /equipamentos/:id | Remove equipamento por ID    |
| GET    | /servicos         | Lista todos os serviços      |
| POST   | /servicos         | Adiciona novo serviço        |
| PUT    | /servicos/:id     | Atualiza serviço por ID      |
| DELETE | /servicos/:id     | Remove serviço por ID        |

---

## Login

- A página de login é apenas uma interface sem autenticação real.  
- Você pode digitar qualquer valor e clicar em "Entrar", que simplesmente navega para a página inicial.

---

## Observações

- O JSON Server utiliza o arquivo `db-manutencao.json` para armazenar os dados.  
- Se for necessário limpar ou alterar os dados iniciais, edite o arquivo `db.json` antes de iniciar o servidor.  
- Certifique-se de que nenhuma outra aplicação está usando a porta 3000 para evitar conflito.  

---

## Contato

Dúvidas ou sugestões: [Seu email ou contato aqui]

---

Obrigado por utilizar o projeto!  

Christhopper Marques Ferreira - RA: 1292312696

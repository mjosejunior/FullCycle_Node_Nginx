# FullCycle Docker Challenge

## Descrição

Este projeto utiliza Docker e Docker Compose para configurar e executar um ambiente completo que inclui um serviço Node.js, um banco de dados MySQL e um servidor Nginx atuando como proxy reverso.

## Pré-requisitos
Para executar este projeto, você precisará ter o Docker e o Docker Compose instalados na sua máquina. Isso permite rodar os containers sem necessidade de configurar cada serviço individualmente.
- [Instalar o Docker](https://docs.docker.com/get-docker/)
- [Instalar Docker Compose](https://docs.docker.com/compose/install/)

## Como Executar

- 1. Clonar o Repositório
Clone este repositório na sua máquina local usando:
```bash
git clone https://github.com/mjosejunior/FullCycle_Node_Nginx.git
cd FullCycle_Node_Nginx
```

- 2. Executar com Docker Compose
Dentro do diretório do projeto, execute:
```bash
docker-compose up -d
```
- 3. Acessar a Aplicação
Após os serviços estarem em execução, a aplicação estará disponível no seguinte endereço:

```bash
http://localhost:8080

```
Abra este endereço em um navegador para interagir com a aplicação.

Cada vez que a rota / é acessada, você verá **'Full Cycle Rocks!'** e um nome e um sobrenome aleatórios serão gerados e inseridos no banco de dados na tabela people. Em seguida, todos os nomes já inseridos são recuperados do banco de dados e enviados como resposta HTTP.
"


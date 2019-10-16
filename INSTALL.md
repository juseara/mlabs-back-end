
# Instalação ##

  

Você deve seguir os passos listado abaixa para instalar todas as dependências e iniciar o projeto.

  

#### Prerequisitos:

* [Node js](https://nodejs.org/en/download/).

* [Mongo Db](https://www.mongodb.com/what-is-mongodb)

* [Docker](https://docs.docker.com/)

* [Docker Compose](https://docs.docker.com/compose/install/)
 

## Iniciar localmente 


#### 1. Criar arquvio .env
Copie e sete as variaveis de ambiente para o projeto litada no arquivo `sampledotenv`
#### 2. inicie seu mongoDb
Execute o comando para iniciar o serviço do mongo via terminal.
#### 3. Inicie o servidor
instale todas as dependências `npm run install` e execute o script `npm run start` para subir o servidor.


### Iniciar via docker ###

#### 1. modo dev
Execute o comando `npm run docker-dev` ele subistituira alguns passo usando o arquivo `docker-development`

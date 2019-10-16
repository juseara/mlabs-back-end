
# API para controle de estacionamento ##

### Contexto
Esse projeto é um controle de estacionamento, que permite a entrada, pagamento e saída 
do mesmo, feita em nodeJs seguindo conceitos de arquitetura limpa para micro serviços.

## Funcionalidades

### Entrada
```
POST /parking
body: { Plate: 'AAA-9999'}
```
### Pagamento
```
PUT /parking/:id/pay
```

### Saida
```
PUT /parking/:id/out
```

### Historico por placa
```
GET /parking/:plate
```

## Testes
Os testes unitarios podem ser executados pelo comando `npm run test` e `npm run test:coverage` para analise de cobertura.


## Escolha e tecnologias utilizadas
A api foi escrita em Nodejs com um implementação já conhecida por mim e que costumo aplicar em projetos que tenho regras e domínio bem definido, para armazenamento das informações utilizei mongoDb como banco de dados devido sua facilidade de manipular registro. Um dos aspectos da aplicação é que foi toda pensada em implementação seguindo o conceito de injeção de dependência.

## Divisão do projeto

### Entity
Aqui é onde temos nossas entidades de negócio e objeto de valor.

### Use-Cases
Em casos de uso temos as regras de negócio da aplicação, aqui encapsulamos todos os casos de uso do sistema como entrada, pagamento e saída do estacionamento, alterações nessa camada não devem afetar nossas entidades e alterações nas camadas superiores não devem afetá-la como alteração de banco de dados e controllers.

### Data-Access
Camada de acesso a dados onde implementa todas as funcionalidades para manipulação do banco de dados e persistência dos dados da aplicação.

### Controller
Nessa camada implementamos nossa interfaces com a camada de casos de uso ela é responsável pelo link entre os dados de entrada e saída da aplicação.


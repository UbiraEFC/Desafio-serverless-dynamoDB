# Desafio construindo com serverless - Trilha Node.js

## Descrição
- Projeto de cadastro de tarefas 

## Tecnologias 
- Serverless
- DynamoDB
- Typescript
- Node

## Executar Aplicação (Localmente)
```

yarn install

serverless dynamodb start

```
```

serverless offline

```

## Sobre o desafio
Nesse desafio você irá recriar uma parte da API de *todos* que foi desenvolvida no desafio Conceitos do Node.js mas dessa vez deverá ser usado o framework [Serverless](https://www.serverless.com/).

Cada funcionalidade deverá ser criada em um arquivo de função separada de acordo com o que foi visto nesse último módulo.
### As rotas que deverão existir são:
- #### POST - /todos/{user_id}
		Essa rota deve receber o id de um usuário pelo pathParameters (você pode criar esse id manualmente apenas para preencher o campo) e os seguintes campos no corpo da requisição: title e deadline, onde deadline é a data limite para o todo.

		O todo deverá ser salvo com os seguintes campos no DynamoDB:

	```
		{ 
			id: 'uuid', // id gerado para garantir um único todo com o mesmo id
			user_id: 'uuid' // id do usuário recebido no pathParameters
			title: 'Nome da tarefa',
			done: false, // inicie sempre como false
			deadline: new Date(deadline)
		}
	```

- #### GET - /todos/{user_id}
		Essa rota deve receber o id de um usuário pelo pathParameters (o mesmo id que foi usado para criar algum todo).

		A rota deve retornar os todos que possuírem o user_id igual ao id recebido pelos parâmetros.
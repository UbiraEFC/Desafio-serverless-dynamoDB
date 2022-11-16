import { APIGatewayProxyHandler } from "aws-lambda";
import { v4 as uuid } from "uuid";
import { document } from "../utils/dynamodbClient";

interface ICreateToDoBody {
	title: string;
	deadline: string;
}

export const handler: APIGatewayProxyHandler = async (event) => {
	const { user_id } = event.pathParameters;
	const { title, deadline } = JSON.parse(event.body) as ICreateToDoBody;

	const idCreated = uuid();

	await document.put({
		TableName: "todos",
		Item: {
			id: idCreated,
			user_id,
			title,
			done: false,
			deadline: new Date(deadline).toUTCString(),
		}
	}).promise();

	return {
		statusCode: 201,
		body: JSON.stringify({
			message: `ToDo successfully created id: ${idCreated}`
		}),
	};
};
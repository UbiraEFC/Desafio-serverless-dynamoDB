import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "../utils/dynamodbClient";

export const handler: APIGatewayProxyHandler = async (event) => {
	const { user_id } = event.pathParameters;

	const response = await document
	.scan({
		TableName: "todos",
		FilterExpression: "user_id = :user_id",
		ExpressionAttributeValues: {
			":user_id": user_id,
		},
	}).promise();

	if(response.Items.length > 0) {
		return {
			statusCode: 200,
			body: JSON.stringify(response.Items),
		};
	}

	return {
		statusCode: 200,
		body: JSON.stringify({
			message: "No ToDo found for this user_id!"
		})
	}
};
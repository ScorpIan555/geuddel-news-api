import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  console.log('delete.delete.event:::', event);
  console.log('delete.delete.event.pathParameters:::', event.pathParameters);
  console.log('delete.delete.context:::', context);
  const params = {
    TableName: process.env.userTableName,
    // 'Key' defines the partition key and sort key of the item to be removed
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'noteId': path parameter
    Key: {
      // userId: event.requestContext.identity.cognitoIdentityId,
      userId: event.pathParameters.userId
    }
  };

  try {
    const result = await dynamoDbLib.call("delete", params);
    console.log('delete.delete.result:::', result);
    return success({ status: true });
  } catch (e) {
    return failure({ status: false });
  }
}

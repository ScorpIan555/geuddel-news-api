import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  console.log('event:::', event);
  console.log('event:::', event.body);
  console.log('event:::', context);
  console.log('process.env.TableName', process.env.userTableName);

  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.userTableName,
    // TableName: "dev-gNewsUser",
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: uuid.v1(),
      email: data.email,
      language: data.language,
      country: data.country,
      category: data.category,
      content: data.content,
      attachment: data.attachment,
      createdAt: Date()
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    console.log('error!!!::: ', e);
    return failure({ status: false });
  }
}

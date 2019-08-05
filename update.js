import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {

  console.log('event:::', event);
  console.log('event.requestContext:::', event.requestContext);
  console.log('event.body:::', event.body);
  console.log('context:::', context);
  console.log('process.env.TableName', process.env.userTableName);


  const data = JSON.parse(event.body);
  const params = {
    // TableName: process.env.userTableName,
    TableName: "dev-gNewsUser",
    // 'Key' defines the partition key and sort key of the item to be updated
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'noteId': path parameter
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      country: data.country
    },
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: data.noteId,
      email: data.email,
      language: data.language,
      country: data.country,
      category: data.category,
      content: data.content,
      attachment: data.attachment,
      updatedAt: Date()
    },
    // 'UpdateExpression' defines the attributes to be updated
    // 'ExpressionAttributeValues' defines the value in the update expression
    UpdateExpression: "SET content = :content, attachment = :attachment",
    ExpressionAttributeValues: {
      ":attachment": data.attachment || null,
      ":content": data.content || null
    },
    // 'ReturnValues' specifies if and how to return the item's attributes,
    // where ALL_NEW returns all attributes of the item after the update; you
    // can inspect 'result' below to see how it works with different settings
    ReturnValues: "ALL_NEW"
  };

  

  try {
    const result = await dynamoDbLib.call("update", params);
    console.log('result:::', result);
    console.log('params.Item:::', params.Item);
    return success(params.Item);
  } catch (e) {
    return failure({ status: false });
  }
}

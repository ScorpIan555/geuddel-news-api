import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {

  console.log('get.get.event:::', event);
  console.log('get.get.event.requestContext:::', event.requestContext);
  console.log('get.get.event.body:::', event.body);
  console.log('get.get.context:::', context);
  console.log('get.get.process.env.TableName', process.env.userTableName);
  const params = {
    TableName: process.env.userTableName,
    // 'Key' defines the partition key and sort key of the item to be retrieved
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'noteId': path parameter
    Key: {
      // userId: event.requestContext.identity.cognitoIdentityId,
      userId: data.email,
      country: data.country
    }
  };

  try {
    const result = await dynamoDbLib.call("get", params);
    if (result.Item) {
      console.log('get.get.result:::', result);
      console.log('get.get.result:::', result.Item);
      // Return the retrieved item
      return success(result.Item);
    } else {
      return failure({ status: false, error: "Item not found." });
    }
  } catch (e) {
    return failure({ status: false });
  }
}

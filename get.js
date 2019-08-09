import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {

  console.log('get.get.event:::', event);
  console.log('get.get.event.requestContext:::', event.requestContext);
  console.log('get.get.event.queryStringParameters:::', event.queryStringParameters);
  console.log('get.get.context:::', context);
  console.log('get.get.process.env.TableName', process.env.userTableName);
  // destructure and assign query params received from client
  // let { userId, country, email, language, category } = event.queryPathParameters;

  const params = {
    TableName: process.env.userTableName,
    // 'Key' defines the partition key and sort key of the item to be retrieved
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'noteId': path parameter
    Key: {
      // userId: event.requestContext.identity.cognitoIdentityId,
      userId: event.queryStringParameters.userId,
      country: event.queryStringParameters.country
    }
  };

  try {
    const result = await dynamoDbLib.call("get", params);
    console.log('get.get.result:::', result);
      // console.log('get.get.result:::', result.Item);
    if (result.Item) {
      console.log('get.get.result:::', result);
      console.log('get.get.result:::', result.Item);
      // Return the retrieved item
      return success(result.Item);

    } else {
      console.log('ERROR.et.get.result:::', 'Item not found');
      return failure({ status: false, error: "Item not found." });
    }
  } catch (e) {
    console.log('ERROR.et.get.result:::', e);
    return failure({ status: false });
  }
}




// if (result.Item) {
//   console.log('get.get.result:::', result);
//   console.log('get.get.result:::', result.Item);
//   // Return the retrieved item
//   return success(result.Item);

// } else {
//   console.log('ERROR.et.get.result:::', 'Item not found');
//   return failure({ status: false, error: "Item not found." });
// }
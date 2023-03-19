import { APIGatewayProxyResult } from "aws-lambda";

export class ResponseHelper {
  /**
   * OK - Everything worked as expected.
   * @param body - The request body returned to the API user
   */
  static okResponse(body: any): APIGatewayProxyResult {
    return {
      statusCode: 200,
      body: JSON.stringify(body, null, 2),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  }

  /**
   * Bad Request - The request was unacceptable, often due to missing a required parameter.
   * @param body - The request body returned to the API user
   */
  static badRequestResponse(body: any): APIGatewayProxyResult {
    return {
      statusCode: 400,
      body: JSON.stringify(body, null, 2),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  }

  /**
   * Unauthorized - No valid API key provided.
   * @param body - The request body returned to the API user
   */
  static unauthorizedResponse(body: any): APIGatewayProxyResult {
    return {
      statusCode: 401,
      body: JSON.stringify(body, null, 2),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  }

  /**
   * Request Failed - The parameters were valid but the request failed.
   * @param body - The request body returned to the API user
   */
  static requestFailedResponse(body: any): APIGatewayProxyResult {
    return {
      statusCode: 402,
      body: JSON.stringify(body, null, 2),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  }

  /**
   * Forbidden - The API key doesn't have permissions to perform the request.
   * @param body - The request body returned to the API user
   */
  static forbiddenResponse(body: any): APIGatewayProxyResult {
    return {
      statusCode: 403,
      body: JSON.stringify(body, null, 2),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  }

  /**
   * Not Found - The requested resource doesn't exist.
   * @param body - The request body returned to the API user
   */
  static notFoundResponse(body: any): APIGatewayProxyResult {
    return {
      statusCode: 404,
      body: JSON.stringify(body, null, 2),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  }

  /**
   * Conflict - The request conflicts with another request
   * (perhaps due to using the same idempotent key).
   * @param body - The request body returned to the API user
   */
  static conflictResponse(body: any): APIGatewayProxyResult {
    return {
      statusCode: 409,
      body: JSON.stringify(body, null, 2),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  }

  /**
   * Too Many Requests - Too many requests hit the API too quickly.
   * We recommend an exponential backoff of your requests.
   * @param body - The request body returned to the API user
   */
  static tooManyRequestsResponse(body: any): APIGatewayProxyResult {
    return {
      statusCode: 409,
      body: JSON.stringify(body, null, 2),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  }

  /**
   * Server Error - Something went wrong on our end.
   * @param body - The request body returned to the API user
   */
  static serverErrorResponse(body: any): APIGatewayProxyResult {
    return {
      statusCode: 500,
      body: JSON.stringify(body, null, 2),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  }
}

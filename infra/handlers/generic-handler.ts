import { Handler, APIGatewayProxyEventV2 } from "aws-lambda";
import { ResponseHelper } from "../helpers/response-helper";

type ProxyHandler = Handler<APIGatewayProxyEventV2, any>;

//Will eventually need to pass an OrgId into the service call to limit the query results
export const getAll: ProxyHandler = async () => {
  try {
    return ResponseHelper.okResponse("success");
  } catch (error) {
    return ResponseHelper.serverErrorResponse(error.message);
  }
};

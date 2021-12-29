export type EnvironmentVariables = {
  apiUri: string;
  s3EndPoint: string;
  apiGateWay: string;
};

export const getEnvironmentVariables = (): EnvironmentVariables => {
  const checkedApiURI =
    ((window as any).API_URI as string) === "%SUBAPIURI%"
      ? "http://localhost:8080"
      : ((window as any).API_URI as string);

  const EnvironmentVars: EnvironmentVariables = {
    apiUri: checkedApiURI,
    s3EndPoint:
      "https://7wf9w9e0q4.execute-api.us-east-2.amazonaws.com/default/getPresignedURL",
    apiGateWay:
      "https://7wf9w9e0q4.execute-api.us-east-2.amazonaws.com/default/",
  };
  return EnvironmentVars;
};

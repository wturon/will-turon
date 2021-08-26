export type EnvironmentVariables = {
  apiUri: string;
};

export const getEnvironmentVariables = (): EnvironmentVariables => {
  const checkedApiURI =
    ((window as any).API_URI as string) === "%SUBAPIURI%"
      ? "http://localhost:8080"
      : ((window as any).API_URI as string);

  const EnvironmentVars: EnvironmentVariables = {
    apiUri: checkedApiURI,
  };
  return EnvironmentVars;
};

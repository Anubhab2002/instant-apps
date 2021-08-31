/**
 * The input received by the queryToData function of the apps.
 * @param query Search query of the user.
 * @param envVars Any secrets needed by the app. (Not implemented yet)
 */
export type queryToDataInput = {
  query: string;
  envVars?: Record<string, string>;
};

export type queryToDataOutput = undefined | boolean | Array<any> | any;

/**
 * @param data Successful response of how queryToData is implemented by the app.
 */
export type InstantAppProps = { data: queryToDataOutput };

/**
 * Interface for a snippet app.
 * @param apiVersion (Optional) Default is `instant-apps@v1`
 * @param queryToData Function which acts as an entry point of the app, and is used to
 * convert a search query into data that could be rendered for the user.
 * @param Component UI logic of the Instant app.
 */
export type InstantApp = {
  id?: string;
  apiVersion?: string;
  name: string;
  description: string;
  iconUrl?: string;
  queryToData: (input: queryToDataInput) => Promise<queryToDataOutput>;
  Component: (props: InstantAppProps) => JSX.Element;
};

import {BaseConnection, Transport} from '@elastic/elasticsearch';

export type Connector = {
  Connection: typeof BaseConnection;
  Transport: typeof Transport;
};

export const ConnectorFactory: (awsConfig: {
  region: string;
  credentials: {
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken?: string;
  }
}) => Connector;

export default ConnectorFactory;

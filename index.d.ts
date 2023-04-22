import {Connection, Transport} from '@elastic/elasticsearch';

export type Connector = {
  Connection: typeof Connection;
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

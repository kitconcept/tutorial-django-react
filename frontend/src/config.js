/**
 * Config.
 * @module config
 */
import { defaults } from 'lodash';

export default defaults(
  {},
  {
    host: process.env.HOST,
    port: process.env.PORT,
    apiPath: process.env.API_APTH
  },
  {
    host: 'localhost',
    port: '3000',
    apiPath: 'http://localhost:8000'
  }
);

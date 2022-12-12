/* eslint-disable prettier/prettier */
import { PoolConfig } from 'pg';

//* <- BD de Produccion ->
export const dbConfig: PoolConfig = {
  host: 'containers-us-west-116.railway.app',
  port: 5446,
  database: 'railway',
  user: 'postgres',
  password: 'IWRnR4FnaiHChsp34mlk',
};

export const port = 5446;

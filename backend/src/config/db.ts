import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm';
import { pgDatabase, pgHost, pgPassword, pgPort, pgUsername } from '../constants';

const postgresConfig = new Pool({
    user: pgUsername,
    host: pgHost,
    database: pgDatabase,
    password: pgPassword,
    port: pgPort
});

export const db = drizzle(postgresConfig);

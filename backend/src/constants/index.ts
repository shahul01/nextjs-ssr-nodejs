

export const urlFrontend = process.env.URL_FRONTEND || 'http://localhost:3010';

export const pgUsername = process.env.POSTGRES_USERNAME || 'postgres';
export const pgHost = process.env.POSTGRES_HOST || 'localhost';
export const pgDatabase = process.env.POSTGRES_DATABASE || 'nextjs_ssr_nodejs_db';
export const pgPassword = process.env.POSTGRES_PASSWORD || 'postgres';
export const pgPort:number = Number(process.env.POSTGRES_PORT) || 5432;

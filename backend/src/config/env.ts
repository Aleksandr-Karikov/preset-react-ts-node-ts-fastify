export const POSTGRES_USER = process.env.PG_USER;
export const POSTGRES_HOST = process.env.PG_HOST;
export const POSTGRES_DB = process.env.PG_DATABASE;
export const POSTGRES_PORT = process.env.PG_PORT;
export const POSTGRES_PASSWORD = process.env.PG_PASSWORD;
export const APP_PORT = Number(process.env.PORT) || 3000;
export const APP_HOST = process.env.HOST || "localhost";
export const DATABASE_DIALECT = "postgres";
export const DB_DOCKER_CONTAINER_NAME =
  process.env.DB_DOCKER_CONTAINER_NAME || "db";
export const SECRET_KEY = process.env.SECRET_KEY || "secret_key";

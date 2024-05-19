import {
    POSTGRES_DB,
    POSTGRES_USER,
    DATABASE_DIALECT,
    POSTGRES_PASSWORD,
    DB_DOCKER_CONTAINER_NAME,
} from './env';
import { Sequelize } from 'sequelize';

if (
    !POSTGRES_DB ||
    !POSTGRES_USER ||
    !POSTGRES_PASSWORD ||
    !DATABASE_DIALECT ||
    !DB_DOCKER_CONTAINER_NAME
) {
    throw new Error('Fill all setting of database');
}

export const sequelize = new Sequelize(
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    {
        host: DB_DOCKER_CONTAINER_NAME,
        dialect: DATABASE_DIALECT,
    }
);

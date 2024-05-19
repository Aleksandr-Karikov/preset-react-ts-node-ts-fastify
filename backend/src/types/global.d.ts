import { Sequelize } from 'sequelize';

// Расширяем интерфейс FastifyInstance для поддержки свойства db.
declare module 'fastify' {
  export interface FastifyInstance {
    db: Sequelize;
  }
}

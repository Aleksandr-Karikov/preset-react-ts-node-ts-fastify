import fastify from 'fastify';
import { APP_HOST, APP_PORT } from 'src/config/env';
import { sequelize } from 'src/config/db';
const app = fastify({ logger: true });

app.decorate('db', sequelize);

sequelize
  .sync({ force: true }) // Внимание: { force: true } удалит все существующие таблицы
  .then(() => {
    console.log('Tables have been created');
  })
  .catch((err) => {
    console.error('Unable to create tables:', err);
  });

app.get('/ping', async () => {
  return 'pong1';
});

const start = async () => {
  try {
    app.listen({ port: Number(APP_PORT), host: APP_HOST }, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server listening at ${address}`);
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

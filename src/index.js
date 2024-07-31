import { setupServer } from './server.js';
import { initMongoConnection } from './scripts/db/initMongoConnection.js';

const bootstrap = async () => {
  await initMongoConnection();
    setupServer();
};

bootstrap();


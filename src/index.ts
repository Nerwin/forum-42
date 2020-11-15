import 'reflect-metadata';
import express from 'express';

import config from './config/app.config';

(async () => {
  try {
    const app = express();

    app.listen({ port: config.port }, () =>
      console.log(`🚀 Server ready at http://localhost:${config.port}`)
    );
  } catch (err) {
    console.error(err);
    process.exit(-1);
  }
})();

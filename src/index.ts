import 'reflect-metadata';
import express from 'express';

import { createApolloServer } from './api/graphql/apollo';
import config from './config/app.config';

(async () => {
  try {
    const app = express();

    const server = createApolloServer(app);

    app.listen({ port: config.port }, () =>
      console.log(
        `🚀 Server ready at http://localhost:${config.port}${server.graphqlPath}`
      )
    );
  } catch (err) {
    console.error(err);
    process.exit(-1);
  }
})();

import { ApolloServer } from 'apollo-server-express';

import apolloConfig from '../../config/apollo.config';
import { AuthenticatedUser } from '../../interfaces';
import config from '../../config/app.config';
import scalars from './scalars/date.scalar';
import resolvers from './resolvers';
import typeDefs from './types';

const context = ({ req, res }: any) => {
  return {
    loaders: null, // No need for a dataLoader in this project
    req,
    res,
    user: { id: 'd7eceac031', name: 'Nerwin' } as AuthenticatedUser, // We assume user is authenticated and have an Id
  };
};

export function createApolloServer(app: any) {
  const apollo = new ApolloServer({
    resolvers: [...resolvers, scalars],
    typeDefs,
    ...apolloConfig[config.environment].apollo,
    context,
  });

  apollo.applyMiddleware({
    app,
    path: config.apiEndpoint,
  });

  console.info('Apollo server created');

  return apollo;
}

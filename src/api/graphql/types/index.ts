import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';

const typesArray = loadFilesSync(__dirname, {
  extensions: ['ts'],
  ignoreIndex: true,
});

export default mergeTypeDefs(typesArray);

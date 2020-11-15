const config: { [key: string]: any } = {
  development: {
    apollo: {
      playground: {
        endpoint: '/graphql',
        settings: {
          'request.credentials': 'same-origin',
          'schema.polling.enable': false,
          'editor.theme': 'dark',
        },
      },
      introspection: true,
    },
  },
  production: {
    apollo: {
      playground: false,
      introspection: false,
    },
  },
  test: {
    apollo: {
      playground: false,
      introspection: false,
    },
  },
};

export default config;

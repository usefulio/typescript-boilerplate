module.exports = {
  client: {
    includes: [__dirname + "/src/**"],
    service: {
      name: "usefulio",
      localSchemaFile: "../server/schema.gql",
    },
  },
};

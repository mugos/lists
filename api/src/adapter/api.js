// All migth http interface
import Hapi from 'hapi'

// Graph tools
import { makeExecutableSchema } from 'graphql-tools'

// Graphql and Graphi Server
import { graphqlHapi, graphiqlHapi } from 'graphql-server-hapi'

// Grapql default
import defaultSchema from './default/schema'
import defaultResolvers from './default/resolvers'
import defaultSample from './default/sample'

const defaultExecutableSchema = makeExecutableSchema({
  typeDefs: [defaultSchema],
  resolvers: defaultResolvers({ }),
})

const server = new Hapi.Server()

server.connection({
  port: 8000,
  host: "0.0.0.0"
})

server.register({
  register: graphqlHapi,
  options: {
    path: '/',
    graphqlOptions: () => ({
      pretty: true,
      schema: defaultExecutableSchema,
    }),
  },
})

server.register({
  register: graphiqlHapi,
  options: {
    path: '/graphiql',
    graphiqlOptions: {
      query: defaultSample(),
      endpointURL: '/',
    },
  },
})

server.start(err => {
  if (err) { throw err }
  console.log(`Server running at: ${server.info.uri}`)
})

export default server

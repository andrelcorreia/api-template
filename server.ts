const fastify = require("fastify")({ logger: true });

// Declare a route
// fastify.get('/', function handler (request, reply) {
//   reply.send({ hello: 'world' })
// })

console.log("Hello, world!");

// Run the server!
fastify.listen({ port: 3000 });

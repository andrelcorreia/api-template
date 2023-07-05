import SessionRouter from "./src/routes/session.routes";
import "reflect-metadata";
import router from "./src/routes";
const fastify = require("fastify")({ logger: true });

console.log("Hello, world!");

const teste = {
  router,
};

fastify.listen({ port: 3333 }, console.log("Server listing on port 3333"));

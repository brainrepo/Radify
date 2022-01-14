/* eslint strict:"off" */
"use strict";

const fastify = require("fastify");
const fastifyInertia = require("../framework/fastify-inertia");

function build(opts) {
  const app = fastify(opts);

  app.register(fastifyInertia, { version: 1 });

  app.get("/", async (request, reply) => {
    return { hello: "world" };
  });

  return app;
}

module.exports = {
  build
};

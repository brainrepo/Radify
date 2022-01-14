const fp = require("fastify-plugin");

function plugin(fastify, opts, next) {
  fastify.addHook("preValidation", function (req, reply, done) {
    if (
      req.method === "GET" &&
      req.headers["x-inertia"] &&
      req.headers["x-inertia-version"] !== opts.version
    ) {
      reply.code(409).send();
    }
    done();
  });

  next();
}

module.exports = fp(plugin, {
  fastify: "3.x",
  decorators: {},
  dependencies: []
});

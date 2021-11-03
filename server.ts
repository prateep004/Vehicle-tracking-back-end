
const fastify = require('fastify')({ logger: true });
const PORT = process.env.PORT || 8080;

// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
  
  // Run the server!
  const start = async () => {
    try {
      await fastify.listen(PORT, '0.0.0.0')
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  
  start();
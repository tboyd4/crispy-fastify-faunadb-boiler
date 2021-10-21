const app = require('fastify')({ logger: true });

// HOOKS

// ROUTES

// START SERVER
const startServer = async () => {
	try {
		await app.listen(3000);
		app.log.info(`Listening on ${app.server.address().port}`);
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};

startServer();

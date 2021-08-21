import 'reflect-metadata'; 
import express from "express";
import config from './config';
import Logger from './loaders/logger'; 

process.on("uncaughtException", (ex) => {
	Logger.error(ex.message, ex);
});

process.on("unhandledRejection", (ex) => {
	throw ex;
});

async function startServer() { 
	const app = express();
	await require('./loaders').default({ expressApp: app });

	app.listen(config.port, () => {
		Logger.info(`${process.env.NODE_ENV || "dev"} server up listening on PORT ${config.port}`);
	}).on('error', err => {
		Logger.error(err);
		process.exit(1);
	});
}

startServer();
 

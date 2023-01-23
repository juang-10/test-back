require('dotenv').config();
import { Sequelize } from 'sequelize-typescript';
import { Server } from './framework_and_drivers/web/server';
import ClientPsql from './framework_and_drivers/storage/postgres/client/client';

let database: Sequelize;

export { database };
export default async function main() {
try {
    database = await ClientPsql.connect();
    const server = new Server();
    await server.start();
} catch (error) {
    console.error(error);
}
}

main();

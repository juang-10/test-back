import { Sequelize } from 'sequelize-typescript';

class ClientPsql {

public async connect() {
    const con = new Sequelize(
        process.env.PSQL_STORE_DB || "",
        process.env.PSQL_USER || "",
        process.env.PSQL_PASSWORD || "",
        {
            host: process.env.PSQL_HOST || "",
            port : parseInt(process.env.PSQL_PORT || "0"), 
            dialect: "postgres",
            pool: {
                max: parseInt(process.env.PSQL_POOL_MAX || "5"),
                min: parseInt(process.env.PSQL_POOL_MIN || "1"),
                idle: parseInt(process.env.PSQL_POOL_IDLE || "10000"),
            },
            // SHOW DATABASE OPERATION IN CONSOLE
            logging: (msg: any) => { console.log(msg) }
        },
    );
    /* verify postgresql connection */
    con.authenticate()
    .then(() => {
        console.log(
        `🆗 Coneclog a base de datos ${process.env.PSQL_STORE_DB} modo ${process.env.NODE_ENV}`
        );
    })
    .catch(err => {
        console.log(
        `🚫 No se conecto, recuerda configurar la conexion al host a la base datos, ${err}`
        );
    });
return con;
}
}

export = new ClientPsql();

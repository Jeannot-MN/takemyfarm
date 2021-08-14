import "reflect-metadata";
import { createConnection } from "typeorm";
import dataSourceConfiguration from './db/config/DatasourceConfiguration'

// const SERVER_PORT = process.env.SERVER_PORT || 8080;

createConnection(dataSourceConfiguration)
    //   .then((_connection) => {
    //     app.listen(PORT, () => {
    //       console.log("Server is running on port", PORT);
    //     });
    //   })
    .then((_connection) => {
        console.log("Connected to the DB");

    })
    .catch((err) => {
        console.log("Unable to connect to db", err);
        process.exit(1);
    });
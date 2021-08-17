import { createConnection, useContainer } from "typeorm";
import { Container } from "typeorm-typedi-extensions";
import dataSourceConfiguration from './db/config/DatasourceConfiguration';
import { Main } from "./Main";


useContainer(Container);

createConnection(dataSourceConfiguration).then(() => {
    const main = Container.get(Main);
    main.startServer();
});

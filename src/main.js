import config from './config/app.config.js';
import {server} from './bootstrap/server.js';
import { initializeDatabaseConnection } from './config/db.config';

(() =>
{
    initializeDatabaseConnection();
    server.listen(config.port, () =>
    {
        console.log(`server is running on port ${config.port}`);
    });
})();
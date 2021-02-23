import {createServer} from 'http';
import config from './config';
import {createApp} from './http/app';

(async () => {
    const app = await createApp();
    const server = createServer(app);

    const {host, port} = config.http;
    server.listen(port, host, () => {
        console.log(`Server started on ${host}:${port}`);
    });
})();
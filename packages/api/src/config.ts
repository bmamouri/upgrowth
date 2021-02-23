import {config} from 'dotenv-safe';

try {
    config();
} catch (error) {
    if ('missing' in error)
        console.log(`Following environmental variables are missing: ${error.missing.join(', ')}`);
    else
        console.log(`An unexpected error in loading environmental variables occurred!`, error);

    process.exit(0);
}

export default {
    http: {
        host: '0.0.0.0',
        port: 3000,
    },
    corsOptions: {
        origin: [
            'http://ec2-54-226-110-60.compute-1.amazonaws.com',
            'http://localhost:8080',
        ],
        methods: ['GET', 'HEAD', 'OPTIONS', 'PUT', 'POST', 'PATCH', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    },
    unsplash: {
        accessKey: process.env.UNSPLASH_ACCESS_KEY,
    },
}
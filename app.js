import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';

import { fileURLToPath }
from 'url';

import userRoutes
from './src/routes/userRoutes.js';

import livroRoutes
from './src/routes/livroRoutes.js';

const app = express();

const __filename =
fileURLToPath(import.meta.url);

const __dirname =
path.dirname(__filename);

app.set(
    'view engine',
    'ejs'
);

app.set(
    'views',
    path.join(
        __dirname,
        'src/views'
    )
);

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(cookieParser());

app.use(
    express.static(
        path.join(
            __dirname,
            'public'
        )
    )
);

app.use(
    '/',
    userRoutes
);

app.use(
    '/livros',
    livroRoutes
);

const PORT = 3000;

app.listen(PORT, () => {

    console.log(
        `Servidor rodando em http://localhost:${PORT}`
    );

});
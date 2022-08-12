import 'dotenv/config';

import { validateEnv } from 'utils';

import { App } from './app';

import { PostController } from 'resources';

validateEnv();

const app = new App([new PostController()], Number(process.env.PORT));

app.listen();

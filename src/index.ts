import 'dotenv/config';

import { App } from './app';

import { validateEnv } from './utils';
import { PostController } from './resources';

validateEnv();

const app = new App([new PostController()], Number(process.env.PORT));

app.listen();

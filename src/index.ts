import 'dotenv/config';

import { validateEnv } from 'utils';

import { App } from './app';

validateEnv();

const app = new App([], Number(process.env.PORT));

app.listen();

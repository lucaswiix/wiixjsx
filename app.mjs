import express from 'express';
import _ from 'lodash';
import path from 'path';

const moduleURL = new URL(import.meta.url);
const __dirname = path.dirname(moduleURL.pathname);
const app = express();
const port = process.env.port || 3000;

app.use(express.static('dist'));
app.use('/', express.static('dist'));

app.listen(port, () => {
  console.log(`start on port ${port}`);
});

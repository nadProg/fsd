/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const jsonServer = require('json-server');
const fs = require('fs/promises');
const cors = require('cors');

const DB_FILE = 'db.json';
const CUSTOM_DELAY = 800;

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, DB_FILE));

server.use(cors());

server.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, CUSTOM_DELAY);
  });

  next();
});

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.post('/login', async (req, res) => {
  try {
    const {
      username,
      password,
    } = req.body;

    const db = JSON.parse(await fs.readFile(path.resolve(__dirname, DB_FILE), {
      encoding: 'utf-8',
    }));

    const { users } = db;

    const authUser = users.find((user) => user.username === username && user.password === password);

    if (authUser) {
      res.json(authUser);
      return;
    }

    res.status(403)
      .json({ message: 'Non-authorized' });
  } catch (e) {
    console.log(e);
    res.status(500)
      .json({ message: e.message });
  }
});

server.use(async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(403)
      .json({ message: 'Non-authorized' });
    return;
  }

  next();
});

server.use(router);

server.listen(8000, () => {
  // eslint-disable-next-line no-console
  console.log('Json-server is running in port 8000...');
});

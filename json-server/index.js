const path = require('path');
const jsonServer = require('json-server');
const fs = require('fs/promises');

const DB_FILE = 'db.json';
const CUSTOM_DELAY = 800;

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, DB_FILE));

server.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, CUSTOM_DELAY);
  });

  next();
});

server.use(async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(403)
      .json({message: 'Non-authorized'});
    return;
  }

  next();
});

server.use(jsonServer.defaults());

server.use(router);

server.post('/login', async (req, res) => {
  const {
    username,
    password,
  } = req.body;

  const db = JSON.parse(await fs.readFile(path.resolve(__dirname, DB_FILE), {
    encoding: 'utf-8'
  }));

  const users = db.users;

  const authUser = users.find((user) => user.username === username && user.password === password);

  if (authUser) {
    res.json(authUser);
    return;
  }

  res.status(403)
    .json({message: 'Non-authorized'});
});

server.listen(8000, () => {
  // eslint-disable-next-line no-console
  console.log('Json-server is running in port 8000...');
});

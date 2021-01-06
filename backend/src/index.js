require('dotenv').config({ path: 'variables.env' }); // entry point for backend
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const createServer = require('./createServer');
const db = require('../src/db');

const server = createServer();

// use express middleware to handle cookies (JWT)
server.express.use(cookieParser());

// decode JWT so we can get the user Id on each request
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    req.userId = userId;
  }
  next();
});

// create a middlware that populates the user on each request
server.express.use(async (req, res, next) => {
  // if they aren't logged in
  if (!req.userId) {
    return next();
  }
  // grab user from db
  const user = await db.query.user(
    { where: { id: req.userId } },
    '{id, permission, email, name}'
  );
  req.user = user;
  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  res => {
    console.log(`Server is now running on post http:/localhost:${res.port}`);
  }
);

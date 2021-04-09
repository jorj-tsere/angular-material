const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults({ noCors: false });
const db = require('./db.json');
const fs = require('fs');

server.use(middlewares);
server.use(jsonServer.bodyParser);


server.use('/users', (req, res, next) => {
  console.log(req,res);
});

// server.use('/jokes', (req, res, next) => {
//   res.send({token: 123});
// });


server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running');
});


// function formatUser(user) {
//   delete user.password;
//   user.role = user.username === 'admin'
//     ? 'admin'
//     : 'user';
//   return user;
// }

// function checkIfAdmin(user, bypassToken = false) {
//   return user.username === 'admin' || bypassToken === true
//     ? 'admin-token'
//     : 'user-token';
// }

// function isAuthorized(req) {
//   return req.headers.authorization === 'admin-token' ? true : false;
// }

function readUsers() {
  const dbRaw = fs.readFileSync('./server/db.json');
  const users = JSON.parse(dbRaw).users
  return users;
}
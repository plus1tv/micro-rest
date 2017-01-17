import microAPI from 'micro-api';
import hello from './controllers/hello.js';

exports.default = microAPI([
  {
    method: 'get',
    path: '/',
    handler: hello
  }
]);

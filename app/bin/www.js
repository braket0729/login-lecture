'use strict';

const app = require('../app');
const port = process.env.PORT;

app.listen(port, () => {
  console.log('서버가동');
});
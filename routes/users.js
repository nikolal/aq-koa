var router = require('koa-router')();

router.prefix('/users');

router.get('/', function *(next) {
  this.body = 'this is a users response!adasd';
});

router.get('/bar', function *(next) {
  console.log(this.params);  // here is always be []
console.log(this.request.params); // here is always be 'undefined'
  this.body = { name: 'testUser' };
});

module.exports = router;

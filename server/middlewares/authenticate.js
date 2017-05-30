import jwt from 'jsonwebtoken'

export default ctx => {
  if (ctx.request.body.password === 'password') {
    ctx.status = 200;
    ctx.body = {
      token: jwt.sign({ role: 'admin' },
      'jxW8u2kgpj1eHmIBDBPFBrzy12rKERSNcw3HvkSc5l8gSSnzdHIp8vKeG1aItMf'),
      message: 'Successful Authentication',
    };
  } else {
    console.log('failed')
    ctx.status = 401;
    ctx.body = {
      message: 'Authentication Failed',
    };
  }
  return ctx;
}

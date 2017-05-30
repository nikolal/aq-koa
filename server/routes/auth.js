import 'babel-polyfill'
import Router from 'koa-router'
import { baseApi } from '../config'
import authenticate from '../middlewares/authenticate'

const api = 'auth'
const router = new Router()

// console.log(register)

router.prefix(`/${baseApi}/${api}`)

router.post('/', authenticate)

// router.post('/login', login)


// // POST /api/cities
// // This route is protected, call POST /api/authenticate to get the token
// router.post('/', jwt, CitiesControllers.add)
//
// // GET /api/cities/id
// // This route is protected, call POST /api/authenticate to get the token
// router.get('/:id', jwt, CitiesControllers.findById)
//
// // PUT /api/cities/id
// // This route is protected, call POST /api/authenticate to get the token
// router.put('/:id', jwt, CitiesControllers.update)
//
// // DELETE /api/cities/id
// // This route is protected, call POST /api/authenticate to get the token
// router.delete('/:id', jwt, CitiesControllers.delete)

export default router

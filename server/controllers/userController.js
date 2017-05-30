import 'babel-polyfill'
import User from '../models/userModel'

// Get all users
class UserControllers {

  async find(ctx) {
    ctx.body = await User.find()
  }

  // Find a user

  async findById(ctx) {
    try {
      const user = await User.findById(ctx.params.id)
      if (!user) {
        ctx.throw(404)
      }
      ctx.body = user
    } catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404)
      }
      ctx.throw(500)
    }
  }

   // Add a user

  async add(ctx) {
    console.log(ctx)
    try {
      const user = await new User(ctx.request.body).save()
      ctx.body = user
    } catch (err) {
      ctx.throw(422)
    }
  }


  // Update a user

  async update(ctx) {
    try {
      const user = await User.findByIdAndUpdate(ctx.params.id, ctx.request.body)
      if (!user) {
        ctx.throw(404)
      }
      ctx.body = user
    } catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404)
      }
      ctx.throw(500)
    }
  }

  // Delete a user

  async delete(ctx) {
    try {
      const user = await User.findByIdAndRemove(ctx.params.id)
      if (!user) {
        ctx.throw(404)
      }
      ctx.body = user
    } catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404)
      }
      ctx.throw(500)
    }
  }

}

export default new UserControllers()

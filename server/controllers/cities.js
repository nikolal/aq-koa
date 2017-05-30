import 'babel-polyfill'
import City from '../models/cities'

class CitiesControllers {

  // Get all cities

  async find(ctx) {
    ctx.body = await City.find()
  }

  // Find a city

  async findById(ctx) {
    try {
      const city = await City.findById(ctx.params.id)
      if (!city) {
        ctx.throw(404)
      }
      ctx.body = city
    } catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404)
      }
      ctx.throw(500)
    }
  }

   // Add a city

  async add(ctx) {
    try {
      const city = await new City(ctx.request.body).save()
      ctx.body = city
    } catch (err) {
      ctx.throw(422)
    }
  }


  // Update a city

  async update(ctx) {
    try {
      const city = await City.findByIdAndUpdate(ctx.params.id, ctx.request.body)
      if (!city) {
        ctx.throw(404)
      }
      ctx.body = city
    } catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404)
      }
      ctx.throw(500)
    }
  }

  // Delete a city

  async delete(ctx) {
    try {
      const city = await City.findByIdAndRemove(ctx.params.id)
      if (!city) {
        ctx.throw(404)
      }
      ctx.body = city
    } catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404)
      }
      ctx.throw(500)
    }
  }

}

export default new CitiesControllers()

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index() {
    const users = await User.all()

    return users
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const newUser = await User.create(body)

    response.status(201)

    return newUser
  }

  public async show() {}

  public async update() {}

  public async destroy() {}
}

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

  public async show({ params }: HttpContextContract) {
    const user = await User.find(params.id)

    if (user) {
      return user
    }

    return 'User not found!'
  }

  public async update({ request, params }: HttpContextContract) {
    const body = request.body()

    const newUser = await User.findOrFail(params.id)

    newUser.username = body.username
    newUser.name = body.name
    newUser.email = body.email
    newUser.password = body.password

    await newUser.save()

    return newUser
  }

  public async destroy() {}
}

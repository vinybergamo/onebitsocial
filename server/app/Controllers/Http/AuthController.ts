import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    const body = request.body()

    const newUser = await User.create(body)

    response.status(201)

    return newUser
  }

  public async login({ auth, request, response }: HttpContextContract) {
    const username = request.input('username')
    const password = request.input('password')

    try {
      const token = await auth.use('api').attempt(username, password, {
        expiresIn: '7 days',
      })
      return token
    } catch (error) {
      return response.unauthorized('Invalid credentials')
    }
  }

  public async logout({ auth, request }: HttpContextContract) {
    await auth.use('api').revoke()

    return {
      revoked: true,
    }
  }

  public async validator({ auth }: HttpContextContract) {
    await auth.use('api').authenticate()

    return {
      auth: true,
      id: auth.user!.id,
    }
  }
}

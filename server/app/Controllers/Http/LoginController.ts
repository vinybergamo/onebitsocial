import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginController {
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
}

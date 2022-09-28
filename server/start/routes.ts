import Route from '@ioc:Adonis/Core/Route'
import { Group } from '@japa/runner'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.resource('/users', 'UsersController').apiOnly()

  Route.group(() => {}).prefix('/users')
}).prefix('/api')

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('', 'UsersController.index').as('users')
  Route.get('/:id', 'UsersController.show').as('user.show')
  Route.route('/:id', ['PUT', 'PATCH'], 'UsersController.update').as('user.update')
  Route.delete('/:id', 'UsersController.destroy').as('user.delete')
}).prefix('/users')

Route.group(() => {
  Route.post('/login', 'AuthController.login').as('user.login')
  Route.post('/register', 'AuthController.register').as('user.register')
  Route.post('/logout', 'AuthController.logout').as('user.logout')
  Route.get('/validator', 'AuthController.validator').as('user.validator')
}).prefix('/user')

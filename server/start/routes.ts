import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('', 'UsersController.index').as('users')
  Route.get('/:id', 'UsersController.show').as('user.show')
  Route.route('/:id', ['PUT', 'PATCH'], 'UsersController.update').as('user.update')
  Route.delete('/:id', 'UsersController.update').as('user.delete')
  Route.post('/login', 'LoginController.login').as('user.login')
  Route.post('/register', 'UsersController.store').as('user.register')
}).prefix('/users')

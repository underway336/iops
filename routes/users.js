import { users, add } from '../controllers/usersController.js';

export default function usersRoute(app) {
  app.route('/users').get(users);
  app.route('/users/add').post(add);
}

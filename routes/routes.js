import indexRoute from './index.js';
import usersRoute from './users.js';

export default function routes(app) {
  indexRoute(app);
  usersRoute(app);
}

import index from '../controllers/indexController.js';

export default function indexRoute(app) {
  app.route('/').get(index);
}

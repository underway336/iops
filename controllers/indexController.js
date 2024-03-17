import status from '../response.js';

export default function index(req, res) {
  status('Hello REST API NODEJS', res);
}

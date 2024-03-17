import connection from '../database/db.js';
import status from '../response.js';

export function users(req, res) {
  connection.query('SELECT * FROM `users`', (error, rows) => {
    if (error) {
      console.log(error);
    } else {
      status(rows, res);
    }
  });
}

export function add(req, res) {
  const sql = 'INSERT INTO `users`(`name`, `second_name`, `email`) VALUES(?, ?, ?)';
  const values = [req.query.name, req.query.second_name, req.query.email];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.log(error);
    } else {
      status(results, res);
    }
  });
  console.log(req.query);
}

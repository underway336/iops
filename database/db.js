import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  socketPath: '/var/run/mysqld/mysqld.sock',
  port: 3306,
  user: 'root',
  password: 'zxczxczxc225werwerwer',
  database: 'psyexlib',
});

connection.connect((error) => {
  if (error) {
    console.log('Ошибка подключения к БД:', error.message);
  } else {
    console.log('Подключение к БД успешно!');
  }
});

export default connection;

const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

const dbName = 'iopsDb';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Ошибка при подключении к базе данных:', err);
    return;
  }

  console.log('Успешное подключение к базе данных');

  const db = client.db(dbName);
});

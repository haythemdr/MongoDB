const MongoClient = require('mongodb').MongoClient;

async function findDocuments() {
  const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true });

  try {
    await client.connect();
    console.log('Connected to the database');

    const database = client.db('base de donnees');
    const collection = database.collection('collection');

    const documents = await collection.find({ "statut": "actif" }).toArray();
    console.log(documents);
  } finally {
    await client.close();
  }
}

findDocuments();

import mongodb from 'mongodb';
import makeParkingDb from './parking-db';

const MongoClient = mongodb.MongoClient;
const url = process.env.DM_PARKING_DB_URL;
const dbName = process.env.DM_PARKING_DB_NAME;

const client = new MongoClient(url, { useNewUrlParser: true });

async function makeDb () {
    if (!client.isConnected()) {
      await client.connect();
    }
    return client.db(dbName);
}

const parkingDb = makeParkingDb({makeDb})

export { parkingDb }

export default makeDb
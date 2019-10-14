import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient
const url = process.env.DM_PARKING_DB_URL
const dbName = process.env.DM_PARKING_DB_NAME
console.log("URL ============= ",url)
const client = new MongoClient(url, { useUnifiedTopology: true })

async function makeDb () {
    if (!client.isConnected()) {
      await client.connect()
    }
    return client.db(dbName)
}

export default makeDb
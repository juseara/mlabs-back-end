import  makeDb  from '../src/data-access';

import dotenv from 'dotenv'
dotenv.config();

(async function setupDb () {
    console.log('Setting up database...')
    
    const db = await makeDb()
    const resultParking = await db
      .collection('parking')
      .createIndexes([
        { key: { hash: 1 }, name: 'hash_idx' },
      ])
    
    console.log(resultParking)
    console.log('Database setup complete...')
    process.exit()
  })()
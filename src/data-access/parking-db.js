import Id from '../entity/id'

export default function makeParkingDb({ makeDb }) {
  return Object.freeze({
    insert,
    findById,
    update,
    findByPlate
  })

  async function insert({ id: _id , ...parkingInfo }) {
    const db = await makeDb()
    const result = await db
      .collection('parking')
      .insertOne({ _id, ...parkingInfo })
    const { _id: id, ...insertedInfo } = result.ops[0]
    return { id, ...insertedInfo }
  }

  async function findById ({ id: _id }) {
    const db = await makeDb()
    const result = await db.collection('parking').find({ _id })
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }
    const { _id: id, ...info } = found[0]
    return { id, ...info }
  }

  async function update({ id: _id, ...parkingInfo }) {
    const db = await makeDb()
    const result = await db
      .collection('parking')
      .updateOne({ _id }, { $set: { ...parkingInfo } })
    return { id: _id, ...parkingInfo }
  }

  async function findByPlate({ plate }){
    const db = await makeDb()
    const query = { plate }
    
    const result = await db.collection('parking').find(query)
    
    return (await result.toArray()).map(({ _id : id, ...found}) =>({id, ...found}))
  }

}
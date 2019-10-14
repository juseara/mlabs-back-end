import Id from '../entity/id'

export default function makeParkingDb({ makeDb }){
    return Object.freeze({
        insert,
    })

    async function insert ({ id: _id = Id.makeId(), ...parkingInfo }) {
        const db = await makeDb()
        const result = await db
          .collection('parking')
          .insertOne({ _id, ...parkingInfo })
        const { _id: id, ...insertedInfo } = result.ops[0]
        return { id, ...insertedInfo }
      }
}
export default function makeHistoryParking({ parkingDb, getTime }){
    return async function historyParking({ plate }){
        console.log("PLATE", plate)
        const parkings = await parkingDb.findByPlate({ plate })
        
        const result = await parkings.reduce((acc,cur)=>{
            const {id, paid, left, createAt, exitedAt } = cur
            const start = createAt
            const end = left?exitedAt:new Date()
            const time = getTime(start,end);
            return acc.concat({ id, time, paid, left })
        },[])
        return result
    }
}
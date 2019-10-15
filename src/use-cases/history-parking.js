export default function makeHistoryParking({ parkingDb, getMinutes }){
    return async function historyParking({ plate }){
        
        const parkings = await parkingDb.findByPlate({ plate })
        
        const result = await parkings.reduce((acc,cur)=>{
            const {id, paid, left, createdAt, exitedAt } = cur
            const time = getMinutes(createdAt,left ? exitedAt : Date.now());
            return acc.concat({ id, time, paid, left })
        },[])
        return result
    }
}
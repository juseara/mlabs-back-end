import makeParking from '../entity/parking';

export default function makeAddParking({ parkingDb }){
    return async function addParking(parkingInf){

        const parking = makeParking(parkingInf)

        
        return parkingDb.insert({
            id          : parking.getId(),
            plate       : parking.getPlate(),
            paid        : parking.getPaid(),
            left        : parking.getLeft(),
            createdAt   : parking.getCreatedAt(),
            modifiedAt  : parking.getModifiedAt(),
        })
    }
}
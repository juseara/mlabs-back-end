import makeParking from '../entity/parking';

export default function makePaymentParking({ parkingDb }){
    return async function paymentParking({ id }){
        if(!id){
            throw new Error("Você deve fornecer um id.")
        }

        const existing = await parkingDb.findById({ id })

        if(!existing){
            throw new Error("Vaga não encontrada.")
        }

        if(existing.paid){
            throw new Error("Vaga já está paga.")
        }

        const parking  = makeParking({ ...existing, modifiedAt : Date.now(), paid: true})

        const updated = await parkingDb.update({
            id              : parking.getId(),
            paid            : parking.getPaid(),
            modifiedAt      : parking.getModifiedAt(),
            paymentedAt     : parking.getModifiedAt(),
        })

        return {...existing, ...updated}
    }
}
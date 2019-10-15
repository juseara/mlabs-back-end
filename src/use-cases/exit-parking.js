import makeParking from '../entity/parking';

export default function makeExitParking({ parkingDb }){
    return async function exitParking({ id }){
        if(!id){
            throw new Error("Você deve fornecer um id.")
        }

        const existing = await parkingDb.findById({id})

        if(!existing){
            throw new Error("Vaga não encontrada.")
        }

        if(!existing.paid){
            throw new Error("Vaga não paga.")
        }

        if(existing.left){
            throw new Error("Vaga já fez saida.")
        }

        const parking  = makeParking({ ...existing, modifiedAt : Date.now(), left: true})
        
        const updated = await parkingDb.update({
            id              : parking.getId(),
            left            : parking.getLeft(),
            modifiedAt      : parking.getModifiedAt(),
            exitedAt        : parking.getModifiedAt(),
        })

        return { ...existing, ...updated }
    }
}
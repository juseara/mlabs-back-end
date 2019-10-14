import makeFakeParking from '../../../__test__/fixture/parking';
import makeParking from './'
import Id from '../id'

describe('Parking',()=>{
    it("Deve ter um id",()=>{
        const parking = makeFakeParking({id:null})
        expect(()=> makeParking(parking)).toThrow("Vaga de estacionamento deve conter um id válido.")
    })

    it('Deve ter uma placa válida',()=>{
        const parking = makeFakeParking({plate:"aaa-1234"})
        expect(()=> makeParking(parking)).toThrow("Vaga de estacionamento deve conter um placa de veículo válida.")
    })

    it('Não deve retorna mensagem de erro',()=>{
        const parking = makeFakeParking()
        expect(()=> makeParking(parking)).not.toThrow()
    })

    it('deve retornar dados do parking',()=>{
        let newId = Id.makeId();
        let created = Date.now();
        let modified = Date.now();
        const fakeParking = makeFakeParking({ plate:"AAA-3256", id:newId, paid:true, left:true, createAt:created, modifiedAt:modified });
        const parking = makeParking(fakeParking);
        
        expect(parking.getId()).toBe(newId)
        expect(parking.getPlate()).toBe("AAA-3256")
        expect(parking.getPaid()).toBe(true)
        expect(parking.getLeft()).toBe(true)
        expect(parking.getCreatedAt()).toBe(created)
        expect(parking.getModifiedAt()).toBe(modified)
    })
})

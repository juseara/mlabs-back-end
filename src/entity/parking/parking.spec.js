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

    it('Deve retornar erro de placa inválida',()=>{
        expect(()=> makeParking()).toThrow("Vaga de estacionamento deve conter um placa de veículo válida.")
    })

    it('Não deve retorna mensagem de erro',()=>{
        //const parking = makeFakeParking()
        expect(()=> makeParking({plate:"ZZZ-3565"})).not.toThrow()
    })

    it('deve retornar dados do parking',()=>{
        let newId = Id.makeId();
        const fakeParking = makeFakeParking({ plate:"AAA-3256", id:newId, paid:true, left:true });
        const parking = makeParking(fakeParking);
        
        expect(parking.getId()).toBe(newId)
        expect(parking.getPlate()).toBe("AAA-3256")
        expect(parking.getPaid()).toBe(true)
        expect(parking.getLeft()).toBe(true)
        
    })
})

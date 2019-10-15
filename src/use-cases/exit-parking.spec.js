import makeExitParking from './exit-parking';
import makePaymentParking from './payment-parking';
import makeFakeParking from '../../__test__/fixture/parking';
import makeParkingDb from '../data-access/parking-db';
import makeDb from '../../__test__/fixture/db';

describe('Exit parking',()=>{

    let parkingDb;

    beforeAll(()=>{
        parkingDb = makeParkingDb({ makeDb })
    })

    it("Deve ser informado um id para saida.",()=>{
        const exitParking = makeExitParking({ parkingDb })
        
        return expect(exitParking({id:null})).rejects.toThrow('Você deve fornecer um id.')
    })

    it("Deve ser informado um id existe para saida",()=>{
        const fakeParking = makeFakeParking({plate:"AAD-0123"})
        const exitParking = makeExitParking({ parkingDb })
        return expect(exitParking({...fakeParking })).rejects.toThrow('Vaga não encontrada.')
    })

    it("Deve retornar um erro ao dar saida não paga",async()=>{
        const fakeParking = makeFakeParking({plate:"QQQ-1111"});
        const exitParking = makeExitParking({ parkingDb });
        const inserted = await parkingDb.insert(fakeParking);

        return expect(exitParking({...inserted})).rejects.toThrow('Vaga não paga.')
    })

    it("Deve retornar erro ao efeturar saida efetuada anteriormente", async ()=>{
        const fakeParking = makeFakeParking({plate:"KLB-0000"});
        const exitParking = makeExitParking({ parkingDb });
        const paymentParking = makePaymentParking({ parkingDb });

        const inserted = await parkingDb.insert(fakeParking);

        const paymented = await paymentParking({...inserted});

        const exited = await exitParking({...paymented})
        
        return expect(exitParking({...exited})).rejects.toThrow('Vaga já fez saida.')

    })

    it("Deve efetuar saida corretamente", async ()=>{
        const fakeParking = makeFakeParking({plate:"KLT-0000"});
        const exitParking = makeExitParking({ parkingDb });
        const paymentParking = makePaymentParking({ parkingDb });

        const inserted = await parkingDb.insert(fakeParking);

        const paymented = await paymentParking({...inserted});
        const exited = await exitParking({...paymented})
        
        expect(exited.paid).toBe(true);
        expect(exited.left).toBe(true);
        expect(exited.modifiedAt).toBe(exited.exitedAt)
        expect(inserted.modifiedAt).not.toBe(paymented.modifiedAt)
        expect(paymented.modifiedAt).not.toBe(exited.modifiedAt)

    })
})
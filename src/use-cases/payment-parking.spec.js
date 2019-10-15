import makePaymentParking from './payment-parking';
import makeFakeParking from '../../__test__/fixture/parking';
import makeParkingDb from '../data-access/parking-db';
import makeDb from '../../__test__/fixture/db';


describe("Payment Parlking", ()=>{

    let parkingDb;

    beforeAll(()=>{
        parkingDb = makeParkingDb({ makeDb })
    })

    it('Deve ser informado um id para pagamento',()=>{
        const paymentParking = makePaymentParking({ parkingDb })
        
       return expect(paymentParking({id:null})).rejects.toThrow('Você deve fornecer um id.')

    })

    it("Parking não encontrado",()=>{
        const paymentParking = makePaymentParking({ parkingDb })

        const fakeParking = makeFakeParking();

       return expect(paymentParking({...fakeParking })).rejects.toThrow('Vaga não encontrada.')
    })

    it("Parking já está pago",async ()=>{
        const paymentParking = makePaymentParking({ parkingDb });
        const fakeParking = makeFakeParking();
        await parkingDb.insert(fakeParking);
        await paymentParking({ ...fakeParking })

       return expect(paymentParking({...fakeParking })).rejects.toThrow('Vaga já está paga.')

    })

    it('Parking deve ser pago com sucesso',async ()=>{
        const paymentParking = makePaymentParking({ parkingDb });
        const fakeParking = makeFakeParking();

        const inserted = await parkingDb.insert(fakeParking);
        
        const paymented = await paymentParking({ ...fakeParking })
        
        expect(inserted.paid).toBe(false);
        expect(paymented.paid).toBe(true);
        expect(paymented.modifiedAt).toBe(paymented.paymentedAt)
        expect(inserted.modifiedAt).not.toBe(paymented.modifiedAt)
    })
})
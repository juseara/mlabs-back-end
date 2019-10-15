import makeFakeParking from '../../__test__/fixture/parking';
import makeParkingDb from '../data-access/parking-db';
import makeHistoryParking from './history-parking';
import makePaymentParking from './payment-parking';
import makeDb, { clearDb } from '../../__test__/fixture/db';
import { getMinutes } from '../util'

describe("History parking",()=>{

    let parkingDb, historyParking, paymentParking;

    beforeEach(() => {
        parkingDb = makeParkingDb({ makeDb });
        historyParking = makeHistoryParking({ parkingDb, getMinutes })
        paymentParking = makePaymentParking({ parkingDb })
    })

    afterEach(async () =>{
        await clearDb()
    })

    it('busca lista de historico da plava AAA-123',async () =>{
        const parkingA = makeFakeParking({ plate:"AAA-1234" });
        const parkingB = makeFakeParking({ plate:"AAA-1234" });
        const parkingC = makeFakeParking({ plate:"AAA-1234" });

        await Promise.all([parkingA,parkingB,parkingC].map(parkingDb.insert))
        
        const founds = await historyParking({ plate:"AAA-1234" })
        
        expect(founds).toHaveLength(3)
        return founds.forEach(parking => {
            expect(parking).toHaveProperty("time")
            expect(parking.paid).toBe(false)
            return expect(parking.left).toBe(false)
        })

    })

    it('deve buscar historico de um registro pago sem saida', async()=>{
        const parking = makeFakeParking({ plate:"ATA-0034" });
        await parkingDb.insert(parking)
        await paymentParking({...parking})

        const founds = await historyParking({plate:"ATA-0034"})

        return founds.forEach(parking=>{
            expect(parking).toHaveProperty("time")
            expect(parking.paid).toBe(true)
            expect(parking.paid).toBe(true)
        })
    })
})


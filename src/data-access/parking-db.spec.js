import makeDb,{clearDb} from '../../__test__/fixture/db';
import makeParkingDb from './parking-db';
import makeFakeParking from '../../__test__/fixture/parking';

describe("Parking db",()=>{

    let parkingDb;

    beforeEach(() => {
        parkingDb = makeParkingDb({ makeDb });
    })

    afterEach(async()=>{
        await clearDb()
    })

    it("insere um parking", async ()=>{
        const fakeParking = makeFakeParking();
        const result = await parkingDb.insert(fakeParking);
        expect(result).toEqual(fakeParking)
    })

    it("busca parking por id",async ()=>{
        const fakeParking = makeFakeParking();
        await parkingDb.insert(fakeParking)
        const result = await parkingDb.findById({id:fakeParking.id})
        expect(result).toEqual(fakeParking)

    })

    it("atualiza um parking", async ()=>{
        const fakeParking = makeFakeParking();
        await parkingDb.insert(fakeParking);
        fakeParking.paid = true;
        const updated = await parkingDb.update(fakeParking);
        expect(updated.paid).toBe(true)
    })

    it("busca uma historico por placa", async ()=>{
        const parkingA = makeFakeParking({plate:"XPT-1234"});
        const parkingB = makeFakeParking({plate:"XPT-1234"});
        const parkingC = makeFakeParking({plate:"XPT-1234"});
        const parkingD = makeFakeParking({plate:"TPX-5678"});

        await Promise.all([parkingA,parkingB,parkingC,parkingD].map(parkingDb.insert))
        const foundA = await parkingDb.findByPlate({ plate: "XPT-1234" })
        const foundB = await parkingDb.findByPlate({ plate: "TPX-5678" })
        const foundC = await parkingDb.findByPlate({ plate: "CCC-4321" })

        expect(foundA.length).toBe(3)
        expect(foundB.length).toBe(1)
        expect(foundC.length).toBe(0)

    })

})
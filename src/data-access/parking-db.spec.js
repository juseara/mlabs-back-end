import makeDb from '../../__test__/fixture/db';
import makeParkingDb from './parking-db';
import makeFakeParking from '../../__test__/fixture/parking';

describe("Parking db",()=>{

    let parkingDb;

    beforeEach(async () => {
        parkingDb = makeParkingDb({ makeDb });
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

})
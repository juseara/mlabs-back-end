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
})
import makeAddParking from './add-parking';
import makeParkingDb from '../data-access/parking-db';
import makeFakeParking from '../../__test__/fixture/parking';
import makeDb from '../../__test__/fixture/db';

describe('Add Parking',()=>{

    let parkingDb;

    beforeAll(()=>{
        parkingDb = makeParkingDb({makeDb})
    })

    it('deve inserir um parking do banco de dados', async ()=>{
        const fakeParking = makeFakeParking();
        const addParking = makeAddParking({ parkingDb })
        const inserted = await addParking(fakeParking)
        expect(inserted).toMatchObject(fakeParking)
    })
})


import faker from 'faker';
import cuid from 'cuid';

const Id = Object.freeze({
    makeId: cuid,
    isValidId: cuid.isCuid
});


export default function makeFakeParking(overrides){

    
    let words = "ZZZ";
    let numbers = faker.random.number(9999);
    const parking = {
        id : Id.makeId(),
        plate : `${words}-${numbers}`,
        paid: false,
        left: false,
        createAt: Date.now(),
        modifiedAt: Date.now(),
    }

    return {
        ...parking,
        ...overrides
    }
}
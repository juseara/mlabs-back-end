import makeAddParking from './add-parking';
import { parkingDb }from '../data-access';

const addParking = makeAddParking({ parkingDb });

const useCases = Object.freeze({
    addParking
})

export default useCases
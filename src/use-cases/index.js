import makeAddParking from './add-parking';
import makePaymentParking from './payment-parking';
import { parkingDb }from '../data-access';

const addParking = makeAddParking({ parkingDb });
const paymentParking = makePaymentParking({ parkingDb })

const useCases = Object.freeze({
    addParking,
    paymentParking,
})

export default useCases
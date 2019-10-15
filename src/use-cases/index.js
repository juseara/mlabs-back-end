import makeAddParking from './add-parking';
import makePaymentParking from './payment-parking';
import makeExitParking from './exit-parking';
import { parkingDb }from '../data-access';

const addParking = makeAddParking({ parkingDb });
const paymentParking = makePaymentParking({ parkingDb })
const exitParking = makeExitParking({ parkingDb })

const useCases = Object.freeze({
    addParking,
    paymentParking,
    exitParking
})

export default useCases
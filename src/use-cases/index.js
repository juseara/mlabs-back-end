import makeAddParking from './add-parking';
import makePaymentParking from './payment-parking';
import makeExitParking from './exit-parking';
import makeHistoryParking from './history-parking';
import { getMinutes } from '../util'
import { parkingDb }from '../data-access';


const addParking = makeAddParking({ parkingDb });
const paymentParking = makePaymentParking({ parkingDb })
const exitParking = makeExitParking({ parkingDb })
const historyParking = makeHistoryParking({parkingDb, getMinutes })

const useCases = Object.freeze({
    addParking,
    paymentParking,
    exitParking,
    historyParking,
})

export default useCases
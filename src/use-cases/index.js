import makeAddParking from './add-parking';
import makePaymentParking from './payment-parking';
import makeExitParking from './exit-parking';
import makeHistoryParking from './history-parking';
import { getTime } from '../util'
import { parkingDb }from '../data-access';


const addParking = makeAddParking({ parkingDb });
const paymentParking = makePaymentParking({ parkingDb })
const exitParking = makeExitParking({ parkingDb })
const historyParking = makeHistoryParking({parkingDb, getTime })

const useCases = Object.freeze({
    addParking,
    paymentParking,
    exitParking,
    historyParking,
})

export default useCases
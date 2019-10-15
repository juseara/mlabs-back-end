import useCases from '../use-cases';
import notFound from './not-found';
import makePostParking from './post-parking';
import makePutParkingPay from './put-parking-pay';
import makePutParkingOut from './put-parking-out';
import makeGetParkingHistory from './get-parking-history';

const { addParking, paymentParking, exitParking, historyParking } = useCases

const postParking = makePostParking({ addParking })
const putParkingPay = makePutParkingPay({ paymentParking })
const putParkingOut = makePutParkingOut({ exitParking })
const getParkingHistory = makeGetParkingHistory({ historyParking })


const controller = Object.freeze({
    postParking,
    notFound,
    putParkingPay,
    putParkingOut,
    getParkingHistory,
})

export default controller
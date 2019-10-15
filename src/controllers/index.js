import useCases from '../use-cases';
import notFound from './not-found';
import makePostParking from './post-parking';
import makePutParkingPay from './put-parking-pay';
import makePutParkingOut from './put-parking-out'

const { addParking, paymentParking, exitParking } = useCases

const postParking = makePostParking({ addParking })
const putParkingPay = makePutParkingPay({ paymentParking })
const putParkingOut = makePutParkingOut({ exitParking })

const controller = Object.freeze({
    postParking,
    notFound,
    putParkingPay,
    putParkingOut,
})

export default controller
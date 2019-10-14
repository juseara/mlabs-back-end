import useCases from '../use-cases';
import makePostParking from './post-parking';
import makePutParking from './put-parking';
import notFound from './not-found';

const postParking = makePostParking({ addParking:useCases.addParking })
const putParking = makePutParking({ paymentParking: useCases.paymentParking })

const controller = Object.freeze({
    postParking,
    notFound,
    putParking,
})

export default controller
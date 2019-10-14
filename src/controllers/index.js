import useCases from '../use-cases';
import makePostParking from './post-parking';
import notFound from './not-found'

const postParking = makePostParking({ addParking:useCases.addParking })

const controller = Object.freeze({
    postParking,
    notFound
})

export default controller
import Id from '../id';
import validations from '../../validations';
import buildMakeParking from './parking';

const makeParking = buildMakeParking({Id, validations})

export default makeParking
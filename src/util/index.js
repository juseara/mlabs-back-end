import moment from 'moment';

export const getTime = (start, end) => moment(moment(end).diff(moment(start))).format("mm [minutes]");
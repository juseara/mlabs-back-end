import moment from 'moment';

export const getMinutes = (start, end) => `${moment(end).diff(moment(start),'minutes')} minutes`;
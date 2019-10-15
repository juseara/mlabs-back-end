import moment from 'moment';

export const getTime = (start, end) =>{
    console.log("START",moment(start))
    console.log("END",moment(end))
    return moment(moment(start).diff(moment(end))).format("mm [minutes]")
}
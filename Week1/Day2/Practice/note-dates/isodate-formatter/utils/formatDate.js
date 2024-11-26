import  dayjs  from "dayjs";

const dateTimeYear = (date) => dayjs(date).format('MMM D, YYYY , h:mm A ')
const detailDay = (date) => dayjs(date).format("dddd, MMMM DD , YYYYY")
const dateBySlash = (date) => dayjs(date).format('MM/DD/YYYY')


export {dateTimeYear, detailDay,dateBySlash}
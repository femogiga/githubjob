import moment from 'moment'


export  const timeConverter = (time) => {
  // const val = moment.unix(time)
  const today = moment()
  const publishedDate = moment.unix(time)
  const daysBetween = publishedDate.diff(today, 'days')
  return daysBetween + 1
}

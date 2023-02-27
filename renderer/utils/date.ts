import { format, getHours } from 'date-fns'

export const formatDate = (date): string => {
  let formattedDate = ''

  if (date) {
    let amPm = getHours(date.toDate()) < 12 ? '오전' : '오후'
    formattedDate = amPm + ' ' + format(date.toDate(), 'HH:mm')
  }

  return formattedDate
}

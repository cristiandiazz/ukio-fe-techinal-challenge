export function formatDate(dateString: string) {
  const date = new Date(dateString)
  const day = date.getDate()
  const monthIndex = date.getMonth()

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const formattedDate = `${day} ${monthNames[monthIndex]}`

  return formattedDate
}

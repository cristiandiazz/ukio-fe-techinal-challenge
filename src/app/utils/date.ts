export function isDateInNextWeek(availabilityDateString: string) {
  const today = new Date()
  const nextWeekStartDate = new Date(today.getTime() + (7 - today.getDay()) * 24 * 60 * 60 * 1000)
  const nextWeekEndDate = new Date(nextWeekStartDate.getTime() + 7 * 24 * 60 * 60 * 1000)

  const availabilityDate = new Date(availabilityDateString)
  return availabilityDate >= nextWeekStartDate && availabilityDate < nextWeekEndDate
}

export function isDateInNextMonth(availabilityDateString: string) {
  const today = new Date()
  const nextMonthStartDate = new Date(today.getFullYear(), today.getMonth() + 1, 1)
  const nextMonthEndDate = new Date(today.getFullYear(), today.getMonth() + 2, 0)

  const availabilityDate = new Date(availabilityDateString)
  return availabilityDate >= nextMonthStartDate && availabilityDate <= nextMonthEndDate
}

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

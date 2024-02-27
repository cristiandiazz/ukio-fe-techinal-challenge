export function getCurrentPageItems<T>(currentPage: number, pageSize: number, allItems: T[]): T[] {
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  return allItems.slice(startIndex, endIndex)
}

export function getTotalPages(pageSize: number, totalItems: number): number {
  return Math.ceil(totalItems / pageSize)
}

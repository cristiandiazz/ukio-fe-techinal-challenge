export enum CityEnum {
  madrid = 'madrid',
  barcelona = 'barcelona',
  lisbon = 'lisbon',
}

export default interface Apartment {
  name: string
  city: CityEnum
  bedrooms: number
  bathrooms: number
  price: number
  availability: string
  imageUrl: string
}

 
import { TouristSeasonDiscountDto } from './TouristSeasonDiscountDto'

export type TouristSeasonDto = {  
  id?: string
  price_flight_per_hour?: number
  start_date?: Date
  end_date?: Date
  code?: string
  discounts?: TouristSeasonDiscountDto
}
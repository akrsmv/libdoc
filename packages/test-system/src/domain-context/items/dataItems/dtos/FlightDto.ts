 
import { FlightTickets_priceDto } from './FlightTickets_priceDto'

export type FlightDto = {  
  id?: string
  from_airport?: string
  to_airport?: string
  start_date?: Date
  end_date?: Date
  duration_hours?: number
  tickets_price?: FlightTickets_priceDto
  touristSeason?: string
  airplane?: string
}
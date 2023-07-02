 
import { AirportAirpotDetailDto } from './AirportAirpotDetailDto'

export type AirportDto = {  
  id?: string
  name?: string
  city?: string
  country?: string
  continent?: string
  airpotDetails?: AirportAirpotDetailDto
}
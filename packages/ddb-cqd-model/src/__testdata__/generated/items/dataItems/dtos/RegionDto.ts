 
import { RegionRegionDetailDto } from './RegionRegionDetailDto'

export type RegionDto = {  
  id?: string
  name?: string
  airport?: string
  city?: string
  country?: string
  continent?: string
  regionDetails?: RegionRegionDetailDto
}
 
import { OrderItemDto } from './OrderItemDto'

export type OrderDto = {  
  id?: string
  public_data_ref?: string
  person?: string
  status?: string
  items?: OrderItemDto []
}
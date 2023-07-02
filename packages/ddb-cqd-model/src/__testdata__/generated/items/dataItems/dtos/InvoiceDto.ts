

export type InvoiceDto = {  
  id?: string
  invoice_due_date?: Date
  invoice_issued_date?: Date
  invoice_number?: string
  orders?: string[]
  total_net?: number
  total_gross?: number
  total_vat?: number
  vat_percent?: number
}
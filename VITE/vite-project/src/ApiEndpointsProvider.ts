
import * as endpoints from './api-endpoints.json'
//@ts-ignore
export const GCT_API = endpoints[import.meta.env.VITE_WEBAPP_ENV  ?? "LOCAL"]["gct_api"]

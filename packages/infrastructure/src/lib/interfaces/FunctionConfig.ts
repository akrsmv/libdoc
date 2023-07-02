export interface FunctionConfig {
    name: string,
    RAM: number,
    Timeout: number,
    SQSFIFO?: boolean,
    reservedConcurrentExecutions?: number,
    eventSourceBatchSize?: number,
    XRayTracing?: boolean,
    sqsRetries?: number
}
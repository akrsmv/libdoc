export interface ITableGSIProjectionConfig {
    ProjectionType: "ALL" | "KEYS_ONLY" | "INCLUDE",
    NonKeyAttributes?: string[]
}
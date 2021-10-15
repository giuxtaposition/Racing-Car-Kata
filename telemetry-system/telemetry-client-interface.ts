export interface TelemetryClientConnectionInterface {
    getOnlineStatus: () => boolean
    connect: (telemetryServerConnectionString: string) => void
    disconnect: () => void
}
export interface TelemetryClientDataInterface {
    diagnosticMessage: () => string
    send: (message: string) => void
    receive: () => string
}

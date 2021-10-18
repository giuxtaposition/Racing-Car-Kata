import { TelemetryClientConnectionInterface } from './telemetry-client-interface'

export default class TelemetryClientConnection
    implements TelemetryClientConnectionInterface
{
    private numberOfConnectionTries: number
    private onlineStatus: boolean

    constructor() {
        this.onlineStatus = false
        this.numberOfConnectionTries = 3
    }

    public getOnlineStatus() {
        return this.onlineStatus
    }

    public connect(telemetryServerConnectionString: string) {
        if (telemetryServerConnectionString === '') {
            throw new Error('missing telemetryServerConnectionString parameter')
        }

        // simulate the operation on a real modem
        const success = this.connectionEventsSimulator(1, 10) <= 8
        this.reconnect(success, telemetryServerConnectionString)

        this.onlineStatus = success
    }

    private reconnect(
        success: boolean,
        telemetryServerConnectionString: string
    ) {
        if (!success && this.numberOfConnectionTries > 0) {
            this.numberOfConnectionTries--
            this.connect(telemetryServerConnectionString)
        }
    }

    public disconnect() {
        this.onlineStatus = false
    }

    // simulate the operation on a real modem
    private connectionEventsSimulator(min: number, max: number): number {
        const delta = max + 1 - min
        return min + Math.floor(delta * Math.random())
    }
}

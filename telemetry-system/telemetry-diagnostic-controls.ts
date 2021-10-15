import {
    TelemetryClientConnectionInterface,
    TelemetryClientDataInterface,
} from './telemetry-client-interface'
export default class TelemetryDiagnosticControls {
    private diagnosticChannelConnectionString: string

    private telemetryClientConnection: TelemetryClientConnectionInterface
    private telemetryClientData: TelemetryClientDataInterface
    private diagnosticInfo: string

    constructor(
        telemetryClientConnection: TelemetryClientConnectionInterface,
        telemetryClientData: TelemetryClientDataInterface
    ) {
        this.diagnosticChannelConnectionString = '*111#'
        this.telemetryClientConnection = telemetryClientConnection
        this.telemetryClientData = telemetryClientData
        this.diagnosticInfo = ''
    }

    public readDiagnosticInfo() {
        return this.diagnosticInfo
    }

    public writeDiagnosticInfo(newValue: string) {
        this.diagnosticInfo = newValue
    }

    public checkTransmission() {
        this.diagnosticInfo = ''

        this.telemetryClientConnection.disconnect()

        let retryLeft = 3
        while (
            this.telemetryClientConnection.getOnlineStatus() === false &&
            retryLeft > 0
        ) {
            this.telemetryClientConnection.connect(
                this.diagnosticChannelConnectionString
            )
            retryLeft -= 1
        }

        if (this.telemetryClientConnection.getOnlineStatus() === false) {
            throw new Error('Unable to connect')
        }

        this.telemetryClientData.send(
            this.telemetryClientData.diagnosticMessage()
        )
        this.diagnosticInfo = this.telemetryClientData.receive()
    }
}

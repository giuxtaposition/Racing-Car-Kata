import { expect } from 'chai'
import TelemetryClientConnection from '../telemetry-system/telemetry-client-connection'
import TelemetryClientData from '../telemetry-system/telemetry-client-data'

describe('Telemetry System', () => {
    describe('TelemetryClientConnection', () => {
        it('Should be OFF at start', () => {
            const telemetryClientConnection = new TelemetryClientConnection()

            expect(telemetryClientConnection.getOnlineStatus()).to.equal(false)
        })
        it('Should be ON when connecting successfully', () => {
            const telemetryClientConnection = new TelemetryClientConnection()

            telemetryClientConnection.connect('let me connect')

            expect(telemetryClientConnection.getOnlineStatus()).to.equal(true)
        })
        it('Should throw error when not connecting successfully', () => {
            const telemetryClientConnection = new TelemetryClientConnection()

            expect(
                telemetryClientConnection.connect.bind(
                    telemetryClientConnection,
                    ''
                )
            ).to.throw('missing telemetryServerConnectionString parameter')
        })
        it('Should be OFF on disconnect', () => {
            const telemetryClientConnection = new TelemetryClientConnection()

            telemetryClientConnection.connect('let me connect')
            telemetryClientConnection.disconnect()
            expect(telemetryClientConnection.getOnlineStatus()).to.equal(false)
        })
    })
    describe('TelemetryClientData', () => {
        it('On message send, receive a diagnostic message correctly', () => {
            const telemetryClientData = new TelemetryClientData()
            telemetryClientData.send('random message')
            expect(telemetryClientData.receive()).not.to.equal('')
        })
        it('On empty message send, throws error', () => {
            const telemetryClientData = new TelemetryClientData()

            expect(
                telemetryClientData.send.bind(telemetryClientData, '')
            ).to.throw('missing message parameter')
        })
    })
})

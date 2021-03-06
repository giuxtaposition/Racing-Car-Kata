import chai from 'chai'
import spies from 'chai-spies'

import 'mocha'
import TelemetryDiagnosticControls from '../telemetry-system/telemetry-diagnostic-controls'
import {
    TelemetryClientConnectionInterface,
    TelemetryClientDataInterface,
} from '../telemetry-system/telemetry-client-interface'
import { instance, mock, when } from 'ts-mockito'
import TelemetryClientData from '../telemetry-system/telemetry-client-data'

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
chai.use(spies)
const expect = chai.expect
const spy = chai.spy

describe('Telemetry System', () => {
    describe('TelemetryDiagnosticControls', () => {
        it('CheckTransmission should send a diagnostic message and receive a status message response', () => {
            const telemetryClientData: TelemetryClientDataInterface =
                new TelemetryClientData()

            spy.on(telemetryClientData, 'send')

            spy.on(telemetryClientData, 'receive')

            const telemetryClientConnection: TelemetryClientConnectionInterface =
                mock<TelemetryClientConnectionInterface>()

            const telemetryDiagnosticControls = new TelemetryDiagnosticControls(
                instance(telemetryClientConnection),
                telemetryClientData
            )
            telemetryDiagnosticControls.checkTransmission()

            expect(telemetryClientData.send).to.have.been.called.with(
                TelemetryClientData.prototype.diagnosticMessage()
            )
            expect(telemetryClientData.receive).to.have.been.called.once
        })
        it('connect and receive correct message', () => {
            const message = 'message from Client'
            const telemetryClientData: TelemetryClientDataInterface =
                mock<TelemetryClientDataInterface>()

            when(telemetryClientData.receive()).thenReturn(message)

            const telemetryClientConnection: TelemetryClientConnectionInterface =
                mock<TelemetryClientConnectionInterface>()

            when(telemetryClientConnection.getOnlineStatus()).thenReturn(true)

            const telemetryDiagnosticControls = new TelemetryDiagnosticControls(
                instance(telemetryClientConnection),
                instance(telemetryClientData)
            )

            telemetryDiagnosticControls.checkTransmission()

            expect(telemetryDiagnosticControls.readDiagnosticInfo()).to.equal(
                message
            )
        })
        it('when unable to connect throws error', () => {
            const telemetryClientData: TelemetryClientDataInterface =
                new TelemetryClientData()

            const telemetryClientConnection: TelemetryClientConnectionInterface =
                mock<TelemetryClientConnectionInterface>()

            when(telemetryClientConnection.getOnlineStatus()).thenReturn(false)

            const telemetryDiagnosticControls = new TelemetryDiagnosticControls(
                instance(telemetryClientConnection),
                telemetryClientData
            )

            expect(
                telemetryDiagnosticControls.checkTransmission.bind(
                    telemetryDiagnosticControls
                )
            ).to.throw('Unable to connect')
        })
    })
})

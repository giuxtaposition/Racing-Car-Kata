import { expect } from 'chai'
import 'mocha'
import TelemetryDiagnosticControls from '../telemetry-system/telemetry-diagnostic-controls'

describe('Telemetry System', () => {
    describe('TelemetryDiagnosticControls', () => {
        it('CheckTransmission should send a diagnostic message and receive a status message response', () => {
            const telemetryDiagnosticControls =
                new TelemetryDiagnosticControls()
            telemetryDiagnosticControls.checkTransmission()

            const diagnosticMessage =
                'LAST TX rate................ 100 MBPS\r\n' +
                'HIGHEST TX rate............. 100 MBPS\r\n' +
                'LAST RX rate................ 100 MBPS\r\n' +
                'HIGHEST RX rate............. 100 MBPS\r\n' +
                'BIT RATE.................... 100000000\r\n' +
                'WORD LEN.................... 16\r\n' +
                'WORD/FRAME.................. 511\r\n' +
                'BITS/FRAME.................. 8192\r\n' +
                'MODULATION TYPE............. PCM/FM\r\n' +
                'TX Digital Los.............. 0.75\r\n' +
                'RX Digital Los.............. 0.10\r\n' +
                'BEP Test.................... -5\r\n' +
                'Local Rtrn Count............ 00\r\n' +
                'Remote Rtrn Count........... 00'

            expect(telemetryDiagnosticControls.readDiagnosticInfo()).to.equal(
                diagnosticMessage
            )
        })
    })
})

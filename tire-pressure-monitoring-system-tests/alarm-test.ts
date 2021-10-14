import { expect } from 'chai'
import Alarm from '../tire-pressure-monitoring-system/alarm'
import * as Sensor from '../tire-pressure-monitoring-system/sensor'
import { ImportMock, MockManager } from 'ts-mock-imports'

// - [x] Test alarm for normal pressure
// - [x] Test alarm for high pressure
// - [x] Test alarm for low pressure

describe('Tire Pressure Monitoring System', () => {
    let mockedSensor: MockManager<Sensor.default>
    beforeEach(() => {
        mockedSensor = ImportMock.mockClass(Sensor)
    })

    describe('Alarm ', () => {
        it('default is OFF', () => {
            mockedSensor.mock('popNextPressurePsiValue', 18)
            const alarm = new Alarm()
            alarm.check()
            expect(alarm.isAlarmOn()).to.equal(false)
        })
        it('is ON when high pressure (>21)', () => {
            mockedSensor.mock('popNextPressurePsiValue', 22)
            const alarm = new Alarm()
            alarm.check()
            expect(alarm.isAlarmOn()).to.equal(true)
        })
        it('is ON when low pressure (<17)', () => {
            mockedSensor.mock('popNextPressurePsiValue', 16)
            const alarm = new Alarm()
            alarm.check()
            expect(alarm.isAlarmOn()).to.equal(true)
        })
    })
})

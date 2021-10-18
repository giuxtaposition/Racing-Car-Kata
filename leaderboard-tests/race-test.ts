import { expect } from 'chai'
import 'mocha'
import testData from './test-data'

describe('Race: ', () => {
    it('Check Points corresponds to correct driver', () => {
        expect(25).to.equal(testData.race1.points(testData.driver1))
        expect(18).to.equal(testData.race1.points(testData.driver2))
        expect(15).to.equal(testData.race1.points(testData.driver3))
    })

    it('Check Names corresponds to correct driver', () => {
        expect('Nico Rosberg').to.equal(
            testData.race4.driverName(testData.driver1)
        )
        expect('Lewis Hamilton').to.equal(
            testData.race4.driverName(testData.driver2)
        )
        expect('Self Driving Car - Acme (1.2)').to.equal(
            testData.race4.driverName(testData.driver4)
        )
    })
})

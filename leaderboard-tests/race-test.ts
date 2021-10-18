import { expect } from 'chai'
import 'mocha'
import Driver from '../leaderboard/driver'
import Race from '../leaderboard/race'

describe('Race: ', () => {
    it('Check Points corresponds to correct driver', () => {
        const driver1 = new Driver('Nico Rosberg', 'DE')
        const driver2 = new Driver('Lewis Hamilton', 'UK')
        const driver3 = new Driver('Sebastian Vettel', 'DE')
        const race = new Race('Australian Grand Prix', [
            driver1,
            driver2,
            driver3,
        ])

        expect(25).to.equal(race.points(driver1))
        expect(18).to.equal(race.points(driver2))
        expect(15).to.equal(race.points(driver3))
    })
})

import { expect } from 'chai'
import 'mocha'
import Driver from '../leaderboard/driver'
import Leaderboard from '../leaderboard/leaderboard'
import Race from '../leaderboard/race'

describe('Leaderboard: ', () => {
    const driver1 = new Driver('Nico Rosberg', 'DE')
    const driver2 = new Driver('Lewis Hamilton', 'UK')
    const driver3 = new Driver('Sebastian Vettel', 'DE')
    const race1 = new Race('Australian Grand Prix', [driver1, driver2, driver3])
    const race2 = new Race('Malaysian Grand Prix', [driver3, driver2, driver1])
    const race3 = new Race('Chinese Grand Prix', [driver2, driver1, driver3])
    const sampleLeaderboard1 = new Leaderboard([race1, race2, race3])

    it('Check Winner', () => {
        expect('Lewis Hamilton').to.equal(
            sampleLeaderboard1.driverRankings()[0]
        )
    })

    it('Check winner has correct points', () => {
        const expectedPoints = 18 + 18 + 25
        expect(expectedPoints).to.equal(
            sampleLeaderboard1.driverPoints().get('Lewis Hamilton')
        )
    })
})

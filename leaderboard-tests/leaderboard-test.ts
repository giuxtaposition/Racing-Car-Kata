import { expect } from 'chai'
import 'mocha'
import testData from './test-data'

describe('Leaderboard: ', () => {
    it('Check Winner', () => {
        expect('Lewis Hamilton').to.equal(
            testData.sampleLeaderboard1.driverRankings()[0]
        )
    })

    it('Check winner has correct points', () => {
        const expectedPoints = 18 + 18 + 25
        expect(expectedPoints).to.equal(
            testData.sampleLeaderboard1.driverPoints().get('Lewis Hamilton')
        )
    })

    it('Leaderboard with self driving cars', () => {
        expect('Lewis Hamilton').to.equal(
            testData.sampleLeaderboard2.driverRankings()[0]
        )
    })

    it('Self driving car with different algorithms are considered different cars', () => {
        expect(testData.sampleLeaderboard2.driverRankings().length).to.equal(4)
    })
})

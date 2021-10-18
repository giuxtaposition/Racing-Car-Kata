import Race from './race'

export default class Leaderboard {
    private _races: Race[]

    constructor(...races: Race[]) {
        this._races = races
    }

    driverPoints(): Map<string, number> {
        const driverPoints = new Map<string, number>()

        this._races.forEach(race => {
            race.results.forEach(driver => {
                const name = race.driverName(driver)
                const pastPoints: number = driverPoints.get(name) || 0
                driverPoints.set(name, pastPoints + race.points(driver))
            })
        })
        return driverPoints
    }

    public driverRankings(): string[] {
        const rankings = [...this.driverPoints()]
            .sort(function (a, b) {
                return b[1] - a[1]
            })
            .map(points => {
                return points[0]
            })

        return rankings
    }
}

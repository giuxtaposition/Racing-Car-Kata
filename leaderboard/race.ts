import Driver from './driver'
import SelfDrivingCar from './self-driving-car'

export default class Race {
    private _points: number[] = [25, 18, 15]

    private _name: string
    private _results: Driver[]
    private _driverNames: Map<Driver, string>

    constructor(name: string, results: Driver[]) {
        this._name = name
        this._results = results
        this._driverNames = new Map<Driver, string>()
        this._results.forEach(driver => {
            let name = driver.name
            if (driver instanceof SelfDrivingCar) {
                name =
                    'Self Driving Car - ' +
                    driver.country +
                    ' (' +
                    driver.algorithmVersion +
                    ')'
            }
            this._driverNames.set(driver, name)
        })
    }

    public points(driver: Driver) {
        return this._points[this._results.indexOf(driver)]
    }

    public driverName(driver: Driver): string {
        return this._driverNames.get(driver) || ''
    }

    public get results() {
        return this._results
    }

    public get name() {
        return this._name
    }
}

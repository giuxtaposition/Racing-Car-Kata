import DriverInterface from './driverInterface'

export default class Race {
    private _points: number[] = [25, 18, 15]

    private _name: string
    private _results: DriverInterface[]
    private _driverNames: Map<DriverInterface, string>

    constructor(name: string, results: DriverInterface[]) {
        this._name = name
        this._results = results
        this._driverNames = new Map<DriverInterface, string>()
        this._results.forEach(driver => {
            this._driverNames.set(driver, driver.name)
        })
    }

    public points(driver: DriverInterface) {
        return this._points[this._results.indexOf(driver)]
    }

    public driverName(driver: DriverInterface): string {
        return this._driverNames.get(driver) || ''
    }

    public get results() {
        return this._results
    }

    public get name() {
        return this._name
    }
}

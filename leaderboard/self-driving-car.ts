import DriverInterface from './driverInterface'
export default class SelfDrivingCar implements DriverInterface {
    private _algorithmVersion: string
    private _company: string

    constructor(algorithmVersion: string, company: string) {
        this._company = company
        this._algorithmVersion = algorithmVersion
    }

    public set algorithmVersion(algorithmVersion: string) {
        this._algorithmVersion = algorithmVersion
    }

    public get name() {
        return (
            'Self Driving Car - ' +
            this._company +
            ' (' +
            this._algorithmVersion +
            ')'
        )
    }
}

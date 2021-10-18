import Driver from './driver'
export default class SelfDrivingCar extends Driver {
    private _algorithmVersion: string

    constructor(algorithmVersion: string, company: string) {
        super('', company)
        this._algorithmVersion = algorithmVersion
    }

    public get algorithmVersion() {
        return this._algorithmVersion
    }

    public set algorithmVersion(algorithmVersion: string) {
        this._algorithmVersion = algorithmVersion
    }
}

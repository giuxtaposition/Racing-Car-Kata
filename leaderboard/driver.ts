export default class Driver {
    private _name: string
    private _country: string

    constructor(name: string, country: string) {
        this._name = name
        this._country = country
    }

    public get name(): string {
        return this._name
    }
    public get country(): string {
        return this._country
    }
}

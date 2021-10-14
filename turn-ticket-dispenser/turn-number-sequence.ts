export default class TurnNumberSequence {
    private turnNumber: number

    constructor() {
        this.turnNumber = 0
    }

    public getNextTurnNumber() {
        return this.turnNumber++
    }
}

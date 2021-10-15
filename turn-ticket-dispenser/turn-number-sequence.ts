import TurnNumberSequenceInterface from './turn-number-sequence-interface'

export default class TurnNumberSequence implements TurnNumberSequenceInterface {
    private turnNumber: number

    constructor() {
        this.turnNumber = 0
    }

    public getNextTurnNumber() {
        return this.turnNumber++
    }
}

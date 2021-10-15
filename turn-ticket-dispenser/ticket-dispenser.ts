import TurnNumberSequenceInterface from './turn-number-sequence-interface'
import TurnTicket from './turn-ticket'

export default class TicketDispenser {
    private TurnNumberSequence: TurnNumberSequenceInterface
    constructor(TurnNumberSequence: TurnNumberSequenceInterface) {
        this.TurnNumberSequence = TurnNumberSequence
    }

    public getTurnTicket() {
        const newTurnNumber = this.TurnNumberSequence.getNextTurnNumber()
        const newTurnTicket = new TurnTicket(newTurnNumber)

        return newTurnTicket
    }
}

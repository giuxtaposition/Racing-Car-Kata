import TurnNumberSequenceInterface from './turn-number-sequence-interface'
import TurnTicket from './turn-ticket'

export default class TicketDispenser {
    public getTurnTicket(TurnNumberSequence: TurnNumberSequenceInterface) {
        const newTurnNumber = TurnNumberSequence.getNextTurnNumber()
        const newTurnTicket = new TurnTicket(newTurnNumber)

        return newTurnTicket
    }
}

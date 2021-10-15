import { expect } from 'chai'
import 'mocha'
import TicketDispenser from '../turn-ticket-dispenser/ticket-dispenser'
import TurnNumberSequenceInterface from '../turn-ticket-dispenser/turn-number-sequence-interface'
import { instance, mock, when } from 'ts-mockito'
import TurnNumberSequence from '../turn-ticket-dispenser/turn-number-sequence'

// - [x] Ask for ticket, receive ticket
// - [x] New Ticked number is greater than last ticket number
// - [x] New Ticket number is greater than last ticket number even when using two ticket dispensers

describe('Turn Ticket Dispenser', () => {
    it('Ask for ticket, receive ticket with my number', () => {
        const mockedTurnNumberSequence: TurnNumberSequenceInterface =
            mock<TurnNumberSequenceInterface>()

        when(mockedTurnNumberSequence.getNextTurnNumber()).thenReturn(13)

        const dispenser = new TicketDispenser()
        const ticket = dispenser.getTurnTicket(
            instance(mockedTurnNumberSequence)
        )
        expect(ticket.getTurnNumber()).to.equal(13)
    })

    it('New ticket number is greater than previous ticket number', () => {
        const turnNumberSequence: TurnNumberSequence = new TurnNumberSequence()
        const dispenser = new TicketDispenser()

        const previousTicket = dispenser.getTurnTicket(turnNumberSequence)
        const newTicket = dispenser.getTurnTicket(turnNumberSequence)

        expect(newTicket.getTurnNumber()).to.greaterThan(
            previousTicket.getTurnNumber()
        )
    })

    it('Using two dispenser: new ticket number is still greater than previous ticket number', () => {
        const turnNumberSequence: TurnNumberSequenceInterface =
            new TurnNumberSequence()
        const dispenser = new TicketDispenser()

        const previousTicket = dispenser.getTurnTicket(turnNumberSequence)
        const otherDispenser = new TicketDispenser()
        const newTicket = otherDispenser.getTurnTicket(turnNumberSequence)

        expect(newTicket.getTurnNumber()).to.greaterThan(
            previousTicket.getTurnNumber()
        )
    })
})

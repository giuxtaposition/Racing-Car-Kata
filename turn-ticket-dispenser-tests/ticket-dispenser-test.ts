import { expect } from 'chai'
import 'mocha'
import TicketDispenser from '../turn-ticket-dispenser/ticket-dispenser'
import TurnNumberSequence from '../turn-ticket-dispenser/turn-number-sequence'
import { instance, mock, when } from 'ts-mockito'

// - [ ] Ask for ticket, receive ticket

describe('Turn Ticket Dispenser', () => {
    it('Ask for ticket, receive ticket with my number', () => {
        const mockedTurnNumberSequence: TurnNumberSequence =
            mock(TurnNumberSequence)

        when(mockedTurnNumberSequence.getNextTurnNumber()).thenReturn(13)

        const dispenser = new TicketDispenser()
        const ticket = dispenser.getTurnTicket(
            instance(mockedTurnNumberSequence)
        )
        expect(ticket.getTurnNumber()).to.equal(13)
    })
})

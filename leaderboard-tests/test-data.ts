import Driver from '../leaderboard/driver'
import Leaderboard from '../leaderboard/leaderboard'
import Race from '../leaderboard/race'
import SelfDrivingCar from '../leaderboard/self-driving-car'

export default class testData {
    public static driver1: Driver
    public static driver2: Driver
    public static driver3: Driver
    public static driver4: SelfDrivingCar

    public static race1: Race
    public static race2: Race
    public static race3: Race
    public static race4: Race
    public static race5: Race
    public static race6: Race

    public static sampleLeaderboard1: Leaderboard
    public static sampleLeaderboard2: Leaderboard

    static {
        testData.driver1 = new Driver('Nico Rosberg', 'DE')
        testData.driver2 = new Driver('Lewis Hamilton', 'UK')
        testData.driver3 = new Driver('Sebastian Vettel', 'DE')
        testData.driver4 = new SelfDrivingCar('1.2', 'Acme')

        testData.race1 = new Race(
            'Australian Grand Prix',
            testData.driver1,
            testData.driver2,
            testData.driver3
        )
        testData.race2 = new Race(
            'Malaysian Grand Prix',
            testData.driver3,
            testData.driver2,
            testData.driver1
        )
        testData.race3 = new Race(
            'Chinese Grand Prix',
            testData.driver2,
            testData.driver1,
            testData.driver3
        )
        testData.race4 = new Race(
            'Fictional Grand Prix 1',
            testData.driver1,
            testData.driver2,
            testData.driver4
        )
        testData.race5 = new Race(
            'Fictional Grand Prix 2',
            testData.driver4,
            testData.driver2,
            testData.driver1
        )
        testData.driver4.algorithmVersion = '1.3'
        testData.race6 = new Race(
            'Fictional Grand Prix 3',
            testData.driver2,
            testData.driver1,
            testData.driver4
        )

        testData.sampleLeaderboard1 = new Leaderboard(
            testData.race1,
            testData.race2,
            testData.race3
        )
        testData.sampleLeaderboard2 = new Leaderboard(
            testData.race4,
            testData.race5,
            testData.race6
        )
    }
}

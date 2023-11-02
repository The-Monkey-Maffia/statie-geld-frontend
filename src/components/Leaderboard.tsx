import '../App.css'
import LeaderboardCard from './LeaderboardCard'

const Leaderboard = () => {
    return(
        <div className="leaderboard">
            <h1 className='title'>LEADERBOARD</h1>
            <LeaderboardCard />
            <LeaderboardCard />
            <LeaderboardCard />

        </div>

    )
}

export default Leaderboard
import './App.css'
import Leaderboard from './components/Leaderboard'
import LeaderboardCard from './components/LeaderboardCard'

function App() {

  return (
    <>
      <div className="leaderboard">
        <h1 className='title'>LEADERBOARD</h1>
        {
          <Leaderboard />
          /* <LeaderboardCard />
        <LeaderboardCard />
        <LeaderboardCard /> */}
      </div>
    </>
  )
}

export default App

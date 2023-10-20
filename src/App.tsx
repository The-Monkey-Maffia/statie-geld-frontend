import './App.css'
import LeaderboardCard from './components/LeaderboardCard'

function App() {

  return (
    <>
      <div className="leaderboard">
        <h1 className='title'>LEADERBOARD</h1>
        <LeaderboardCard />
        <LeaderboardCard />
        <LeaderboardCard />
      </div>
    </>
  )
}

export default App

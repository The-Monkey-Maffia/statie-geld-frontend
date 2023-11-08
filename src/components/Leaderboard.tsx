import '../App.css';
import LeaderboardCard from './LeaderboardCard';


const Leaderboard = () => {
  const leaderboardData = [
    { name: "Kika", score: 120, description: "Hulp voor kinderen van kanker", placement: 1 },
    { name: "WWF", score: 85, description: "World Wide Fond voor de natuur", placement: 2 },
    { name: "Dierenlot", score: 120, description: "Stichting voort dieren", placement: 3 },
    // Voeg meer spelers toe...
  ];

//   leaderboardData.sort((a, b) => a.placement - b.placement);f

  return (
    <div className="leaderboard">
      <h1 className='title'>Leaderboard</h1>
      {leaderboardData.map((charity, index) => (
        <LeaderboardCard key={index} name={charity.name} description={charity.description} score={charity.score} placement={charity.placement} />
      ))}
    </div>
  );
};



export default Leaderboard;
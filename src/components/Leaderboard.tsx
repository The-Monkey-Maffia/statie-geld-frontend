import '../App.css';
import LeaderboardCard from './LeaderboardCard';

const Leaderboard = () => {
  const leaderboardData = [
    { name: "Speler 1", score: 100, placement: 1 },
    { name: "Speler 2", score: 85, placement: 2 },
    { name: "Speler 3", score: 120, placement: 3 },
    // Voeg meer spelers toe...
  ];

  leaderboardData.sort((a, b) => a.placement - b.placement);

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      {leaderboardData.map((player, index) => (
        <LeaderboardCard key={index} name={player.name} score={player.score} placement={player.placement} />
      ))}
    </div>
  );
};
export default Leaderboard;
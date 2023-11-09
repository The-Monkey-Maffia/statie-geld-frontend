import { useEffect } from 'react';
import '../App.css';
import LeaderboardCard from './LeaderboardCard';
import axios from 'axios';

const Leaderboard = () => {
  const leaderboardData = [
    { name: "Kika", score: 100, description: "Hulp voor kinderen van kanker", placement: 1 },
    { name: "WWF", score: 85, description: "World Wide Fond voor de natuur", placement: 2 },
    { name: "Dierenlot", score: 120, description: "Stichting voort dieren", placement: 3 },
    // Voeg meer spelers toe...
  ];
  
  useEffect(() => {
    axios.get('http://localhost:3000/get/goededoel/')
    .then((response) => {
      console.log(response.data);
    })
  })

  return (
    <div className="leaderboard">
      <h1 className='title'>Leaderboard</h1>
      {leaderboardData.map((charity, index) => (
        <LeaderboardCard key={index} name={charity.name} description={charity.description} score={charity.score} placement={charity.placement} />
      ))}
      {/* {data && <LeaderboardCard data={data} />} */}      
    </div>
  );
};
export default Leaderboard;
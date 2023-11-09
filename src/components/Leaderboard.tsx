import { useEffect, useState } from 'react';
import '../App.css';
import LeaderboardCard from './LeaderboardCard';
import axios from 'axios';

const Leaderboard = () => {

  const [apiData, setData] = useState<any>('')

  // const leaderboardData = [
  //   { name: "Kika", score: 100, description: "Hulp voor kinderen van kanker", placement: 1 },
  //   { name: "WWF", score: 85, description: "World Wide Fond voor de natuur", placement: 2 },
  //   { name: "Dierenlot", score: 120, description: "Stichting voort dieren", placement: 3 },
  //   // Voeg meer spelers toe...
  // ];
  
  useEffect(() => {
    // const data = async() => {
    //   const data = await axios.get('http://localhost:3000/get/goededoel/')
    //   return data;
    // }

    // const apiData = data()
    // console.log(apiData);
    axios.get('http://localhost:3000/get/goededoel/')
    .then((response) => setData(response.data))
    console.log('apiData: ', apiData);

  })



  return (
    <div className="leaderboard">
      <h1 className='title'>Leaderboard</h1>
      {
        apiData.map((charity: any, index: number) => {
          <LeaderboardCard key={index} name={charity.name} description={charity.description} score={charity.score} placement={charity.placement} />
        })
      }
      {
      /* {leaderboardData.map((charity, index) => (
        <LeaderboardCard key={index} name={charity.name} description={charity.description} score={charity.score} placement={charity.placement} />
      ))} */}
      {/* {data && <LeaderboardCard data={data} />} */}
      {
        
      }      
    </div>
  );
};
export default Leaderboard;
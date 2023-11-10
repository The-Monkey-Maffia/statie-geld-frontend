import { useEffect, useState } from 'react';
import LeaderboardCard from './LeaderboardCard';
import axios from 'axios';

const Leaderboard = () => {

  const [apiData, setData] = useState<[{aantal_votes: number, id: number, info: string, link: string, name: string}]>()
  useEffect(() => {

    axios.get('http://localhost:3000/get/goededoel/')
    .then((response) => {
      setData(response.data.data)
    })

  }, [])



  return (
    <div className="leaderboard">
      <h1 className='title'>Leaderboard</h1>
      {
        apiData?.map((charity: {aantal_votes: number, id: number, info: string, link: string, name: string}, index: number) => {
          return (
            <LeaderboardCard key={index} name={charity.name} description={charity.info} score={charity.aantal_votes} placement={index += 1} />
          )
        })
      }
    </div>
  );
};
export default Leaderboard;
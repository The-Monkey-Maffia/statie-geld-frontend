import { useEffect, useState } from 'react';
import '../index.css';
import LeaderboardCard from './LeaderboardCard';
import axios from 'axios';
import { css } from '@emotion/css'

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
      <div className={styles.leaderboardWrapper}>
        {
          apiData?.map((charity: {aantal_votes: number, id: number, info: string, link: string, money_donated?: number, name: string}, index: number) => {
            return (
              <LeaderboardCard key={index} name={charity.name} description={charity.info} placement={index += 1} link={charity.link} money_donated={charity.money_donated} />
            )
          })
        }
      </div>
    </div>
  );
};

const styles = {
  'leaderboardWrapper': css`
    overflow-x:hidden;
    overflow-y:auto;
    height:85vh;
  `
}
export default Leaderboard;
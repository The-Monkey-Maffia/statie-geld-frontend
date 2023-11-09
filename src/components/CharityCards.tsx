import { css } from '@emotion/css'
import axios from "axios";

interface LeaderboardCardProps {
  photo: string;
  name: string;
}

const CharityCards: React.FC<LeaderboardCardProps> = ({ photo }, {name}) => {
  const handleButtonClick = (Vote_Name: string) => {
    return () => {
      const storedValue = localStorage.getItem('STATS_UUID');
      const data = {
        hardware_id: storedValue, 
        Vote_name: Vote_Name 
      };
  
      // Making a POST request to the specified endpoint
      axios.post('http://127.0.0.1:3000/post/vote/', data)
        .then(response => {
          console.log('Response from the server:', response.data);
          localStorage.setItem('STATS_UUID', response.data.uuid);
          console.log(localStorage.getItem("STATS_UUID"))
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };
  
  };

  return (
    <button className={styles['leaderboard-card']} onClick={handleButtonClick(name)}>
      <img className={styles['charity-logo']} src={photo} alt="Charity Logo" />
    </button>
  );
};
const styles = {
  'leaderboard-card': css`
  background-color: #9BBEC8;
  height: 45%;
  width: 45%;
  display: grid;
  justify-content: center;
  box-shadow:  -.15rem .15rem 0 #164863;
  border: none;
  padding: 15px 32px;
  display: inline-block;
  flex-direction: row;
  margin: 5px;
  border-radius: 12px;
  &:active {
    background-color: #164863;
  }
  `,
  
  'charity-logo': css`
  height: 5rem;
  width: 5rem;
  object-fit: cover;
  background-position: center;
  border-radius: 100vw;
  box-shadow: -.15rem .15rem .25rem #164863;`,

  'title': css `
  font-size: 3rem;
  display: inline;
  color: white;
  text-shadow: .1rem .1rem 0 #164863;`
}

export default CharityCards
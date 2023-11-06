import { css } from '@emotion/css'
import '../App.css'

interface LeaderboardCardProps {
  photo: string;
}

const CharityCards: React.FC<LeaderboardCardProps> = ({ photo }) => {
  const handleButtonClick = () => {
    // Add the functionality you want when the button is clicked here
    console.log('Button clicked');
    // You can add more logic here, e.g., navigation or other actions
  };

  return (
    <button className={styles['leaderboard-card']} onClick={handleButtonClick}>
      <img className={styles['charity-logo']} src={photo} alt="Charity Logo" />
    </button>
  );
};
const styles = {
  'leaderboard-card': css`
  background-color: #9BBEC8;
  box-shadow:  -.15rem .15rem 0 #164863;
  border: none;
  padding: 15px 32px;
  display: inline-block;
  flex-direction: row;
  margin-left: 10px;
  border-radius: 12px;
  &:active {
    background-color: #164863;
  }
  `,
  
  'charity-logo': css`
  height: 10rem;
  width: 10rem;
  border-radius: 100vw;
  margin-right: .5rem;
  box-shadow: .1rem .1rem .25rem rgb(190, 190, 190);`,
}

export default CharityCards
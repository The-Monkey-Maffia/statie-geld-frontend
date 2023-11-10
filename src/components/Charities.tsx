import '../App.css';
import { css } from '@emotion/css'
import CharityCards from './CharityCards';

const Leaderboard = () => {
  const leaderboardData = [
    { photo: "https://shaolin-vechtkunst.nl/wp-content/uploads/2016/03/kika-logo.jpg", name: "kika" },
    { photo: "https://www.copman.be/project/wp-content/uploads/WWF-226x300-1.jpg", name: "WWF" },
    { photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGKagyXMMuaWyBHeN3iGlOvOOF1c7EVE3ziQ&usqp=CAU", name: "test" },
    { photo: "https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg", name: "monke" }
  ];

  const styles = {
    'voting': css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: rgb(22,72,99);
    background: linear-gradient(358deg, rgba(22,72,99,1) 0%, rgba(66,125,157,1) 55%, rgba(155,190,200,1) 100%);
    box-shadow:  -.15rem .15rem 0 #164863;
    padding: .5rem;
    border-radius: .5rem;`,

    'title': css`
    font-size: 3rem;
    display: block;
    color: white;
    margin: 0 0 0 1rem;
    text-shadow: .1rem .1rem 0 #164863;
    width: 20rem;`
    
  }

  

  return (
    <>
      <div className={styles['voting']}>
      <h1 className={styles['title']}>Vote</h1>
      {leaderboardData.map((player, index) => (
      <CharityCards key={index} photo={player.photo} name={player.name} />
      ))}
      </div>
      
      </>
  );
};
export default Leaderboard;
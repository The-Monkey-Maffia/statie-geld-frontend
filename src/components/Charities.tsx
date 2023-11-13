import '../index.css';
import { css } from '@emotion/css'
import CharityCards from './CharityCards';

const Charities = () => {
  const CharityData = [
    { photo: "https://shaolin-vechtkunst.nl/wp-content/uploads/2016/03/kika-logo.jpg", name: "kika" },
    { photo: "https://www.copman.be/project/wp-content/uploads/WWF-226x300-1.jpg", name: "WWF" },
    { photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGKagyXMMuaWyBHeN3iGlOvOOF1c7EVE3ziQ&usqp=CAU", name: "test" },
    { photo: "https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg", name: "monke" }
  ];

  const styles = {
    'card': css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #164863;
    box-shadow:  -.15rem .15rem 0 #082535;
    padding: .5rem;
    border-radius: .5rem;`,

    'title': css`
    font-size: 3rem;
    display: block;
    color: white;
    margin: 0 0 0 1rem;
    text-shadow: .1rem .1rem 0 #082535;
    width: 20rem;`,

    'charities': css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;`,
  }

  return (
    <>
      <div className={styles['card']}>
      <h1 className={styles['title']}>Vote</h1>
        <div className={styles['charities']}>
          {CharityData.map((player, index) => (
            <CharityCards key={index} photo={player.photo} name={player.name} />
          ))}
        </div>
      </div>
      
      </>
  );
};
export default Charities;
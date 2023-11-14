import '../index.css';
import { css } from '@emotion/css'
import CharityCards from './CharityCards';
import axios from 'axios';
import { useEffect, useState } from 'react';


const getCharityData = async () => {
  const requestData = await axios.get('http://localhost:3000/get/goededoel')
  return requestData
}
const Charities = () => {
  const [charities, setCharities] = useState<[{aantal_votes: number, id: number, info: string, link: string, name: string}]>()

  useEffect(() => {
    const fetchData = async () => {
      const charityData = getCharityData()
      Promise.resolve(charityData).then((results) => {
        setCharities(results.data.data)
      })
    }
    fetchData()
  }, [])

  return (
    <>
      <div className={styles['card']}>
      <h1 className={styles['title']}>Vote</h1>
        <div className={styles['charities']}>
          {charities?.map((player, index) => (
            <CharityCards key={index} photo={player.link} name={player.name} />
          ))}
        </div>
      </div>
      </>
  );
};


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

export default Charities;


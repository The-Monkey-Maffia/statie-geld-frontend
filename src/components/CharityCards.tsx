import React from 'react';
import { css } from '@emotion/css'
import Swal from 'sweetalert2';
import axios from 'axios';

interface CharityCardProps {
  photo: string;
  name: string;
}

const CharityCards: React.FC<CharityCardProps> = ({ photo, name }) => {
  const handleButtonClick = (Vote_Name: string) => {
    return () => {
      Swal.fire({
        title: 'Stemmen voor ' + Vote_Name + '?',
        text: 'Weet u zeker dat u voor "' + Vote_Name + '" wilt stemmen?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ja, stem voor ' + Vote_Name + '!',
        cancelButtonText: 'Terug',
      }).then((result) => {
        if (result.isConfirmed) {
          const storedValue = localStorage.getItem('STATS_UUID');
          const data = {
            hardware_id: storedValue, 
            Vote_name: Vote_Name 
          };
          
        axios.post('http://127.0.0.1:3000/post/vote/', data)
          .then(response => {
            console.log('Response from the server:', response.data);
            localStorage.setItem('STATS_UUID', response.data.uuid);
            console.log(localStorage.getItem('STATS_UUID'));
            Swal.fire({
              title: 'Stem gehoord!',
              text: 'U heeft gestemd voor ' + Vote_Name + '.',
              icon: 'success'
            }).then(() => {
              document.location.href='http://localhost:5173';
            });
          })
          .catch(error => {
            console.error('Error:', error);
            Swal.fire({
              title: 'Error',
              text: 'U heeft al gestemd voor vandaag, probeer morgen weer',
              icon: 'error'
            }).then(() => {
              document.location.href='http://localhost:5173';
            });
          });
        }
      });
    };
  };

  return (
    <button className={styles['charity-card']} onClick={handleButtonClick(name)}>
      <img className={styles['charity-logo']} src={photo} alt="Charity Logo" />
    </button>
  );
};
const styles = {
  'charity-card': css`
  background-color: #9BBEC8;
  height: 45%;
  width: 45%;
  display: grid;
  justify-content: center;
  cursor: pointer;
  box-shadow:  -.15rem .15rem 0 #082535;
  border: none;
  padding: 15px 32px;
  display: inline-block;
  flex-direction: row;
  margin: 5px;
  border-radius: 12px;
  transition: .1s ease;
  &:active {
    background-color: #cae4eb;
    transform: scale(1.05);
  }
  `,
  'charity-logo': css`
  height: 5rem;
  width: 5rem;
  object-fit: cover;
  background-position: center;
  border-radius: 100vw;
  box-shadow: -.15rem .15rem .25rem #082535;`,

  'title': css `
  font-size: 3rem;
  display: inline;
  color: white;
  text-shadow: .1rem .1rem 0 #082535;`
}

export default CharityCards
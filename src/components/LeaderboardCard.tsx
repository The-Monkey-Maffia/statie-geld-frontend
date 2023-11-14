import { css } from '@emotion/css'
import '../index.css';

interface LeaderboardCardProps {
    name: string;
    description: string;
    score: number;
    placement: number;
  }
  
  const LeaderboardCard: React.FC<LeaderboardCardProps> = ({ name, score, description, placement }) => {
    return (
      <div className={styles['leaderboard-card']}>
        <div className={styles['left-info']}>
          {/* <img className={styles['charity-logo']} src=''/> */}
          <div className={styles['charity-info']}>
            <div>
              <p className={styles['charity-name']}>{name}</p>
            </div>
            <div>
              <p className={styles['charity-description']}>{description}</p>
            </div>
          </div>
        </div>
  
        <div className={styles['right-info']}>
          <div>
          <p className={styles.placement}>#{placement}</p> {/* Hier wordt de plaatsing weergegeven */}
          </div>
          <div className={styles["votes"]}>
            {score} {/* Hier wordt de score weergegeven */}
          </div>
        </div>
      </div>
    );
  };


const styles = {
    'leaderboard-card': css`
    height: 5rem;
    background-color: #9BBEC8;
    box-shadow:  -.15rem .15rem 0 #164863;
    border-bottom: 1px solid #164863;
    border-radius: .5rem;
    display: flex;
    justify-content: start;
    padding: .25rem;
    margin-bottom: .5rem;
    height: 100%;
    user-select: none;`,

    'left-info': css`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 70%;`,

    'charity-logo': css`
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 100vw;
    margin-right: 7.5%;
    box-shadow: .1rem .1rem .25rem #164863;`,

    'charity-info': css`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;`,

    'charity-name': css`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    font-size: 2rem;
    text-shadow: -.1rem .1rem 0 #082535;
    margin: 0;
    font-weight: 900;`,

    'charity-description': css`
    font-weight: 100;
    font-size: 1rem;
    margin: 0;
    text-shadow: -.1rem .1rem 0 #082535;
    display: flex;
    justify-content: start;`,

    'right-info': css`
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: end;
    align-items: center;`,

    'placement': css`
    font-weight: 900;
    font-size: 3rem;
    text-shadow: -.1rem .1rem 0 #082535;
    margin: 0;`,

    'votes': css`
    font-weight: 400;
    font-size: 1rem;
    text-shadow: -.1rem .1rem 0 #082535;
    margin: 0;`,
}

export default LeaderboardCard

// purple
// dark:#DFCCFB medium: light:
// 1:#164863 2:#427D9D 3:#9BBEC8 4:#DDF2FD
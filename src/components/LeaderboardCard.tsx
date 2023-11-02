import { css } from '@emotion/css'
import '../App.css'

const LeaderboardCard = () => {
    return(
    <div className={styles['leaderboard-card']}>
        <div className={styles['left-info']}>
            <img className={styles['charity-logo']} src=''/>
            <div className={styles['charity-info']}>
            <div>
                <p className={styles['charity-name']}>AAA batterijen</p>
            </div>
            <div>
                <p className={styles['charity-description']}>Goede doel, AAAAAAAAAAAAAAAAAA</p>
            </div>
            </div>
        </div>

        <div className={styles['right-info']}>
            <div>
            <p className={styles.placement}>#2</p>
            </div>
            <div className="votes">
            5.121 votes
            </div>
        </div>
    </div>
    )
}
const styles = {
    'leaderboard-card': css`
    height: 5rem;
    background-color: #DFCCFB;
    box-shadow:  .15rem .15rem 0 #BEADFA;
    border-radius: .5rem;
    display: flex;
    justify-content: space-between;
    padding: .25rem;
    margin-bottom: .5rem;
    height: 100%;`,

    'left-info': css`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 70%;`,

    'charity-logo': css`
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 100vw;
    margin-right: .5rem;
    box-shadow: .1rem .1rem .25rem rgb(190, 190, 190);`,

    'charity-info': css`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;`,

    'charity-name': css`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;`,

    'charity-description': css`
    font-weight: 100;
    font-size: 1rem;
    margin: 0;
    display: flex;
    justify-content: start;`,

    'right-info': css`
    height: 100%;
    width: 25%;
    display: flex;
    justify-content: end;
    align-items: center;`,

    'placement': css`
    font-weight: 900;
    font-size: 3rem;
    margin: 0;`,

    'votes': css`
    font-weight: 400;
    font-size: 1rem;
    transform: translateY(-.5rem);
    margin: 0;`,
}

export default LeaderboardCard
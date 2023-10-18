import '../App.css'

const LeaderboardCard = () => {
    return(
    <div className="leaderboard-card">
        <div className="left-info">
            <img className="charity-logo" src=''/>
            <div className="charity-info">
            <div className="charity-name">
                <p>AAA batterijen</p>
            </div>
            <div className="charity-description hidden">
                <p>Goede doel, AAAAAAAAAAAAAAAAAA</p>
            </div>
            </div>
        </div>

        <div className="right-info">
            <div className="placement">
            <p>#2</p>
            </div>
            <div className="votes">
            5.121 votes
            </div>
        </div>
    </div>
    )
}

export default LeaderboardCard
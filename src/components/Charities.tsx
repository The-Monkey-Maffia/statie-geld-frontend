import '../App.css';
import CharityCards from './CharityCards';

const Leaderboard = () => {
  const leaderboardData = [
    { photo: "https://shaolin-vechtkunst.nl/wp-content/uploads/2016/03/kika-logo.jpg" },
    { photo: "https://www.copman.be/project/wp-content/uploads/WWF-226x300-1.jpg" },
    { photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGKagyXMMuaWyBHeN3iGlOvOOF1c7EVE3ziQ&usqp=CAU" },
    { photo: "https://media.discordapp.net/attachments/951432745605795841/1170796123913470022/EUtm70sU0AIVfiS.png?ex=655a57dc&is=6547e2dc&hm=4ba43292b53952798a35293144c68333194c193dda3acba910549067b07f50eb&=&width=483&height=515" }
  ];

  return (
    <div className="leaderboard">
    {leaderboardData.map((player, index) => (
    <CharityCards key={index} photo={player.photo} />
    ))}
    </div>
  );
};
export default Leaderboard;
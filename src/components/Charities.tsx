import '../App.css';
import CharityCards from './CharityCards';

const Leaderboard = () => {
  const leaderboardData = [
    { photo: "https://shaolin-vechtkunst.nl/wp-content/uploads/2016/03/kika-logo.jpg" },
    { photo: "https://www.copman.be/project/wp-content/uploads/WWF-226x300-1.jpg" },
    { photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGKagyXMMuaWyBHeN3iGlOvOOF1c7EVE3ziQ&usqp=CAU" },
    { photo: "https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg" }
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
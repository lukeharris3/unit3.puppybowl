import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPlayers } from "../API";

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getPlayers = async () => {
      const players = await fetchPlayers();
      setPlayers(players);
    };
    getPlayers();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h1>All Players</h1>
      <button onClick={() => navigate("/new-player")}>Add New Player</button>
      <input
        type="text"
        placeholder="Search for a player"
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />
      <div>
        {filteredPlayers.map((player) => (
          <div key={player.id} className="player-card">
            <h4>{player.name}</h4>
            <p>{player.breed}</p>
            {player.imageUrl && <img src={player.imageUrl} alt={player.name} />}
            <button onClick={() => navigate(`/players/${player.id}`)}>
              View Player
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPlayers;
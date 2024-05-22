import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPlayerById, deletePlayer } from "../API";

function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getPlayer = async () => {
      const player = await fetchPlayerById(id);
      setPlayer(player);
    };
    getPlayer();
  }, [id]);

  const handleDelete = async () => {
    await deletePlayer(id);
    navigate("/");
  };

  if (!player) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="player-card">
        <h1>{player.name}</h1>
        <p>Breed: {player.breed}</p>
        <p>Status: {player.status}</p>
        {player.imageUrl && <img src={player.imageUrl} alt={player.name} />}
        <button onClick={handleDelete}>Delete Player</button>
      </div>
    </div>
  );
}

export default SinglePlayer;
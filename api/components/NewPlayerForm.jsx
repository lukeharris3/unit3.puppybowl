import { useState } from "react";
import { createPlayer } from "../API";

function NewPlayerForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("bench");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPlayer = {
      name,
      breed,
      status,
      imageUrl,
    };
    const createdPlayer = await createPlayer(newPlayer);
    console.log("Player created:", createdPlayer);

    setName("");
    setBreed("");
    setStatus("bench");
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create New Player</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Breed:</label>
        <input
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="bench">Bench</option>
          <option value="field">Field</option>
        </select>
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <button type="submit">Create Player</button>
    </form>
  );
}

export default NewPlayerForm;
export const fetchPlayers = async () => {
  const response = await fetch(
    "https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players"
  );
  const data = await response.json();
  return data.data.players;
};

export const fetchPlayerById = async (id) => {
  const response = await fetch(
    `https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players/${id}`
  );
  const data = await response.json();
  return data.data.player;
};

export const createPlayer = async (player) => {
  const response = await fetch(
    "https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(player),
    }
  );
  const data = await response.json();
  return data.data.player;
};

export const deletePlayer = async (id) => {
  await fetch(
    `https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players/${id}`,
    {
      method: "DELETE",
    }
  );
};


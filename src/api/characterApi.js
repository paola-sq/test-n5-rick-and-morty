export const getCharacters = async () => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character`
  );

  return res.json();
};
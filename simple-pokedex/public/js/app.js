"use strict";
const containerApp = document.getElementById("app");
const pokemon = 100;
const fetchData = () => {
  for (let i = 1; i <= pokemon; i++) {
    getPokemon(i);
  }
};
// Fetch data from Pokemon API
const getPokemon = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemonData = await res.json();
  const pokemonType = pokemonData.types
    .map((pData) => pData.type.name)
    .join(", ");
  const transformedPokemon = {
    id: pokemonData.id,
    name: pokemonData.name,
    image: pokemonData.sprites.front_default,
    type: pokemonType,
  };
  displayPokemon(transformedPokemon);
};
// Display Pokemen
const displayPokemon = (pokemon) => {
  const output = `
    <div class="card">
        <span class="card__id">#${pokemon.id}</span>
        <img
            class="card__image"
            src="${pokemon.image}"
            alt="Pokemon Image"
        />
        <p class="card__name">${pokemon.name}</p>
        <p class="card__type">${pokemon.type}</p>
    </div>
  `;
  containerApp.insertAdjacentHTML("beforeend", output);
};
fetchData();

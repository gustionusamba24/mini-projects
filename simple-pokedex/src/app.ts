const containerApp: HTMLElement = document.getElementById("app") as HTMLElement;
const pokemon: number = 100;

interface IPokemon {
  id: number;
  name: string;
  image: string;
  type: string;
}

const fetchData = () => {
  for (let i = 1; i <= pokemon; i++) {
    getPokemon(i);
  }
};

// Fetch data from Pokemon API
const getPokemon = async (id: number): Promise<void> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemonData = await res.json();
  const pokemonType = pokemonData.types
    .map((pData: any) => pData.type.name)
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
const displayPokemon = (pokemon: IPokemon): void => {
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

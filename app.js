const pokemonName = document.getElementById('pokemon-name');
const pokemonHeight = document.getElementById('pokemon-height');
const pokemonFrontImg= document.getElementById('pokemon-img-front');
const pokemonNumber = document.getElementById(`pokemon-number`);
const pokemonWeight = document.getElementById(`pokemon-weight`);
const pokemonAbilities = document.getElementById(`pokemon-abilities`);
//pokemonName.innerText = 'El nombre de mi pokemon es: ';

const pokemonApiUrl = 'https://pokeapi.co/api/v2/';

let getPokemonData = async ()=> {
    const respose = await fetch(`${pokemonApiUrl}pokemon/151`);
    const pokemon = await respose.json();
    console.log(pokemon);
    const {name, height, abilities} = pokemon;
    const frontImg = pokemon.sprites.front_default;

    abilities.forEach(element => {
        pokemonAbilities.innerHTML = `<li>${element.name}<li>`;
    });

    pokemonName.innerText = name;
    pokemonFrontImg.src = frontImg;
    pokemonNumber.innerText = `Numero en la pokedex: ${pokemon.id}`;
    pokemonHeight.innerText = `La altura es: ${height}`;
    pokemonWeight.innerText = `El peso es de: ${pokemon.weight}`;
}

getPokemonData();
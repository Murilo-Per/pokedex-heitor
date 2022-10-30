const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fechPokemon = async (pokemon)  => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIresponse.status == 200) {
        const data =  await APIresponse.json();
        console.log(APIresponse)
        return data;
    }
}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'carregando ...';

    const data = await fechPokemon(pokemon);

    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value= '';
        }else {    
            pokemonImage.style.display = 'none';
            pokemonName.innerHTML = 'nao encontrado';
            pokemonNumber.innerHTML = '';

        }
}



form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener('click', () => {
   alert('prev clicked');
});

buttonNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
}); 

renderPokemon(searchPokemon);
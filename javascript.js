//Definimos las constantes del link de la PokeAPI y los elementos del HTML
const pokeapi = 'https://pokeapi.co/api/v2/pokemon/';
const btnSearch = document.getElementById('btnSearch');
const inputSearch = document.getElementById('inputSearch');
const pokemonList = document.getElementById('pokemonList');

btnSearch.addEventListener('click', () => {
const pokemonName = inputSearch.value.toLowerCase().trim(); //toLowerCase() para las mayúsculas y trim() para eliminar espacios

//Realizamos el fetch a la api + el nombre del pokémon en concreto que hayamos ingresado en el campo de texto
fetch(pokeapi + pokemonName)
.then(res => res.json())
.then(data => {
                const pokemonEntry = `<img src="${data.sprites.front_default}" style="width: 100px; height: 100px; margin: 5px;">`;
                pokemonList.innerHTML += pokemonEntry; })
.catch(error => { alert("No se encontró dicho Pokémon"); });
});
let button = document.querySelector("#searchButton")
let infoButton = document.querySelector("#infoButton")
let pokemonName = document.querySelector("#pokemonName")
let pokemonImage1 = document.querySelector("#pokemonImage1")
let pokemonImage2 = document.querySelector("#pokemonImage2")
let stat1 = document.querySelector("#stat1")
let value1 = document.querySelector("#value1")
let stat2 = document.querySelector("#stat2")
let value2 = document.querySelector("#value2")
let stat3 = document.querySelector("#stat3")
let value3 = document.querySelector("#value3")

button.addEventListener('click', async ()=> {
  let input = document.querySelector("#inputBar").value
  if (input == ``) { input = Math.ceil(Math.random()*200) }

    let response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${input}`
    )
    console.log(response)

    let pokemonPic1 = response.data.sprites.other.showdown.front_default
    let pokemonPic2 = response.data.sprites.other.showdown.back_default
    pokemonImage1.setAttribute ('src', pokemonPic1)
    pokemonImage2.setAttribute ('src', pokemonPic2)
    
    let pokemonType = response.data.species.name
    pokemonName.innerText = pokemonType

    value1.innerText = response.data.moves[0].move.name
    value2.innerText = response.data.moves[1].move.name
    // value3.innerText = response.data.abilities[0].ability.name

    spinPikachu.classList.add('spin-animation');
    
    // Remove the class after the animation ends (optional)
    setTimeout(() => {
      spinPikachu.classList.remove('spin-animation');
    }, 1000); // Adjust the duration of the animation
})

infoButton.addEventListener('click',openTab)
  
function openTab() {
  window.open("https://faithfulmoms.org/is-pokemon-safe-children-christian-perspective/", "_blank");
  }
let button = document.querySelector("#searchButton")
let pokemonName = document.querySelector("#pokemonName")
let pokemonImage = document.querySelector("#pokemonImage")

button.addEventListener('click', async () => {
    let input = document.querySelector("#inputBar").value
    console.log(input)
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
    console.log(response.data.species.name)
    let pokemonPic = response.data.sprites.back_default
    let pokemonType = pokemonName
    pokemonImage.setAttribute('src', pokemonPic)
    pokemonName.innerText = response.data.species.name
  })

//code from earlier

// const getBreeds = async () => {
//   const dogBreeds  = await axios.get('https://dog.ceo/api/breeds/list/all')
//   console.log(dogBreeds.data.message)
//   }

// getBreeds()



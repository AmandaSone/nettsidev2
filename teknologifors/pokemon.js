async function search() {
    const name = document.getElementById("name").value.toLowerCase(); 
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name); 

    if (!response.ok) {
        document.getElementById("pokemon").innerHTML = `<h2>404 - Pokémon not found!</h2>`; 
        return;
    }
    
    const data = await response.json(); 
    
    document.getElementById("pokemon").innerHTML = ` 
        <h2>${data.name}</h2> 
        <img src="${data.sprites.front_default}">
        <p>Høyde: ${data.height}</p> 
        <p>Vekt: ${data.weight}</p>
    `; 
}

async function random() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 100) + 1);
    
    if (!response.ok) {
        document.getElementById("pokemon").innerHTML = `<h2>404 - Pokémon not found!</h2>`; 
        return;
    }

    const data = await response.json();

    document.getElementById("pokemon").innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}">
        <p>Høyde: ${data.height}</p> 
        <p>Vekt: ${data.weight}</p>
    `;
}
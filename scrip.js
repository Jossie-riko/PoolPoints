document.addEventListener("DOMContentLoaded", () => {
  const createBtn = document.getElementById("createBtn");
  createBtn.addEventListener("click", createPlayers);
});

let players = [];

function createPlayers() {
  const num = parseInt(document.getElementById("numPlayers").value);
  const container = document.getElementById("players");
  container.innerHTML = "";
  players = [];

  if (isNaN(num) || num < 1 || num > 10) {
    alert("Por favor ingresa un número válido entre 1 y 10.");
    return;
  }

  for (let i = 0; i < num; i++) {
    players.push({ name: `Jugador ${i+1}`, score: 0 });

    const div = document.createElement("div");
    div.className = "player";
    div.innerHTML = `
      <h2 id="title${i}">Jugador ${i+1}</h2>
      <label>Nombre: </label>
      <input type="text" id="name${i}" value="Jugador ${i+1}" onchange="updateName(${i})"><br>
      <label>Puntos: </label>
      <input type="number" id="points${i}" min="1" max="10">
      <button onclick="addPoints(${i})">Agregar</button>
      <p>Total: <span id="total${i}">0</span></p>
    `;
    container.appendChild(div);
  }
}

function updateName(index) {
  const newName = document.getElementById(`name${index}`).value;
  players[index].name = newName;
  document.getElementById(`title${index}`).textContent = newName;
}

function addPoints(index) {
  const points = parseInt(document.getElementById(`points${index}`).value);
  if (!isNaN(points)) {
    players[index].score += points;
    document.getElementById(`total${index}`).textContent = players[index].score;
    document.getElementById(`points${index}`).value = "";
  }
}

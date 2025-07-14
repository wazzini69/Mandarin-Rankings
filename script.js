const mandarins = [
  {
    name: "Satsuma",
    sweetness: 9,
    juiciness: 8,
    aroma: 7,
    taste: 9,
  },
  {
    name: "Honey Murcott",
    sweetness: 10,
    juiciness: 9,
    aroma: 8,
    taste: 10,
  },
  {
    name: "Imperial",
    sweetness: 7,
    juiciness: 6,
    aroma: 6,
    taste: 7,
  }
];

function calculateScore(m) {
  return m.sweetness + m.juiciness + m.aroma + m.taste * 2;
}

function populateTable() {
  const tbody = document.getElementById("table-body");
  mandarins.forEach(m => {
    const score = calculateScore(m);
    const row = `
      <tr>
        <td>${m.name}</td>
        <td>${score}</td>
        <td>${m.sweetness}</td>
        <td>${m.juiciness}</td>
        <td>${m.aroma}</td>
        <td>${m.taste}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

function showTopMandarins() {
  const topList = document.getElementById("top-list");
  const top = mandarins.filter(m => calculateScore(m) >= 40);
  top.forEach(m => {
    const item = document.createElement("li");
    item.textContent = `${m.name} (${calculateScore(m)})`;
    topList.appendChild(item);
  });
}

populateTable();
showTopMandarins();

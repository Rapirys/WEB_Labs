class Refrigerator {
  constructor(color, brand, model, price) {
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

}

let refrigerators = [
  new Refrigerator("White", "Samsung", "XYZ123", 1000),
  new Refrigerator("Silver", "LG", "ABC456", 1200),
  new Refrigerator("Black", "Whirlpool", "DEF789", 800),
  new Refrigerator("Stainless Steel", "KitchenAid", "GHI012", 1500),
];

function updateRow(refrigerator, row) {
  row.innerHTML = `
        <td>${refrigerator.color}</td>
        <td>${refrigerator.brand}</td>
        <td>${refrigerator.model}</td>
        <td>${refrigerator.price}</td>
    `;
}

function updateRefrigeratorList() {
  const tableBody = document.querySelector(".table tbody");
  tableBody.innerHTML = "";

  refrigerators.forEach((refrigerator) => {
    const row = document.createElement("tr");
    updateRow(refrigerator, row);
    tableBody.appendChild(row);
  });
}

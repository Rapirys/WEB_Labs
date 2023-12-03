const country_list = document.getElementById("country_list");

function addCountry(event) {
  if (event.key === "Enter") {
    const countryName = event.target.value;
    country_list.textContent =
      country_list.textContent.slice(0, -1) + ", " + countryName + ".";
  }
}

const cells = document.querySelectorAll("#table-lab-3 td");
const cellInput = document.getElementById("cellInput");
cellInput.style.display = "none";
let currentCell;

cells.forEach((cell) => {
  cell.addEventListener("click", showInput);
});

function showInput(event) {
  const clickedCell = event.target;
  cellInput.value = clickedCell.textContent.trim();
  cellInput.style.display = "block";
  currentCell = clickedCell;
}

document.addEventListener("click", hideInput);

function hideInput(event) {
  const tableLab3 = document.getElementById("table-lab-3");

  // Check if "table-lab-3" exists
  if (!tableLab3) {
    return;
  }

  const isClickInsideTable = tableLab3.contains(event.target);
  const isInput = event.target === cellInput;

  if (!isClickInsideTable && !isInput) {
    cellInput.style.display = "none";
  }
}


function addTextToCell(event) {
  if (event.key === "Enter") {
    currentCell.textContent = cellInput.value;
    cellInput.style.display = "none";
  }
}
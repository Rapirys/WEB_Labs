const button = document.getElementById("hoverButton");
const textElement = document.getElementById("displayText");

button.addEventListener("mouseover", function () {
  textElement.textContent = "Мишка над кнопкою.";
});

button.addEventListener("mouseout", function () {
  textElement.textContent = "!!!!! !!! !!!!!!!.";
});

function checkCourse() {
  const groupInput = document.getElementById("group").value;
  const courseInput = document.getElementById("course").value;
  const surnameInput = document.getElementById("surname").value;
  const resultBox = document.getElementById("result");

  const groupRegex = /^\D+-\d+$/;

  if (!groupRegex.test(groupInput)) {
    resultBox.textContent =
      "Попередження: неправильний формат групи. Використовуйте такий формат, як КН-23.";
  } else {
    const firstDigit = groupInput.charAt(groupInput.indexOf("-") + 1);

    if (firstDigit !== courseInput) {
      resultBox.textContent =
        "Попередження: номер групи не відповідає вказаному курсу.;";
    } else {
      resultBox.textContent = `Прізвище студента: ${surnameInput}`;
    }
  }
}

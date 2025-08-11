const multiplication = [];

for (let i = 2; i <= 12; i++) {
  const container = { container: [] };
  for (let j = 1; j <= 10; j++) {
    container.container.push({
      multiply: `${i} x ${j}`,
      answer: String(i * j), // Calculate and assign answer as string
    });
  }
  multiplication.push(container);
}

const multiplicationContainer = document.querySelector(
  "#multiplication-container"
);

multiplication.forEach((containers) => {
  const card = document.createElement("div");
  card.classList.add("card");
  multiplicationContainer.appendChild(card);

  containers.container.forEach((item) => {
    const row = document.createElement("div");
    row.classList.add("row-wrapper");

    const number = document.createElement("span");
    number.textContent = item.multiply;
    number.classList.add("number");

    const equal = document.createElement("span");
    equal.textContent = "=";

    const input = document.createElement("input");
    input.type = "text";
    input.setAttribute("arial-label", `Answer for ${item.multiply}`);

    row.append(number, equal, input);

    card.appendChild(row);
  });
});
document.getElementById("checkAnswers").addEventListener("click", () => {
  const allInputs = document.querySelectorAll(
    "#multiplication-container input"
  );

  let inputIndex = 0;
  multiplication.forEach((table) => {
    table.container.forEach((item) => {
      const currentInput = allInputs[inputIndex];
      const trimmedValue = currentInput.value.trim();
      if (trimmedValue === item.answer) {
        currentInput.classList.add("correct-answer");
        currentInput.classList.remove("incorrect-answer");
      } else if (trimmedValue === "" || trimmedValue !== item.answer) {
        currentInput.classList.add("incorrect-answer");
        currentInput.classList.remove("correct-answer");
      }
      inputIndex++;
    });
  });
});

document.querySelector("#reset").addEventListener("click", () => {
  const allInputs = document.querySelectorAll(
    "#multiplication-container input"
  );
  allInputs.forEach((input) => {
    (input.value = ""),
      input.classList.remove("correct-answer", "incorrect-answer");
  });
  if (allInputs.length > 0) {
    allInputs[0].focus();
  }
});

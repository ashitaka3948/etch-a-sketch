let chosenLength = 16;

const container = document.querySelector("#container");

drawGrid(chosenLength);

const button = document.querySelector("button");
button.addEventListener("click", () => setLength());

function setLength() {
  const userInput = prompt("Enter the length of the grid:");
  if (userInput > 100) {
    alert("The length cannot exceed 100.");
  } else if (userInput < 1) {
    alert("The length cannot be less than 1");
  } else {
    chosenLength = userInput;
    clearGrid();
    drawGrid(chosenLength);
  }
}

function drawGrid(length) {

  for (let i = 0; i < length; i++) {
    const horizontalDiv = document.createElement("div");
    horizontalDiv.className = "horizontal";
    container.appendChild(horizontalDiv);

    for (let x = 0; x < length; x++) {
      const verticalDiv = document.createElement("div");
      verticalDiv.className = "vertical";
      horizontalDiv.appendChild(verticalDiv);
    }
  }

  const pixels = document.querySelectorAll(".vertical");
  pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', function(event) {
      event.target.style.backgroundColor = "red";
    });
  });
}

function clearGrid() {
  container.innerHTML = "";
}
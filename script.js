const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
  const horizontalDiv = document.createElement("div");
  horizontalDiv.className = "horizontal";
  container.appendChild(horizontalDiv);

  for (let x = 0; x < 16; x++) {
    const verticalDiv = document.createElement("div");
    verticalDiv.className = "vertical";
    horizontalDiv.appendChild(verticalDiv);
  }

}


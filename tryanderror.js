const getSurroundingNode = (node) => {
  const currentNode = strToDigit(node);

  let result = [];

  const up = [currentNode[0] - 1, currentNode[1]];
  const down = [currentNode[0] + 1, currentNode[1]];
  const right = [currentNode[0], currentNode[1] + 1];
  const left = [currentNode[0], currentNode[1] - 1];

  let neighbours = [up, down, right, left];

  // checking if the neighbour node is wall or currentNode node
  for (let i = 0; i < neighbours.length; i++) {
    let element = document.getElementById(digitToStr(neighbours[i]));

    if (element !== null) {
      if (element.className === "unvisited") {
        // [opened node, origin]
        result.push([digitToStr(neighbours[i]), node]);
        element.classList.remove("unvisited");
        element.classList.add("unvisited-picked");
      }
      if (element.className === "end") {
        result.push([digitToStr(neighbours[i]), node]);
      }
    } else {
      break;
    }
  }

  return result;
};

// changing class name into two digit
const strToDigit = (str) => {
  let coordinate = [];
  str.split("-").forEach((num) => {
    coordinate.push(parseFloat(num));
  });

  return coordinate;
};

const digitToStr = (array) => {
  return `${array[0]}-${array[1]}`;
};

// A start
function Astart() {
  let openList = [];

  let closedList = [];
}

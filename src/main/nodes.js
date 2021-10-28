// the stating node and the ending node can depends on the window size

const startingNodePosition = document.getElementById("10-10");
const endingNodePosition = document.getElementById("10-40");

// changing the colour and the class
// starting
const startNode = document.createElement("div");
startNode.style.backgroundColor = "blue";
startNode.style.width = "20px";
startNode.style.height = "20px";
startNode.classList.add("start");
startNode.setAttribute("draggable", true);
startingNodePosition.classList.remove("unvisited");
startingNodePosition.classList.add("start");
startingNodePosition.appendChild(startNode);

// ending
const endNode = document.createElement("div");
endNode.style.backgroundColor = "red";
endNode.style.width = "20px";
endNode.style.height = "20px";
endNode.classList.add("end");
endNode.setAttribute("draggable", true);
endingNodePosition.classList.remove("unvisited");
endingNodePosition.classList.add("end");
endingNodePosition.appendChild(endNode);

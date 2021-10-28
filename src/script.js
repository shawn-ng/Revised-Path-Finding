// button
const start_btn = document.getElementById("start-button");
const restart_btn = document.getElementById("restart-button");
const algorithmChoice = document.getElementById("select-option");

// function to handle start button
const handleStart = (event) => {
  console.log(algorithmChoice.value);
  if (algorithmChoice.value === "Dijkstra's") {
    runDijkstra();
  } else if (algorithmChoice.value === "A Star") {
    console.log("g");
    runAStar();
  }
};

// function to handle restart button
const handleRestart = () => {
  window.location.reload();
};

// Dijkstra
const runDijkstra = async () => {
  const start = document.querySelector(".start");
  const end = document.querySelector(".end");
  const graph = new WeightedGraph();
  // construct a graph for the Dijkstra algorithm
  graphConstructor(start.id, graph, end);

  // visulaizing
  for (let i = 0; i < visitedPath.length; i++) {
    const visitedNode = document.getElementById(visitedPath[i]);
    await sleep(50);
    visitedNode.classList.add("yellowy");
  }

  // executing the path
  let path = graph.Dijkstra(start.id, end.id);

  for (let i = 1; i < path.length - 1; i++) {
    let get = document.getElementById(path[i]);
    await sleep(100);
    get.style.backgroundColor = "green";
  }
};

const runAStar = async () => {
  const start = document.querySelector(".start");
  const end = document.querySelector(".end");
  const graph = new WeightedGraph();

  // construct a graph for the AStar algorithm
  graphConstructorAStar(start.id, graph, end);

  // executing the path
  let path = graph.AStar(start.id, end.id);

  // visulaizing
  for (let i = 0; i < Astarvisitedlist.length; i++) {
    const visitedNode = document.getElementById(Astarvisitedlist[i]);
    await sleep(50);
    visitedNode.classList.add("yellowy");
  }

  for (let i = 1; i < path.length - 1; i++) {
    let get = document.getElementById(path[i]);
    await sleep(100);
    get.style.backgroundColor = "green";
  }
};

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

start_btn.addEventListener("click", handleStart);
restart_btn.addEventListener("click", handleRestart);

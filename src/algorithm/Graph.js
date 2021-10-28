let visitedPath = [];
const graphConstructor = async (id, graph, end) => {
  // adding starting index to the vertex
  graph.addVertex(String(id));
  let neighbours = [...getSurroundingNode(id)];

  let currentNode, previousNode, newNeighbours;
  let found = false;

  while (found === false) {
    currentNode = neighbours[0][0];
    previousNode = neighbours[0][1];

    // check if current node is ending node
    if (currentNode === end.id) found = true;

    // adding vertex and edge
    graph.addVertex(currentNode);
    graph.addEdge(currentNode, previousNode, 10);

    // changing the class name
    let element = document.getElementById(currentNode);
    element.classList.remove("unvisited-picked");
    element.classList.add("visited");
    visitedPath.push(currentNode);

    // neighbours of the new node
    newNeighbours = getSurroundingNode(currentNode);

    // adding new neighbours node
    neighbours = neighbours.concat(newNeighbours);

    // removing the first item in the list
    neighbours.shift();
  }

  return graph;
};

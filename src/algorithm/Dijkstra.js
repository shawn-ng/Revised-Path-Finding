Astarvisitedlist = [];
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    let first_vertex = this.adjacencyList[vertex1];
    let second_vertex = this.adjacencyList[vertex2];

    first_vertex.push({ node: vertex2, weight });
    second_vertex.push({ node: vertex1, weight });
  }

  Dijkstra(start, end) {
    // this is to remove node and add node easier
    const nodes = new PriorityQueue();

    // the distance from the origin node (shortest possible)
    const distances = {};

    //  this is to store the where the node come from
    const previous = {};

    // this is the result that we want
    let path = [];

    // this is the smallest node
    let smallest;

    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex == start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // visiting node
    while (nodes.values.length) {
      smallest = nodes.dequeue().value;

      if (smallest === end) {
        // WE ARE DONE
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbour in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbour];

          // calculate new distance to neighbouring node
          let candidate = distances[smallest] + nextNode.weight;

          if (candidate < distances[nextNode.node]) {
            // updating new smallest distance to neighbour
            distances[nextNode.node] = candidate;
            // updating previous - How we got to the neighbour
            previous[nextNode.node] = smallest;
            // enquee in priority queue with new priority
            nodes.enqueue(nextNode.node, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }

  AStar(start, end) {
    // this is to remove node and add node easier

    const nodes = new PriorityQueue();

    // the distance from the origin node (shortest possible)
    const distances = {};

    //  this is to store the where the node come from
    const previous = {};

    // this is the result that we want
    let path = [];

    // this is the smallest node
    let smallest;

    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex == start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // visiting node
    while (nodes.values.length) {
      smallest = nodes.dequeue().value;
      if (smallest === end) {
        // WE ARE DONE

        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      let smallestNode = document.getElementById(`${smallest}`);
      smallestNode.classList.remove("unvisited-picked");
      smallestNode.classList.add("visited");
      Astarvisitedlist.push(smallest);

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbour in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbour];

          // h cost
          let candidate = this.heuristic(end, nextNode.node);

          if (candidate < distances[nextNode.node]) {
            // updating new smallest distance to neighbour
            distances[nextNode.node] = candidate;
            // updating previous - How we got to the neighbour
            previous[nextNode.node] = smallest;
            // enquee in priority queue with new priority
            nodes.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }

  heuristic = (pos1, pos2) => {
    let point1 = strToDigit(pos1);
    let point2 = strToDigit(pos2);
    let result =
      Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);

    return result;
  };
}

class Node {
  constructor(value, priority, g) {
    this.value = value;
    this.priority = priority;
    this.g = g;
  }
}

class PriorityQueue {
  constructor() {
    this.values = []; // just an example
  }

  enqueue(value, priority, g = null) {
    let newNode = new Node(value, priority, g);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element.priority < parent.priority) {
        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        // this condition to make sure we do correct swpa with the largest number
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}
// let g = new WeightedGraph();
// let graph = graphConstructorAStar("10-10", g, "10-40");

// console.log(g.AStar("10-10", "10-40"));
// console.log(Astarvisitedlist);
// for (let i = 0; i < Astarvisitedlist.length; i++) {
//   let gg = document.getElementById(`${Astarvisitedlist[i]}`);
//   gg.style.backgroundColor = "yellow";
// }

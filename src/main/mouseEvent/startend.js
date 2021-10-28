let dragItem;
let dragItemParent;
const Drag = (event) => {};

const DragStart = (event) => {
  dragItem = event.target;
  dragItemParent = document.querySelector(`.${dragItem.className}`);
  dragItem.style.opacity = 0.1;
};

const DragEnd = () => {
  dragItem.style.opacity = 1;
};

const DragOver = (event) => {
  event.preventDefault();
};

const DragEnter = (event) => {
  // STYLE ANIMATION
};

const DragLeave = (event) => {};

const Drop = (event) => {
  let dropZone = event.target;
  if (
    dropZone.className === "unvisited" ||
    dropZone.className === "visited" ||
    dropZone.className === "wall"
  ) {
    dropZone.classList.remove("unvisited");
    dropZone.classList.add(`${dragItemParent.className}`);
    dragItem.classList.add("boxOver");
    dragItemParent.classList.remove(`${dragItemParent.className}`);
    dragItemParent.classList.add("unvisited");
    dropZone.appendChild(dragItem);
  }
};

document.addEventListener("drag", Drag, false);
document.addEventListener("dragstart", DragStart, false);
document.addEventListener("dragend", DragEnd, false);
document.addEventListener("dragover", DragOver, false);
document.addEventListener("dragenter", DragEnter, false);
document.addEventListener("dragleave", DragLeave, false);
document.addEventListener("drop", Drop, false);

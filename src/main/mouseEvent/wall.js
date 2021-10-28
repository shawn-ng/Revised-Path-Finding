// creating wall by clicking

const handleClick = (event) => {
  if (event.target.className === "unvisited") {
    event.target.classList.remove("unvisited");
    event.target.classList.add("wall");
    event.target.style.backgroundColor = "#001030";
  } else if (event.target.className === "wall") {
    event.target.classList.remove("wall");
    event.target.classList.add("unvisited");
    event.target.removeAttribute("style");
  }
};

document.addEventListener("click", handleClick);

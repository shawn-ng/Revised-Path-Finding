// creating wall by clicking

const handleClick = (event) => {
  if (event.target.className === "unvisited") {
    event.target.classList.remove("unvisited");
    event.target.classList.add("wall");
    event.target.style.backgroundColor = "#001030";
  }
};

document.addEventListener("click", handleClick);

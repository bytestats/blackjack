window.onload = () => {
  const hidden_div = document.getElementById("hidden");
  const test = document.getElementById("testing");

  hidden_div.addEventListener("click", () => {
    console.log(hidden_div);
    hidden_div.src = "assets/images/cards/spades/ace.png";
    hidden_div.id = "revealed";
    hidden_div.removeEventListener("click", this);
  });
};

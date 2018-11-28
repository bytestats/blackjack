window.onload = () => {
  const hidden_div = document.getElementById("hidden");
  const aceCard = document.querySelector(".aceBtn");
  const test = document.getElementById("testing");

  hidden_div.addEventListener("click", () => {
    aceCard.classList.add("aceTransition");
    aceCard.classList.remove("aceBtn");
    hidden_div.id = "revealed";
  });
};

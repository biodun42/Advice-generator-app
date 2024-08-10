const dice = document.getElementById("dice");
const card = document.getElementById("card");
async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data);
    document.getElementById("advice-id").innerHTML = data.slip.id;
    document.getElementById("advice-content").innerHTML = data.slip.advice;
  } catch (error) {
    console.error(error);
  }
}
dice.addEventListener("click", () => {
  dice.setAttribute("clicked", "");
  dice.parentElement.classList.add("glow");
  setTimeout(() => {
    getAdvice();
    dice.removeAttribute("clicked");
    dice.parentElement.classList.remove("glow");
  }, 1300);
});

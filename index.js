window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const button = document.querySelector(`.button[data-key="${e.code}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  button.classList.add("playing");
});

function removeTransition(e) {
  // if (e.propertName !== "transform") return;
  this.classList.remove("playing");
}

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) =>
  button.addEventListener("transitionend", removeTransition)
);

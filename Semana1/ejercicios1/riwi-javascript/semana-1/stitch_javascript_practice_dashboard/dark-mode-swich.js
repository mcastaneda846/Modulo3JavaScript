document.addEventListener("DOMContentLoaded", () => {
  const switchInput = document.querySelector("#dark_mode_swich input");
  const card = document.getElementById("localThemeCard");

  if (!switchInput || !card) return;

  switchInput.addEventListener("change", () => {
    card.classList.toggle("dark", switchInput.checked);
  });
});

function validarAge() {
  const age = document.getElementById("age").value;
  const acceso = document.getElementById("acceso");

  acceso.classList.remove("hidden");

  if (age >= 18) {
    acceso.textContent = "Access Granted";

    acceso.classList.remove("bg-red-100", "text-red-800", "border-red-200");
    acceso.classList.add("bg-green-100", "text-green-800", "border-green-200");
  } else {
    acceso.textContent = "Access Denied";

    acceso.classList.remove(
      "bg-green-100",
      "text-green-800",
      "border-green-200"
    );
    acceso.classList.add("bg-red-100", "text-red-800", "border-red-200");
  }
}

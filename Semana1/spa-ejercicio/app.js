// Código eficiente

/*function navBar() {
  return `
  <nav>
    <a href="#/home">Home</a>
    <a href="#/services">Servicios</a>
    <a href="#/contact">Contacto</a>
  </nav>`;
}*/

// Código no eficiente:
const app = document.getElementById("app");

function renderHome() {
  app.innerHTML = "<h1>Home</h1><p>Bienvenido a nuestro SPA</p>";
}

function renderservices() {
  app.innerHTML = "<h1>Services</h1><p>Fronted con JS</p>";
}

function renderContact() {
  app.innerHTML = "<h1>Contacto</h1><p>clan@hamilton.dev</p>";
}

function rendernotFound() {
  app.innerHTML = "<h1>404</h1><p>Página no encontrada</p>";
}

let counter = 0;

function renderCounter() {
  app.innerHTML = `<h1>Contador</h1>
  <p>${counter}</p>
  <button id="rest">-</button>
  <button id="add">+</button>`;

  document.getElementById("rest").onclick = () => {
    counter--;
    renderCounter();
  };

  document.getElementById("add").onclick = () => {
    counter++;
    renderCounter();
  };
}

document.getElementById("home").addEventListener("click", renderHome);
document.getElementById("services").addEventListener("click", renderservices);
document.getElementById("contact").addEventListener("click", renderContact);

renderHome();

function router() {
  const route = location.hash;

  switch (route) {
    case "#/home":
      renderHome();
      break;
    case "#/services":
      renderservices();
      break;
    case "#/contact":
      renderContact();
      break;
    case "#/counter":
      renderCounter();
      break;
    default:
      renderHome;
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);

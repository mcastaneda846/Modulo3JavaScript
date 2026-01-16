document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");
  const pendingCount = document.getElementById("pendingCount");

  function updatePending() {
    //función que se encarga de contar tareas pendientes
    const pending = taskList.querySelectorAll(".task:not(.done)").length; // Busca todas las tareas .task, Que NO tengan la clase .done,Cuenta cuántas hay .length devuelve la cantidad.
    pendingCount.textContent = `${pending} Pending`; //Actualiza el texto del contador,
  }

  addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim(); // Obtiene lo que escribió el usuario y trim() elimina espacios al inicio y al final
    if (!text) return; // Si el input está vacío no hace nada

    const task = document.createElement("div"); //Crea un nuevo <div> usando JavaScript.
    task.className = //Asigna todas las clases necesarias: Styles.
      "task flex items-center justify-between p-3 rounded-lg border border-[#f0f2f4] dark:border-gray-700 bg-white dark:bg-[#101922]";

    task.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="check size-5 rounded border border-gray-300 dark:border-gray-600 flex items-center justify-center cursor-pointer"></div>
        <span class="text-sm text-[#111418] dark:text-gray-200">${text}</span>
      </div>
      <button class="delete text-gray-400 hover:text-red-500">
        <span class="material-symbols-outlined text-[20px]">delete</span>
      </button>
    `; // innerHtml Inserta el HTML interno de la tarea: checkbox, texto, etc.

    taskList.prepend(task); //Agrega la tarea al inicio de la lista. si quiero que quede al final pongo appenchild.
    taskInput.value = ""; //Limpia el input después de agregar la tarea.
    updatePending(); //Actualiza el contador de tareas pendientes.
  });

  taskList.addEventListener("click", (e) => {
    //Escucha cualquier click dentro del contenedor.
    const task = e.target.closest(".task"); // detecta cuál tarea fué clickeada y closest() sube en el HTML hasta encontrar .task
    if (!task) return;

    // COMPLETAR TAREA
    if (e.target.closest(".check")) {
      //Verifica si el click fue en el checkbox.
      task.classList.toggle("done"); // cambia el estado de la tarea, si tiene done la agg sino la quita

      const text = task.querySelector("span.text-sm"); // selecionar una task específica.
      const box = task.querySelector(".check");

      if (task.classList.contains("done")) {
        box.classList.add("bg-primary", "border-primary"); //Cambia el checkbox a azul
        box.innerHTML = `
          <span class="material-symbols-outlined text-white text-[16px]">check</span>
        `; // muestra el icono de check
        text.classList.add("line-through", "text-gray-400"); // tacha el texto
      } else {
        //Revierte todo a su estado original ( si la tarea no esta lista)
        box.classList.remove("bg-primary", "border-primary");
        box.innerHTML = "";
        text.classList.remove("line-through", "text-gray-400");
      }
    }

    // ELIMINAR TAREA
    if (e.target.closest(".delete")) {
      //Detecta click en el botón delete
      task.remove();
    }

    updatePending();
  });
});

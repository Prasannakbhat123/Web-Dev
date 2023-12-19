document.addEventListener("DOMContentLoaded", () => {
  const icon = document.getElementById("icon");

  icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      icon.src = "moon.png";
      localStorage.setItem("theme", "dark");
    } else {
      icon.src = "sun.png";
      localStorage.setItem("theme", "light");
    }
  });

  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
    icon.src = "moon.png";
  } else {
    document.body.classList.remove("dark-theme");
    icon.src = "sun.png";
  }

  const searchBar = document.forms["search"].querySelector("input");
  searchBar.addEventListener("keyup", function (e) {
    const term = e.target.value.toLowerCase();
    const tasks = document.querySelectorAll(".task");

    tasks.forEach((task) => {
      const title = task.querySelector(".text").value.toLowerCase();
      if (title.includes(term)) {
        task.style.display = "flex";
      } else {
        task.style.display = "none";
      }
    });
  });

  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const renderTasks = () => {
    list_el.innerHTML = "";
    tasks.forEach((task) => {
      const storedPriority = localStorage.getItem(`priority_${task}`);

      const task_el = document.createElement("div");
      task_el.classList.add("task");

      const task_input_el = document.createElement("input");
      task_input_el.classList.add("text");
      task_input_el.type = "text";
      task_input_el.value = task;
      task_input_el.setAttribute("readonly", "readonly");
      task_el.appendChild(task_input_el);

      const task_actions_el = document.createElement("div");
      task_actions_el.classList.add("actions");

      const task_edit_el = document.createElement("button");
      task_edit_el.classList.add("edit");
      task_edit_el.innerText = "Edit";

      const task_delete_el = document.createElement("button");
      task_delete_el.classList.add("delete");
      task_delete_el.innerText = "Delete";
      task_actions_el.appendChild(task_edit_el);
      task_actions_el.appendChild(task_delete_el);
      task_el.appendChild(task_actions_el);

      const dropdown = document.createElement("div");
      dropdown.classList.add("dropdown");
      const select = document.createElement("div");
      select.classList.add("select");
      const selected = document.createElement("span");
      selected.classList.add("selected");
      selected.innerText = "Priority";
      const caret = document.createElement("div");
      caret.classList.add("caret");
      const menu = document.createElement("ul");
      menu.classList.add("menu");
      const priorities = ["Urgent", "By today", "Chill"];
      priorities.forEach((priority) => {
        const listItem = document.createElement("li");
        listItem.innerText = priority;
        menu.appendChild(listItem);
      });
      select.appendChild(selected);
      select.appendChild(caret);
      dropdown.appendChild(select);
      dropdown.appendChild(menu);
      task_actions_el.appendChild(dropdown);

      task_input_el.classList.add("formatted-text");

      list_el.appendChild(task_el);

      const dropdownSelect = dropdown.querySelector(".select");
      const dropdownMenu = dropdown.querySelector(".menu");
      const dropdownOptions = dropdown.querySelectorAll(".menu li");
      const dropdownSelected = dropdown.querySelector(".selected");

      dropdownSelect.addEventListener("click", () => {
        dropdownMenu.classList.toggle("menu-open");
      });

      dropdownOptions.forEach((option) => {
        option.addEventListener("click", () => {
          dropdownSelected.innerText = option.innerText;
          dropdownMenu.classList.remove("menu-open");

          localStorage.setItem(`priority_${task}`, option.innerText);
        });

        if (option.innerText === storedPriority) {
          dropdownSelected.innerText = storedPriority;
        }
      });

      task_edit_el.addEventListener("click", () => {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
      });

      task_input_el.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          task_input_el.setAttribute("readonly", "readonly");
          const updatedTask = task_input_el.value;
          tasks[tasks.indexOf(task)] = updatedTask;
          localStorage.setItem("tasks", JSON.stringify(tasks));
        }
      });

      task_delete_el.addEventListener("click", () => {
        task_el.remove();
        tasks = tasks.filter((t) => t !== task_input_el.value);
        localStorage.setItem("tasks", JSON.stringify(tasks));
      });
    });
  };

  renderTasks();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value;
    if (task.trim() !== "") {
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
      input.value = "";
    }
  });
});

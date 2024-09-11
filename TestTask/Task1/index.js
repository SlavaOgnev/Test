const btn = document.querySelector(".listOn");
const catalog = document.querySelector(".catalog");
let collumn = false;

btn.addEventListener("click", function () {
  if (collumn) {
    catalog.classList.remove("listView");
    collumn = false;
  } else {
    catalog.classList.add("listView");
    collumn = true;
  }
});

//реализуем запрос на добавление

const btnDowland = document.querySelector(".dowlandMore");

btnDowland.addEventListener("click", dowlanding);

function dowlanding() {
  fetch("newItems.json") //имитация запроса, заменить на URl
    .then((response) => response.json()) //распарсим
    .then((data) => creatingItem(data))
    .catch((error) =>
      console.log(`Произошла ошибка при загрузке данных: ${error}`)
    );
}

function creatingItem(data) {
  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.textContent = item.name;
    catalog.appendChild(div);
  });
}

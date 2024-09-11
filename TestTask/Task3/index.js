function setPlusIcon() {
  const listItems = document.querySelectorAll("li");

  listItems.forEach((list) => {
    // Найдем вложенные списки <ul> или <ol>
    const nestedList = list.querySelector("ul, ol");

    // Проверка на вложенность
    if (nestedList) {
      list.insertAdjacentHTML("afterbegin", "[+] ");
      nestedList.style.display = "none";
    }

    const links = list.querySelectorAll("a");

    // Регистрация функции aClick в качестве обработчика события onclick для всех ссылок
    links.forEach((link) => {
      link.addEventListener("click", aClick);
    });
  });
}

function aClick(event) {
  const clickLink = event.currentTarget;

  //  родитель <li>
  const linkParent = clickLink.closest("li");

  if (linkParent) {
    // Найдем вложенный список <ul> или <ol>
    const nestedList = linkParent.querySelector("ul, ol");

    // Если списка нет, разрешаем переход по ссылке
    if (!nestedList) return;

    // Если список есть, меняем его видимость и значок
    if (nestedList.style.display === "none" || !nestedList.style.display) {
      nestedList.style.display = "block";
      linkParent.firstChild.textContent = "[-] ";
    } else {
      nestedList.style.display = "none";
      linkParent.firstChild.textContent = "[+] ";
    }

    event.preventDefault();
  }
}

document.addEventListener("DOMContentLoaded", setPlusIcon);

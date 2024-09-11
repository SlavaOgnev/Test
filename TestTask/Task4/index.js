const form = document.querySelector("#myForm");
const btnBack = document.querySelector("button");
const arrayState = [];

//функция для запминания состояния формы
function savingState() {
  const formData = new FormData(form);
  const state = {};
  formData.forEach((value, key) => {
    state[key] = value;
  });
  arrayState.push(state);
}

//последнее состояние
function backState() {
  if (arrayState.length === 0) return;

  const lastState = arrayState.pop();

  Object.keys(lastState).forEach((key) => {
    const input = form.elements[key];
    if (input) input.value = lastState[key];
  });
}
window.addEventListener("load", () => {
  savingState(); // Сохраняем начальное состояние формы
});

//вешаем обрабочик событий
form.addEventListener("input", savingState);
btnBack.addEventListener("click", backState);

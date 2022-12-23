const ButtonTag = document.querySelector(".button");
const ParentTag = document.querySelector(".parent");
const containerTag = document.querySelector(".container");

ButtonTag.addEventListener("click", () => {
  ParentTag.innerHTML = "";
  containerTag.classList.add("darkmood");
  const DivTag = document.createElement("div");
  DivTag.classList.add("mery");
  ParentTag.append(DivTag);
  DivTag.append(`You are turning night Mood`);
  DivTag.style.bottom = `-${DivTag.offsetHeight}px`;

  setTimeout(() => {
    DivTag.style.bottom = `0px`;
  }, 100);
  setTimeout(() => {
    DivTag.style.bottom = `-${DivTag.offsetHeight}px`;
  }, 2000);
});

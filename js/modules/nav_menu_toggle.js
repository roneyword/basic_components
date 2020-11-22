
import toast from '../modules/toast.js'

export default function navMenu() {
  const btnToggle = document.querySelector(".header--toogle-btn");
  const navMenu = document.querySelector("nav");

  btnToggle.addEventListener("click", () => {
    toast("error","Erro no campo","campo vazio",100000);
    btnToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

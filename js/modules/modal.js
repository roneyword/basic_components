export default function modal() {
  const btnOpenModal = document.querySelectorAll("[data-effect]");
  const btnCloseModal = document.querySelectorAll(".modal--close");
  const modalContainer = document.querySelectorAll(".modal-container");
  const body = document.querySelector("body");

  const openModal = (event) => {
    event.preventDefault();
    closeModalBtnFooter();
    const dataAtribute = event.target.getAttribute("data-effect");
    const dataTarget = event.target.getAttribute("data-target");

    modalContainer.forEach((modal) => {
      if (modal.id == dataTarget) modal.classList.add(dataAtribute);
    });

    body.classList.add("hidden");
  };

  const closeModal = (event) => {
    event.preventDefault();
    const modalTarget = event.target.closest(".modal-container");
    modalTarget.className = "modal-container";
    body.classList.remove("hidden");
  };

  const closeModalBtnFooter = () => {
    const btnFooter = document.querySelectorAll(".modal--footer");

    btnFooter.forEach((btn) => {
      btn.addEventListener("click", closeModal);
    });
  };

  btnOpenModal.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  btnCloseModal.forEach((btn) => {
    btn.addEventListener("click", closeModal);
  });
}

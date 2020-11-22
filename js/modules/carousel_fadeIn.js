import img from "../../assets/img/img_carousel/*.jpg";

export default function carouselFadeIn() {
  const btnPrev = document.querySelector(".carousel--controler--prev");
  const btnNext = document.querySelector(".carousel--controler--next");
  let itensImg = document.querySelectorAll(
    ".carousel--container .carousel--item"
  );
  const indicator = document.querySelector(".carousel--indicator");
  let imgIndex = 0;

  const init = () => {
    itensImg.forEach((item, index) => {
      if (index == 0) {
        item.classList.add("active");
      }
      item.style.backgroundImage = `url(${img[index + 1]})`;
    });
  };

  const createElementIndicators = () => {
    for (let index = 0; index < itensImg.length; index++) {
      const elSpan = document.createElement("span");

      if (index == 0) {
        elSpan.classList.add("active");
      }
      indicator.appendChild(elSpan);
    }
  };

  const indicatorsControls = () => {
    const indicatorItens = document.querySelectorAll(
      ".carousel--indicator span"
    );

    indicatorItens.forEach((item) => item.classList.remove("active"));
    indicatorItens[imgIndex].classList.add("active");
  };

  const nextImage = () => {
    itensImg[imgIndex].classList.remove("active");
    imgIndex++;
    if (imgIndex >= itensImg.length) imgIndex = 0;
    itensImg[imgIndex].classList.add("active");
  };

  const prevImage = () => {
    itensImg[imgIndex].classList.remove("active");
    if (imgIndex <= 0) imgIndex = itensImg.length;
    imgIndex--;
    itensImg[imgIndex].classList.add("active");
  };

  const timerNextImage = () => {
    setInterval(() => {
      btnNext.click();
    }, 5000);
  };

  btnNext.addEventListener("click", () => {
    nextImage();
    indicatorsControls();
  });

  btnPrev.addEventListener("click", () => {
    prevImage();
    indicatorsControls();
  });

  init();
  createElementIndicators();
  // timerNextImage();
}

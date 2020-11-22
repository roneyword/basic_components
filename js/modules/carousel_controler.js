import img from "../../assets/img/img_carousel/*.jpg";

export default function carousel() {
  const btnPrev = document.querySelector(".carousel--controler--prev");
  const btnNext = document.querySelector(".carousel--controler--next");
  const containerCarousel = document.querySelector(".carousel--container");
  let itensImg = document.querySelectorAll(
    ".carousel--container .carousel--item"
  );
  const indicator = document.querySelector(".carousel--indicator");

  const init = () => {
    itensImg.forEach((item, index) => {
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

  const nextImage = () => {
    const { firstItemImg } = updateData();
    containerCarousel.appendChild(firstItemImg);
    itensImg = document.querySelectorAll(
      ".carousel--container .carousel--item"
    );
  };

  const prevImage = () => {
    const { lastItemImg, firstItemImg } = updateData();

    containerCarousel.insertBefore(lastItemImg, firstItemImg);
    itensImg = document.querySelectorAll(
      ".carousel--container .carousel--item"
    );
  };

  const indicators = (next) => {
    const indicatorItemActive = document.querySelector(
      ".carousel--indicator span.active"
    );
    const indicatorItens = document.querySelectorAll(
      ".carousel--indicator span"
    );

    if (next) {
      if (indicatorItemActive.nextSibling) {
        indicatorItemActive.nextElementSibling.classList.add("active");
        indicatorItemActive.classList.remove("active");
      } else {
        indicatorItemActive.classList.remove("active");
        indicatorItens[0].classList.add("active");
      }
    } else {
      if (indicatorItemActive.previousSibling) {
        indicatorItemActive.previousElementSibling.classList.add("active");
        indicatorItemActive.classList.remove("active");
      } else {
        indicatorItemActive.classList.remove("active");
        indicatorItens[indicatorItens.length - 1].classList.add("active");
      }
    }
  };

  const timerNextImage = () => {
    setInterval(() => {
      btnNext.click();
    }, 5000);
  };

  const updateData = () => {
    const lastItemImg = itensImg[itensImg.length - 1];
    const firstItemImg = itensImg[0];
    return { lastItemImg, firstItemImg };
  };

  init();

  createElementIndicators();

  // timerNextImage();

  btnNext.addEventListener("click", () => {
    nextImage();
    indicators("next");
  });

  btnPrev.addEventListener("click", () => {
    prevImage();
    indicators("");
  });
}

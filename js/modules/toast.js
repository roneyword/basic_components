export default function toast(
  type = "success",
  title = "sucesso",
  text = "Parabens",
  time = 7000
) {
  const icons = {
    success: '<i class="fas fa-check-circle"></i>',
    warning: '<i class="fas fa-exclamation-triangle"></i>',
    error: '<i class="fas fa-exclamation-circle"></i>',
    info: '<i class="fas fa-info-circle"></i>',
  };

  const findIcon = (att) => {
    for (const icon in icons) {
      if (icon == att) {
        return icons[icon];
      }
    }
  };

  const createElements = () => {
    const toastContainer = document.createElement("div");
    const toastIcon = document.createElement("div");
    const toastMsg = document.createElement("div");
    const span = document.createElement("span");
    const titleH3 = document.createElement("h3");
    const txt = document.createElement("p");

    return { toastContainer, toastIcon, toastMsg, span, titleH3, txt };
  };

  const {
    toastContainer,
    toastIcon,
    toastMsg,
    span,
    titleH3,
    txt,
  } = createElements();

  const setClassElements = () => {
    toastContainer.setAttribute("class", `toast-container ${type}`);
    toastIcon.setAttribute("class", "toast--icon");
    toastMsg.setAttribute("class", "toast--msg");
    setElementsChild();
  };

  const setElementsChild = () => {
    toastContainer.appendChild(toastIcon);
    toastContainer.appendChild(toastMsg);
    toastContainer.appendChild(span);
    toastMsg.appendChild(titleH3);
    toastMsg.appendChild(txt);
    document.body.appendChild(toastContainer);
  };

  const setTextElements = () => {
    const icon = findIcon(type);
    titleH3.innerText = title;
    txt.innerText = text;
    toastIcon.innerHTML = icon;
  };

  const destroyToast = () => {
    const timerEnd = document.querySelector(".toast-container span");

    const animate = timerEnd.animate(
      [{ width: "0%" }, { width: "100%" }],
      time
    );

    animate.addEventListener("finish", function () {
      document.querySelector(".toast-container").remove();
    });
  };

  setClassElements();
  setTextElements();

  destroyToast();
}

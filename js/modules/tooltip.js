export default function tooltip() {
  const tooltip = document.querySelectorAll("[data-tooltip]");

  tooltip.forEach((item) => {
    item.addEventListener("mouseenter", (event) => {
      const typeTooltip = event.target.getAttribute("data-tooltip");
      const contentTooltip = event.target.getAttribute("data-tooltip-text");
      const targetoffsetTop = event.target.offsetTop;
      const getBoundingPositions = event.target.getBoundingClientRect();
      const positionsTarget = {
        left: getBoundingPositions.left,
        width: getBoundingPositions.width,
        height: getBoundingPositions.height,
        top: getBoundingPositions.top,
      };

      const createElement = document.createElement("div");
      createElement.setAttribute("class", `tooltip active ${typeTooltip}`);
      createElement.innerText = contentTooltip;

      if (typeTooltip == "up") {
        tooltipUp(targetoffsetTop, positionsTarget, createElement);
      }

      if (typeTooltip == "right") {
        tooltipRight(targetoffsetTop, positionsTarget, createElement);
      }

      insertElementBeforeTarget(event, createElement);
    });

    item.addEventListener("mouseleave", (event) => {
      event.target.nextSibling.remove();
    });
  });

  const insertElementBeforeTarget = (event, element) => {
    event.target.parentNode.insertBefore(element, event.target.nextSibling);
  };

  const tooltipUp = (
    elementoffsetTopTarget,
    elementPositionTarget,
    elementCreate
  ) => {
    const positionTopTarget = Math.round(elementoffsetTopTarget - 10);
    const positionCenter = Math.round(
      elementPositionTarget.left + elementPositionTarget.width / 2
    );
    elementCreate.style.transform = `translate(calc(${positionCenter}px - 50%), calc(${positionTopTarget}px - 100%))`;
  };

  const tooltipRight = (
    elementoffsetTopTarget,
    elementPositionTarget,
    elementCreate
  ) => {
    const positionTopTarget = Math.round(
      elementoffsetTopTarget + elementPositionTarget.height / 2
    );
    const positionCenter = Math.round(
      elementPositionTarget.left + elementPositionTarget.width + 10
    );

    elementCreate.style.transform = `translate(calc(${positionCenter}px), calc(${positionTopTarget}px - 50%))`;
  };
}

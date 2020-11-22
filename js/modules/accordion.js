export default function accordion(){

  const accordionList = document.querySelectorAll('.accordion .accordion--item');
  const accordionCollapse = document.querySelectorAll('.accordion--collapse');

  accordionList.forEach((item, index) => {
    item.addEventListener('click', () => {

     const isActive = checkContainsActive(item);

     if(isActive) removeHeightAndActive(index, item);

      item.classList.add('active')
    });
  });

  const checkContainsActive = (targetItem) => {
    const result = targetItem.className.includes('active') ? true : false;
    return result;
  }

  const removeHeightAndActive = (targetCollapse, targetItem) => {
    const accordionElement = accordionCollapse[targetCollapse];
    const heightItem = accordionElement.getBoundingClientRect().height;

    const animate = accordionElement.animate(
      [{ height: `${heightItem}px` }, { height: "0px" }],
      200
    );

    animate.addEventListener("finish", function () {
      targetItem.classList.remove('active');
    });

    return
  }

}
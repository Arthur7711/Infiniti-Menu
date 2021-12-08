document.querySelector(".root-nav").addEventListener("click", (event) => {
  console.log(event.target.nextElementSibling);
  if (event.target.nodeName !== "SPAN") return;
  closeAllSubMenu(event.target.nextElementSibling);
  event.target.classList.add("sub-menu-active-span");
  event.target.nextElementSibling.classList.toggle("sub-menu-active");
});
function closeAllSubMenu(current = null) {
  let parents = [];
  if (current) {
    let currentParent = current.parentNode;
    while (currentParent) {
      if (currentParent.nodeName === "UL") parents.push(currentParent);
      currentParent = currentParent.parentNode;
    }
  }

  const subMenu = document.querySelectorAll(".root-nav ul");
  Array.from(subMenu).forEach((item) => {
    if (item != current && !parents.includes(item)) {
      item.classList.remove("sub-menu-active");
      if (item.previousElementSibling.nodeName === "SPAN") {
        item.previousElementSibling.classList.remove("sub-menu-active-span");
      }
    }
  });
}

// sticky navbar-script
const navbarContainerTag = document.querySelector(".navbar-container");
// console.log(navbarContainerTag);

const navbarContainerOffsetTop = navbarContainerTag.offsetTop;
console.log("navbarContainerOffsetTop:", navbarContainerOffsetTop);

window.addEventListener("scroll", () => {
  // console.log(
  //   "window.pageYOffset:",
  //   window.pageYOffset,
  //   "navbarContainerTag.offsetTop:",
  //   navbarContainerTag.offsetTop
  // );
  console.log(navbarContainerOffsetTop, navbarContainerTag.offsetTop);
  if (window.pageYOffset > navbarContainerOffsetTop) {
    // console.log("sticky...");
    navbarContainerTag.classList.add("sticky");
  } else {
    navbarContainerTag.classList.remove("sticky");
  }
});

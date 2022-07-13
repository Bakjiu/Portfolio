"use strict";

// Make navbar transparent when it is on the top
// 보통 좋은 코드는 읽으면 이해가 되기 때문에, 코드 자체를 설명할 필요는 없지만 전반적으로 이것이 무엇을 하는지 comment를 달아두면 좋음
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  console.log(`navbar height: ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

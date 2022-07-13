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

  // Handle scrollint when tapping on the navbar menu
  const navbarMenu = document.querySelector(".navbar__menu");

  navbarMenu.addEventListener("click", (e) => {
    const target = e.target;
    const link = target.dataset.link;
    if (link == null) {
      return;
    } else {
      console.log(link);
      const scrollTo = document.querySelector(link);
      scrollTo.scrollIntoView({ behavior: "smooth" });
    }
  });
});

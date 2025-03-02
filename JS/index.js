const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const page = document.querySelector(".page");

/*Mobile */
menuBtn.addEventListener("click", () => {
  const isHidden = mobileMenu.classList.contains("hidden");
  if (isHidden) {
    mobileMenu.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
  }
});

/*Mobile */
//Routes

import routes from "../module/route.service.js";
import functionService from "../module/function.service.js";
import { notFound } from "../pages/notFound.js";

const handleRouteChange = () => {
  const path = window.location.hash.replace("#", "") || "/";
  page.innerHTML = routes[path] || notFound;
  if (path === "/register") {
    functionService.registerFunc();
  } else if (path === "/login") {
    functionService.loginFunc();
  } else if (path === "/") {
    functionService.homeFunc();
  }
};

window.onhashchange = () => {
  handleRouteChange();
};

handleRouteChange();
//Routes

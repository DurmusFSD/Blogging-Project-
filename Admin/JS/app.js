let userInfo = sessionStorage.getItem("userInfo")
  ? JSON.parse(sessionStorage.getItem("userInfo"))
  : {};

if (!userInfo || !userInfo.email) {
  window.location.href = "http://127.0.0.1:5500/index.html#";
}

const togglerBtn = document.querySelector(".toggler-btn");
const sideNav = document.querySelector(".side-nav");
const pageContent = document.querySelector(".page-content");
const page = document.querySelector(".page");
const menuItems = sideNav.querySelectorAll(".menu-item");
const brandName = sideNav.querySelector(".brand-name");
const firstChar = pageContent.querySelector(".first-char");

firstChar.innerHTML = userInfo.name ? userInfo.name[0] : "";
brandName.innerHTML = userInfo.name || "Misafir";

togglerBtn.onclick = () => {
  sideNav.classList.toggle("active");
  pageContent.classList.toggle("active");
};

//Routes
import routes from "../../module/route.service.js";
import { notFound } from "../../module/notFound.js";
import functionService from "../../module/function.service.js";

const handleRouteChange = () => {
  const path = window.location.hash.replace("#", "") || "/";
  page.innerHTML = routes[path] || notFound;

  if (path === "/category" && userInfo && userInfo.email) {
    functionService.categoryFunc(userInfo);
  } else if (path === "/blogs" && userInfo && userInfo.email) {
    functionService.blogsFunc(userInfo);
  } else if (path === "/logout" && userInfo && userInfo.email) {
    functionService.logoutFunc(userInfo);
  }
};

window.onhashchange = handleRouteChange;
handleRouteChange();

//Menu Active
menuItems.forEach((menu) => {
  menu.onclick = () => {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
    menu.classList.add("active");
  };
});

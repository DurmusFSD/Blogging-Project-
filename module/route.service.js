import { Homepage } from "../pages/html/homePage.js";
import { Login } from "../pages/html/login.js";
import { Register } from "../pages/html/register.js";
import {Dashboard} from "../Admin/pages/html/dashboard.js";
import {Category} from "../Admin/pages/html/category.js";
import {Blogs} from "../Admin/pages/html/blogs.js";
import {Logout} from "../Admin/pages/html/logout.js";

export default {
  "/": Homepage,
  "/login": Login,
  "/register": Register,
  "/dashboard": Dashboard,
  "/category": Category,
  "/blogs": Blogs,
  "/logout": Logout,
};

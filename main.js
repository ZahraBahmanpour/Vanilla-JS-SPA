import { aboutPage } from "./pages/aboutPage";
import { contactPage } from "./pages/contactPage";
import { dashboardPage } from "./pages/dashboardPage";
import { homePage } from "./pages/homePage";
import { loginPage } from "./pages/loginPage";
import { productDetailsPage } from "./pages/productDetailsPage";
import { productsPage } from "./pages/productsPage";
import { signupPage } from "./pages/signupPage";
import "./style.css";
import Navigo from "navigo";

export const routes = {
  home: "/",
  products: "/products",
  productDetails: "/products/:id",
  about: "/about",
  contact: "/contact",
  dashboard: "/dashboard",
  login: "/login",
  signup: "/signup",
};

export const router = new Navigo("/");
router
  .on(routes.home, homePage)
  .on(routes.products, productsPage)
  .on(routes.productDetails, (match) => productDetailsPage(match))
  .on(routes.about, aboutPage)
  .on(routes.contact, contactPage)
  .on(routes.dashboard, dashboardPage)
  .on(routes.login, loginPage)
  .on(routes.signup, signupPage)
  .resolve();

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

const render = (children) => {
  document.querySelector("#app").innerHTML = `<nav>
  <menu>
    <li><a href="/" data-navigo>Home</a></li>
    <li><a href="/products" data-navigo>Products</a></li>
    <li><a href="/about" data-navigo>About us</a></li>
    <li><a href="/contact" data-navigo>Contact us</a></li>
    <li><a href="/dashboard" data-navigo>Dashboard</a></li>
    <li><a href="/signup" data-navigo>Sign Up</a></li>
  </menu>
</nav><div>${children}<div>`;
};

const renderFullPage = (children) => {
  document.querySelector("#app").innerHTML = `<div>${children}<div>`;
};

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
  .on(routes.home, () => render(homePage()))
  .on(routes.products, () => render(productsPage()))
  .on(routes.productDetails, (match) => render(productDetailsPage(match)))
  .on(routes.about, () => render(aboutPage()))
  .on(routes.contact, () => render(contactPage()))
  .on(routes.dashboard, () => render(dashboardPage()))
  .on(routes.login, () => renderFullPage(loginPage()))
  .on(routes.signup, () => renderFullPage(signupPage()))
  .resolve();

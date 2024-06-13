import { router, routes } from "../main";

export function dashboardPage() {
  const token = localStorage.getItem("accessToken") ?? false;
  if (token) {
    return `<h2>Dashboard</h2><button id="btn--logout">Log out</button>`;
  } else {
    router.navigate(routes.login);
  }
}

export const logout = () => {
  document.querySelector("#btn--logout")?.addEventListener("click", () => {
    localStorage.removeItem("accessToken");
    router.navigate(routes.home);
  });
};

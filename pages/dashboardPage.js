import { router, routes } from "../main";

export function dashboardPage() {
  const token = localStorage.getItem("accessToken") ?? false;
  if (token) {
    document.querySelector("#app").innerHTML = `<h2>Dashboard</h2>`;
  } else {
    router.navigate(routes.login);
  }
}

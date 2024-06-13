import { router, routes } from "../main";

export function dashboardPage() {
  const token = localStorage.getItem("accessToken") ?? false;
  if (token) {
    return `<h2>Dashboard</h2>`;
  } else {
    router.navigate(routes.login);
  }
}

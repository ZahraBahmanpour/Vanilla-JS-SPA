import axios from "axios";
import { BASE_URL } from "../api/api";
import { router, routes } from "../main";

export function loginPage() {
  return `
  <h2>Login</h2>
  <form>
  <label>Email <input type="email" id="email"/></label>
  <br/>
  <label>Password <input type="password" id="password"/></label>
  <br/>
  <input type="submit" value="Login"/>
  <span id="error" style="color:red;"></span>
  </form>`;
}

export const login = () => {
  document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    console.dir(e.target);
    const credentials = {
      email: e.target["email"].value,
      password: e.target["password"].value,
    };
    try {
      const response = await axios.post(`${BASE_URL}/login`, credentials);
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("accessToken", response.data.accessToken);
        router.navigate(routes.dashboard);
      }
    } catch (e) {
      console.log(e.response.data);
      document.querySelector("span").innerHTML = `${e.response.data}`;
    }
  });
};

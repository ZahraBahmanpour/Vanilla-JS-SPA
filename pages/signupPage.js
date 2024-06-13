import axios from "axios";
import { router, routes } from "../main";
import { BASE_URL } from "../api/api";

export function signupPage() {
  return `<h2>Sign Up</h2>
    <form>
    <label>Email <input type="email" id="email"/></label>
    <br/>
    <label>Password <input type="password" id="password"/></label>
    <br/>
    <input type="submit" value="Sign Up"/>
    </form>`;
}

export const signup = () => {
  document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    console.dir(e.target);
    const credentials = {
      email: e.target["email"].value,
      password: e.target["password"].value,
    };
    try {
      const response = await axios.post(`${BASE_URL}/signup`, credentials);
      if (response.status === 201) {
        router.navigate(routes.login);
      }
    } catch (e) {
      console.log(e.response.data);
      document.querySelector("span").innerHTML = `${e.response.data}`;
    }
  });
};

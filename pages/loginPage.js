export function loginPage() {
  document.body.querySelector("nav").remove();
  document.querySelector("#app").innerHTML = `<h2>Login</h2>
  <form><label>Email <input type="email" id="email"/></label><br/><label>Password <input type="password" id="password"/></label></form>`;
}

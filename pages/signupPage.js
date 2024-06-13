export function signupPage() {
  document.body.querySelector("nav").remove();
  document.querySelector("#app").innerHTML = `<h2>Sign Up</h2>
    <form><label>Email <input type="email" id="email"/></label><br/><label>Password <input type="password" id="password"/></label></form>`;
}

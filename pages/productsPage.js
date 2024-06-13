export function productsPage() {
  document.querySelector("#app").innerHTML = `<h2>Products List</h2>
    <ul><li><a href="/products/1" data-navigo>Products 1</></li><li><a href="/products/2" data-navigo>Products 2</></li><li><a href="/products/3" data-navigo>Products 3</></li></ul>`;
}

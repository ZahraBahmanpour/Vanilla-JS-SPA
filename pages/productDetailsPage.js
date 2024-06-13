export function productDetailsPage(match) {
  console.log(match);
  document.querySelector(
    "#app"
  ).innerHTML = `<h2>Product Details ${match.data.id}</h2>`;
}

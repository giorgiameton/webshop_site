const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;

//fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

//populate the page
function showProduct(product) {
  console.log(product);
  document.querySelector(".product").src = product.brandname;
  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector(".productName").textContent =
    product.productdisplayname;
  document.querySelector(
    ".subcategory-archetitype"
  ).textContent = `${product.subcategory} - ${product.articletype}`;
  document.querySelector(".price").textContent = `${product.price} DKK`;
  document.querySelector(
    ".product"
  ).style.backgroundImage = `url("https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp")`;
}

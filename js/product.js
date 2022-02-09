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
  //bradcrumbs
  document.querySelector(".productNameB").textContent =
    product.productdisplayname;
  document.querySelector(".categoryNameB").textContent = `${product.category}>`;
  //product info
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

  if (product.soldout) {
    document.querySelector("#sold").classList.add("soldOut");
    document.querySelector("#sold").textContent = "SOLD OUT";
  }

  if (product.discount) {
    // console.log(true);
    document.querySelector("#onSale").classList.add("sale");
    document.querySelector("#onSale").textContent = `${product.discount} % off`;
    document.querySelector(".price").classList.add("newPrice");
    document.querySelector(".price").textContent =
      Math.ceil(product.price - (product.price / 100) * product.discount) +
      " DKK";
  }
}

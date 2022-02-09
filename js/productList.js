/*const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
const url = "https://kea-alt-del.dk/t7/api/products/" + category;*/

const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //grab template
  const template = document.querySelector("#productTemplate").content;
  //clone it
  const clone = template.cloneNode(true);
  //change content
  //changing href to make the product page dynamic
  clone
    .querySelector("a")
    .setAttribute("href", `product.html?id=${product.id}`);
  //bradcrumbs and title
  document.querySelector(".categoryNameB").textContent = product.category;
  document.querySelector("h1").textContent = product.category;
  //product info
  clone.querySelector(".brand").textContent = product.brandname;
  clone.querySelector(".productName").textContent = product.productdisplayname;
  clone.querySelector(
    ".subcategory-archetitype"
  ).textContent = `${product.subcategory} - ${product.articletype}`;
  clone.querySelector(".price").textContent = `${product.price} DKK`;
  clone.querySelector(
    ".product"
  ).style.backgroundImage = `url("https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp")`;
  //soldOut and sale
  if (product.soldout) {
    clone.querySelector("#sold").classList.add("soldOut");
    clone.querySelector("#sold").textContent = "SOLD OUT";
  }

  if (product.discount) {
    // console.log(true);
    clone.querySelector("#onSale").classList.add("sale");
    clone.querySelector("#onSale").textContent = `${product.discount} % off`;
    clone.querySelector(".price").classList.add("newPrice");
    clone.querySelector(".price").textContent =
      Math.ceil(product.price - (product.price / 100) * product.discount) +
      " DKK";
  }
  //grab parent
  const parent = document.querySelector("main ul");
  //append clone
  parent.appendChild(clone);
}

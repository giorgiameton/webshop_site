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
    clone.querySelector("#onSale").classList.add("sale");
    clone.querySelector("#onSale").textContent = `${product.discount} % off`;
    //clone.querySelector(".price").textContent = `Now
  }
  //grab parent
  const parent = document.querySelector("main ul");
  //append clone
  parent.appendChild(clone);
}

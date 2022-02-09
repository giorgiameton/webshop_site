//console.log("hello");

const url = "https://kea-alt-del.dk/t7/api/categories";

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
  const template = document.querySelector(".categoryTemplate").content;
  const clone = template.cloneNode(true);

  clone.querySelector(".category p").textContent = `${product.category} >`;
  const parent = document.querySelector("main ul");
  parent.appendChild(clone);
}

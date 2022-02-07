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

/**
 <li>
          <a href="product.html">
            <div class="product">
              <p class="sale">55% off</p>
            </div></a
          >
          <div class="productText">
            <p class="soldOut">SOLD OUT</p>
            <p class="price">1299DKK</p>
          </div>
        </li>
  */

function showProduct(product) {
  console.log(product);
  //grab template
  const template = document.querySelector("#productTemplate").content;
  //clone it
  const clone = template.cloneNode(true);
  //change content
  clone.querySelector(".brand").textContent = product.brandname;
  clone.querySelector(".productName").textContent = product.productdisplayname;
  clone.querySelector(
    ".subcategory-archetitype"
  ).textContent = `${product.subcategory} - ${product.articletype}`;
  clone.querySelector(".price").textContent = `${product.price} DKK`;
  //soldOut and sale
  if (product.soldout) {
    clone.querySelector("#sold").classList.add("soldOut");
    clone.querySelector("#sold").textContent = "SOLD OUT";
  }

  if (product.discount) {
    clone.querySelector("#onSale").classList.add("sale");
    clone.querySelector("#onSale").textContent = `${product.discount} % off`;
  }
  //grab parent
  const parent = document.querySelector("main ul");
  //append clone
  parent.appendChild(clone);
}

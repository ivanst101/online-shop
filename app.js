fetch("https://30hills.com/api/products.json")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    // array of objects
    const pom = completedata.products.data.items;
    let data1 = "";
    pom.map((values) => {
      // Displaying data
      data1 += `
      <div class="item justify-self-center">
      <img src="${values.images}" class="bg-cover img" alt="img1">
      <div class="text-center py-3 font-poppins">
          <h1 class="text-lg title">${values.name}</h1>
          <a href="${values.url}" class="block"><span class="text-sm text-red-400 cat">${values.category}</span></a>
          <span class="block py-3">$<span id="price" class="priceTag text-md">${values.price}</span></span>
          <button class="border-2 px-8 py-1 bg-yellow-400 border rounded-md buy">Buy Now</button>
      </div>
    </div>
    `;
    });
    // Adding data to a html page
    document.getElementById("products").innerHTML = data1;
  })
  .catch((err) => {});
// Filter products by name
let filterInput = document.getElementById("filterInput");
let grid = document.querySelector(".products");
filterInput.addEventListener("keyup", filterProducts);

function filterProducts() {
  let filterValue = filterInput.value.toUpperCase();
  let item = grid.querySelectorAll(".item");
  for (let i = 0; i < item.length; i++) {
    let name = item[i].querySelector(".title");
    if (name.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      item[i].style.display = "initial";
    } else {
      item[i].style.display = "none";
    }
  }
// Filter products by category
  let cat = item[i].querySelector(".cat");
  for (let i = 0; i < cat.length; i++) {
    if (cat.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      item[i].style.display = "initial";
    } else {
      item[i].style.display = "none";
    }
  }
}
//Shopping cart
let carts = document.querySelectorAll(".buy");
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    console.log("button clicked");
  });
}

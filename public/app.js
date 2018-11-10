// Main applicaiton java script



// CART functionality --------------------------------------------
let currentCart = getPendingCart()

function getPendingCart() {
  let pendCart = sessionStorage.getItem("bibliotecaCart")
  return JSON.parse(pendCart)
}

function storePendingCart(pendCart) {
  sessionStorage.setItem("bibliotecaCart", JSON.stringify(pendCart))
}

function removePendingCart() {
  sessionStorage.removeItem("bibliotecaCart")
}
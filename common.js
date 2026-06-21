/* MYRA COMMON JS */

function goHome(){
  location.href = "home.html";
}

function goCategory(){
  location.href = "category.html";
}

function goFavourites(){
  location.href = "favourites.html";
}

function goCart(){
  location.href = "cart.html";
}

function goProfile(){
  location.href = "profile.html";
}

function showToast(msg){
  const toast = document.getElementById("toast");
  if(!toast) return;

  toast.innerText = msg;
  toast.classList.add("show");

  setTimeout(()=>{
    toast.classList.remove("show");
  },2200);
}

function getFavourites(){
  return JSON.parse(localStorage.getItem("myra_favourites") || "[]");
}

function saveFavourites(items){
  localStorage.setItem("myra_favourites", JSON.stringify(items));
}

function getCart(){
  return JSON.parse(localStorage.getItem("myra_cart") || "[]");
}

function saveCart(items){
  localStorage.setItem("myra_cart", JSON.stringify(items));
}

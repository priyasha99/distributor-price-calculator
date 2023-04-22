let calculateBtn = document.getElementById("calculate-btn");
let result = document.getElementById("result");
let calculate = () => {
  let p = Number(document.getElementById("maximumRetailPrice").value);
  let r = Number(document.getElementById("margin").value);
  let t = Number(document.getElementById("scheme").value);

  let price = p/r * (1 - (t/100));

  if(isNaN(p) || isNaN(r) || isNaN(t) || isNaN(price)) {
    result.innerHTML = `<div> <p>Enter details to calculate price.</p> </div>`;
  } else {
  result.innerHTML = `<div>Price to retailer: <span>${price.toFixed(2)} Rs.</span></div>`;
  }
};
calculateBtn.addEventListener("click", calculate);
window.addEventListener("load", calculate);
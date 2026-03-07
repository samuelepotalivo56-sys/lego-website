let prima_variabile = 0
let mio_pulsante = document.querySelector("#id")

let aggiungi = document.querySelector("#aggiungi");
let sottrai = document.querySelector("#sottrai");

console.log(aggiungi, sottrai);

aggiungi.addEventListener("click", function () {
 let output = document.querySelector("#output");
 let result = Number(output.innerText) + 1;
  if (result > 10) {
    result = 0;
  }

  output.innerText = result;
});

sottrai.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) - 1;

  if (result < -10) {
    result = 0;
  }

  output.innerText = result;
});
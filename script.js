/*
Maximum ze dvou čísel
Napište funkci max2, která vrátí větší ze dvou zadaných čísel. V JavaScriptu už na toto funkce existuje, jmenuje se Math.max. Pro účely tohoto příkladu se budeme tvářit, že o ní nevíme.
*/

const max2 = (num1, num2) => {
  if (num1 >= num2) {
    return num1;
  } else {
    return num2;
  }
};

document.body.innerHTML += `<p>${max2(11, 287)}</p>`;
document.body.innerHTML += `<p>${max2(20, 20)}</p>`;
document.body.innerHTML += `<p>${max2(-5, 1)}</p>`;

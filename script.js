const select = document.querySelectorAll(".currency");
const btn = document.querySelector("#btn");
const num = document.querySelector("#num");
const ans = document.querySelector("#ans");

const getData = async () => {
  const data = await fetch("https://api.frankfurter.app/currencies");
  const res = await data.json();

  console.log(res);
};

getData();

const select = document.querySelectorAll(".currency");
const btn = document.querySelector("#btn");
const num = document.querySelector("#num");
const ans = document.querySelector("#ans");

const getData = async () => {
  const data = await fetch("https://api.frankfurter.app/currencies");
  const res = await data.json();
  displayData(res);
  // console.log(res);
};

getData();

const displayData = (data) => {
  // console.log(data);
  const entries = Object.entries(data);
  for (var i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
  }
  // console.log(entries);
};

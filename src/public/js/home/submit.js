'use strict'

const calculcateBtn = document.querySelector('button'),
  input = document.querySelectorAll('[type="checkbox"]')

calculcateBtn.addEventListener("click", calculate);

function calculate() {
  var total = 0;
  for(var i=0; i < input.length; ++i){
    if (input[i].checked) {
      total += 1
    }
  };

  const req = {
    total : total
  };
  
  fetch("/result", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });

  location.href = '/result/?score=' + String(total)
}
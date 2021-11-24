const tbodyEl = document.querySelector("tbody");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", onAddWebsite);

function onAddWebsite(e){
  e.preventDefault();
  const pn = document.getElementById('pn').value;
  const qty = document.getElementById('qty').value;
  const rate = document.getElementById('rate').value;
  const amt = Number(qty)*Number(rate)
  const dis = amt*0.05
  const total = amt-dis
  const cgst = total*0.09
  const sgst = cgst
  const famt = total + cgst + sgst
          tbodyEl.innerHTML += `
            <tr>
                <td>${pn}</td>
                <td>${qty}</td>
                <td>${rate}</td>
                <td>${amt}</td>
                <td>${dis}</td>
                <td>${total}</td>
                <td>${cgst}</td>
                <td>${sgst}</td>
                <td>${famt}</td>
            </tr>
        `;
  
}
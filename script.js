const tbodyEl = document.querySelector("tbody");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", onAddWebsite);

for (var i=0; i<sessionStorage.length;i++){
  if(!sessionStorage.key(i).indexOf('obj')){
    x = sessionStorage.getItem(sessionStorage.key(i))
    console.log(JSON.parse(x).pn)   
    
    tbodyEl.innerHTML += `
            <tr>
                <td>${JSON.parse(x).pn}</td>
                <td>${JSON.parse(x).qty}</td>
                <td>${JSON.parse(x).rate}</td>
                <td>${JSON.parse(x).amt}</td>
                <td>${JSON.parse(x).dis}</td>
                <td>${JSON.parse(x).total}</td>
                <td>${JSON.parse(x).cgst}</td>
                <td>${JSON.parse(x).sgst}</td>
                <td>${JSON.parse(x).famt}</td>
            </tr>
        `;
  }
}


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
  nums = sessionStorage.length
  named = "obj"+nums
  sessionStorage.setItem(named,JSON.stringify({
    "pn":pn,
    "qty":qty,
    "rate":rate,
    "amt":amt,
    "dis":dis,
    "total":total,
    "cgst":cgst,
    "sgst":sgst,
    "famt":famt
  }))
  
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
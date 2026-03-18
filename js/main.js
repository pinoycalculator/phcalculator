function toggleMenu(){
  let menu = document.getElementById("navMenu");
  menu.classList.toggle("active");
}

/* LOAD COMPONENTS */
function loadComponent(id, file){
  fetch(file)
  .then(res => res.text())
  .then(data => {
    document.getElementById(id).innerHTML = data;
  });
}

loadComponent("header","components/header.html");
loadComponent("footer","components/footer.html");

/* MINI CALC */
function miniCalc(){
  let salary = document.getElementById("miniSalary").value;
  let result = document.getElementById("miniResult");

  let contribution = salary * 0.045;

  result.innerHTML = "₱" + contribution.toFixed(2);
}

miniCalc();

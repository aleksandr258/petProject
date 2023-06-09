//прокуртка при клике 
const MENU_LINKS = document.querySelectorAll('.nav-link[data-goto]')
if (MENU_LINKS.length > 0){
  MENU_LINKS.forEach(menuLink => {
    menuLink.addEventListener('click',onMenuLinkClick);
  });

  function onMenuLinkClick(e){
    const MENU__LINK = e.target;
    if (MENU__LINK.dataset.goto && document.querySelector(MENU__LINK.dataset.goto)){
      const GOTO_BLOCK = document.querySelector(MENU__LINK.dataset.goto);
      const GOTO_BLOCK_VALUE = GOTO_BLOCK.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
      
      window.scrollTo({
        top: GOTO_BLOCK_VALUE,
        behavior: 'smooth'
      });
      e.preventDefault();
    }
  }
}



function updateMenu() {
  let menu1 = document.getElementById("menu1");
  let menu2 = document.getElementById("menu2");
  
  
  let selectedValue = menu1.value;
  
  // Очистить второе меню
  menu2.innerHTML = "";
  
  if (selectedValue === "Грудь") {
    menu2.options.add(new Option("Жим лежа"));
    menu2.options.add(new Option("Жим под наклоном"));
    menu2.options.add(new Option("Жим гантелей"));
  } else if (selectedValue === "Спина") {
    menu2.options.add(new Option("Становая тяга"));
    menu2.options.add(new Option("Тяга верхенго блока"));
    menu2.options.add(new Option("Тяга грифа"));
  } else if (selectedValue === "Руки") {
    menu2.options.add(new Option("Подьем штанги"));
    menu2.options.add(new Option("Тяга блока на трицепс"));
    menu2.options.add(new Option("Поддьем гантелей на бицепс"));
  }
}

const FORM_OBJECT = {
      group: 0,
      exersize: 0,
      weight: 0,
      reps: 0,
      approach: 0
    }

function createTrainig(){
  let firstHistoryDivWrapp = document.querySelector('.col');
  const newHistoryDivWrapp = document.createElement("div");
  newHistoryDivWrapp.classList.add("col");
  
  const newHistoryDiv = document.createElement("div");
  newHistoryDiv.classList.add("card");

  const newHistoryDivBody = document.createElement("div");
  newHistoryDivBody.classList.add("card-body");

  const titleHistory = document.createElement("h5");
  titleHistory.textContent = FORM_OBJECT.group;
  titleHistory.classList.add("card-title");

  const pHistory = document.createElement("p");
  pHistory.textContent = FORM_OBJECT.exersize;
  pHistory.classList.add("card-text");



  
   firstHistoryDivWrapp.parentNode.insertBefore(newHistoryDivWrapp, firstHistoryDivWrapp);
   newHistoryDivWrapp.appendChild(newHistoryDiv);
   newHistoryDiv.appendChild(newHistoryDivBody);
   newHistoryDivBody.appendChild(titleHistory);
   newHistoryDivBody.appendChild(pHistory);
   
}


  const buttonSave = document.getElementById("button-addon1");

  buttonSave.addEventListener("click",function(){
    const group = document.getElementById("menu1").value;
    const exersize = document.getElementById("menu2").value;
    const weight = document.getElementById("form-weight").value;
    const reps = document.getElementById("form-reps").value;
    const approach = document.getElementById("form-approach").value;

    FORM_OBJECT.group = group;
    FORM_OBJECT.exersize = exersize;
    FORM_OBJECT.weight = weight;
    FORM_OBJECT.reps = reps;
    FORM_OBJECT.approach = approach;
    
    createTrainig();

    console.log(FORM_OBJECT);
  })



let firstWorkout = {
  benchPress: 100,
  reps: 1,
  when: '22.03.2023'
}



let ctx = document.querySelector("#firstChart").getContext("2d");
  let MyChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [1, 2, 3, 4, 5],
      datasets: [{
        label: 'Жим лежа',
        data: [1, 2, 3, 4],
        backgroundColor: ['white'],
        borderColor: ['#00BFFF'],
        borderWidth: 4
      }]
    },
    options: {
      // responsive: true,
      // maintainAspectRatio: false
    }
  });


  document.getElementById("menu1").addEventListener("click", updateMenu);

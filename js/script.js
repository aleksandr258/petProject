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
 
let formWeight = document.getElementById("form-weight");
let formReps = document.getElementById("form-reps");
let formApproach = document.getElementById("form-approach");

formWeight.addEventListener("input", function() {
  var weightInput = formWeight.value; // Получаем значение из поля ввода

  // var block = document.createElement("div"); // Создаем новый элемент div
  // block.textContent = input; // Задаем текст содержимого блока

  // blockContainer.appendChild(block); // Добавляем созданный блок в контейнер
  console.log(weightInput);
});

const FORM_OBJECT = {
      group: 0,
      exersize: [],
      weight: 0,
      reps: 0,
      approach: 0,
      dateTraining: []
    }
const EMERGING_OBJECT = {
      group: 0,
      exersize: [],
      weight: 0,
      reps: 0,
      approach: 0,
      dateTraining: []
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
  pHistory.textContent = `${FORM_OBJECT.exersize}:  ${FORM_OBJECT.weight}кг на ${FORM_OBJECT.reps} повтора`;
  pHistory.classList.add("card-text");
  



  
   firstHistoryDivWrapp.parentNode.insertBefore(newHistoryDivWrapp, firstHistoryDivWrapp);
   newHistoryDivWrapp.appendChild(newHistoryDiv);
   newHistoryDiv.appendChild(newHistoryDivBody);
   newHistoryDivBody.appendChild(titleHistory);
   newHistoryDivBody.appendChild(pHistory);
   
}
 let buttonAddExersize = document.getElementById("button-addon2");
  function formReset(){
    formWeight.value = "";
    formReps.value = "";
    formApproach.value = "";
   
    
  }
    
  

  const buttonSave = document.getElementById("button-addon1");
  


  buttonSave.addEventListener("click",function(){
   const group = document.getElementById("menu1").value;
   const exersize = document.getElementById("menu2").value;
   const weight = document.getElementById("form-weight").value;
   const reps = document.getElementById("form-reps").value;
   const approach = document.getElementById("form-approach").value;


    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Месяцы в объекте Date начинаются с 0, поэтому добавляем 1
    const year = currentDate.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;
    FORM_OBJECT.dateTraining.push(formattedDate);
    FORM_OBJECT.exersize.push(exersize);
    

    FORM_OBJECT.group = group;
    
    FORM_OBJECT.weight = weight;
    FORM_OBJECT.reps = reps;
    FORM_OBJECT.approach = approach;
   
    
    createTrainig();

    console.log(FORM_OBJECT);
  })







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
const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Месяцы в объекте Date начинаются с 0, поэтому добавляем 1
const year = currentDate.getFullYear();

const formattedDate = `${day}-${month}-${year}`;
console.log(formattedDate);
const emergingDiv = document.getElementById("emerging-div");
const emergingCard = document.getElementById("emerging-card");

buttonAddExersize.addEventListener("click",function(){//создание появляющейся карточки с структурой тренировок
  const weight = parseInt(document.getElementById("form-weight").value);
  const reps = parseInt( document.getElementById("form-reps").value);
  const approach =parseInt (document.getElementById("form-approach").value);
  const exersize = document.getElementById("menu2").value;

  const emergingCardWrap = document.getElementById("emergingCardWrap");

  if (weight !=="" || reps !=="" || approach !==""){
    emergingDiv.style.display = "block";
    
    const cardBodyEmerging = document.createElement("div");
    cardBodyEmerging.classList.add("card-body-emerging")
    cardBodyEmerging.id = "emerging-card";
    emergingCardWrap.appendChild(cardBodyEmerging);

    const newEmergingCard = document.createElement("div");
    newEmergingCard.classList.add("card");
    newEmergingCard.id = "emerging-card";

    const emergingTitle = document.createElement("h5");
    emergingTitle.textContent = exersize;
    emergingTitle.classList.add("card-title", "emerging-title");
    
    const exersizeList = document.createElement("ol");
    exersizeList.classList.add("list-group",  "list-group-numbered");
    
    
    for (let i = 0; i < approach; i++){
      const liExersize = document.createElement("li");
      liExersize.classList.add("list-group-item");
      liExersize.textContent = `${weight}кг на ${reps} повтора`;

      exersizeList.appendChild(liExersize);
    }
    cardBodyEmerging.appendChild(newEmergingCard);
    newEmergingCard.appendChild(emergingTitle)
    newEmergingCard.appendChild(exersizeList);

    
    formReset();
  }
  
})


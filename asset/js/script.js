const showAllplzyerSection=document.getElementById("allplayerSection");
const divChoisiJoueur=document.getElementById("div_choisi_joueur");
const crud_modal=document.getElementById("crud-modal");
const modal_add_player=document.getElementById("add-player-modal");
const btnClose=document.getElementById("btnClose");
const btnAjouter=document.getElementById("btnAjoute");


const div_LW = document.getElementById("LW");
const div_ST = document.getElementById("ST");
const div_RW = document.getElementById("RW");

const div_CM = document.getElementById("CM");
const div_CMR = document.getElementById("CMR");
const div_CML = document.getElementById("CML");

const div_LB = document.getElementById("LB");
const div_CBR = document.getElementById("CBR");
const div_CBL = document.getElementById("CBL");
const div_RB = document.getElementById("RB");

const div_GK = document.getElementById("Gk");

let playerName = document.getElementById("f-name");
let playerImage = document.getElementById("f-image");
let playerPosition = document.getElementById("f-position");
let playerNationality = document.getElementById("f-nationality");
let playerClub = document.getElementById("f-club");
let playerRating = document.getElementById("f-rating");
let playerPace = document.getElementById("f-pace");
let playerShooting = document.getElementById("f-shooting");
let playerPassing = document.getElementById("f-passing");
let playerDriblling = document.getElementById("f-driblling");
let playerDefending = document.getElementById("f-defending");
let playerPhysical = document.getElementById("f-physical");



let Allplayers = [];
let temData=[];
let playerDiv; 


btnAjouter.addEventListener("click",()=>{
  toggleVisibility(crud_modal);
  toggleVisibility(modal_add_player);
})

function toggleVisibility(element) {
  if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
      element.classList.add('block');
  } else {
      element.classList.remove('block');
      element.classList.add('hidden');
  }
}

btnClose.addEventListener("click", function() {
  toggleVisibility(crud_modal);
});

document.getElementById("btn_close_modal").addEventListener("click", function() {
  toggleVisibility(modal_add_player);
});


function FiltrerAjouterPoopup(element) {
  divChoisiJoueur.innerHTML = '';  
  element.forEach(player => {
    playerDiv = document.createElement('div');
    playerDiv.setAttribute('draggable', 'true');
    playerDiv.setAttribute('id', `${player.id}`);  
    playerDiv.setAttribute('ondblclick',"funcAjouter_Terrain(this,this.id);");  
    playerDiv.className = "relative  text-white rounded-lg";
    playerDiv.innerHTML = `
          <div class="absolute top-0 right-0 z-10 w-full flex justify-around">
           <button onclick="suprimerJoueur(this.parentElement.parentElement)"><i class="fa fa-trash w-[30px] h-[30px] text-red-600"></i></button>
           <button onclick="modifierJoueur(this.parentElement.parentElement)"><i class="fa fa-edit w-[30px] h-[30px] text-green-700"></i></button>
          </div>
      <div class="relative w-[100px] h-[180px] bg-cover bg-center bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
        <div class="relative flex text-[#e9cc74] px-[0.3rem]">
          <div class="absolute py-[0.8rem_0] text-xs uppercase font-light">
            <div class="text-[1rem] mt-5">${player.rating}</div>
            <div>${player.position}</div>
            <div class="block">
              <img src="${player.flag}" alt="${player.nationality}" class="w-[1rem] h-[14px] object-contain" />
            </div>
            <div class="block">
              <img src="${player.logo}" alt="${player.club}" class="w-[1rem] h-[14px] object-contain" />
            </div>
          </div>
          <div class="w-[70px] h-[80px] mx-auto overflow-hidden">
            <img src="${player.photo}" alt="${player.name}" class="w-full h-full object-contain relative right-[-1rem] bottom-0" />
          </div>
        </div>

        <div class="w-full flex justify-around text-[#88e635] text-[0.7rem] font-bold uppercase">
          <span class="ml-[0.4rem] text-shadow-lg">${player.position}</span>
        </div>

        <div class="relative">
          <div class="text-[#e9cc74] w-[90%] mx-auto">
            <div class="text-center w-[100%] text-[0.6rem] uppercase border-b-2 border-[#e9cc74]/[0.1] ">
              <span class="block text-shadow-lg">${player.name}</span>
            </div>
            <div class="flex justify-center ">
              <div class="pr-[1.5rem] border-r-2 border-[#e9cc74]/[0.1]">
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${player.pace}</span>
                  <span class="font-light">PAC</span>
                </div>
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${player.shooting}</span>
                  <span class="font-light">SHO</span>
                </div>
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${player.passing}</span>
                  <span class="font-light">PAS</span>
                </div>
              </div>
              <div>
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${player.dribbling}</span>
                  <span class="font-light">DRI</span>
                </div>
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${player.defending}</span>
                  <span class="font-light">DEF</span>
                </div>
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${player.physical}</span>
                  <span class="font-light">PHY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    divChoisiJoueur.appendChild(playerDiv);
    
  });
}
function getPlayers() {
  showAllplzyerSection.innerHTML = '';

  Allplayers.forEach(player => {
      let playerDiv = document.createElement('div');
      playerDiv.setAttribute('draggable', 'true');
      playerDiv.setAttribute('id', `player-${player.id}`); 
      playerDiv.className = "relative flex items-center justify-center bg-gray-800 text-white rounded-lg ";

      playerDiv.innerHTML = `
          <div class="absolute top-0 right-0 z-10 w-full flex justify-around">
          <button onclick="suprimerJoueur(this.parentElement.parentElement)"><i class="fa fa-trash w-[30px] h-[30px] text-red-600"></i></button>
           <button onclick="modifierJoueur(this.parentElement.parentElement)"><i class="fa fa-edit w-[30px] h-[30px] text-green-700"></i></button>
          </div>
          <div class="relative w-[100px] h-[180px] bg-cover bg-center bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
              <div class="relative flex text-[#e9cc74] px-[0.3rem]">
                  <div class="absolute py-[0.8rem_0] text-xs uppercase font-light">
                      <div class="text-[1rem] mt-5">${player.rating}</div>
                      <div>${player.position}</div>
                      <div class="block">
                          <img src="${player.flag}" alt="${player.nationality}" class="w-[1rem] h-[14px] object-contain" />
                      </div>
                      <div class="block">
                          <img src="${player.logo}" alt="${player.club}" class="w-[1rem] h-[14px] object-contain" />
                      </div>
                  </div>
                  <div class="w-[70px] h-[80px] mx-auto overflow-hidden">
                      <img src="${player.photo}" alt="${player.name}" class="w-full h-full object-contain relative right-[-1rem] bottom-0" />
                  </div>
              </div>

              <div class="w-full flex justify-around text-[#88e635] text-[0.7rem] font-bold uppercase">
                  <span class="ml-[0.4rem] text-shadow-lg">${player.position}</span>
                  <span class="ml-[0.4rem] text-shadow-lg">${player.position}</span>
              </div>

              <div class="relative">
                  <div class="text-[#e9cc74] w-[90%] mx-auto">
                      <div class="text-center w-[100%] text-[0.6rem] uppercase border-b-2 border-[#e9cc74]/[0.1]">
                          <span class="block text-shadow-lg">${player.name}</span>
                      </div>
                      <div class="flex justify-center">
                          <div class="pr-[1.5rem] border-r-2 border-[#e9cc74]/[0.1]">
                              <div class="flex items-center text-[0.5rem] uppercase">
                                  <span class="font-bold mr-[0.3rem]">${player.pace}</span>
                                  <span class="font-light">PAC</span>
                              </div>
                              <div class="flex items-center text-[0.5rem] uppercase">
                                  <span class="font-bold mr-[0.3rem]">${player.shooting}</span>
                                  <span class="font-light">SHO</span>
                              </div>
                              <div class="flex items-center text-[0.5rem] uppercase">
                                  <span class="font-bold mr-[0.3rem]">${player.passing}</span>
                                  <span class="font-light">PAS</span>
                              </div>
                          </div>
                          <div>
                              <div class="flex items-center text-[0.5rem] uppercase">
                                  <span class="font-bold mr-[0.3rem]">${player.dribbling}</span>
                                  <span class="font-light">DRI</span>
                              </div>
                              <div class="flex items-center text-[0.5rem] uppercase">
                                  <span class="font-bold mr-[0.3rem]">${player.defending}</span>
                                  <span class="font-light">DEF</span>
                              </div>
                              <div class="flex items-center text-[0.5rem] uppercase">
                                  <span class="font-bold mr-[0.3rem]">${player.physical}</span>
                                  <span class="font-light">PHY</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      `;
      
      showAllplzyerSection.appendChild(playerDiv);
  });
}

function positionFliter(position,diva){
    temData = Allplayers.filter((player) => player.position.toLowerCase() === position.toLowerCase());
    toggleVisibility(crud_modal)
  
    FiltrerAjouterPoopup(temData)
}


fetch('../../players.json')
  .then(response => response.json())
  .then(data => {
    console.log(data.players);
    
    localStorage.setItem('allplayers',JSON.stringify(data.players))
    
})
.catch(error => console.error('Error fetching JSON:', error));

Allplayers=JSON.parse(localStorage.getItem('allplayers'));
getPlayers(); 



function toggle() {
  const position = document.getElementById('position').value;
  const generalStats = document.getElementById('generalStats');
  const goalkeeperStats = document.getElementById('goalkeeperStats');
  
  if (position === 'GK') {
  generalStats.classList.add('hidden');
  goalkeeperStats.classList.remove('hidden');
  } else {
  generalStats.classList.remove('hidden');
  goalkeeperStats.classList.add('hidden');
  }
  }
// document.getElementById('ajouterAlocalStorage').addEventListener('click', addPlayerToDatabase);

  function addPlayerToDatabase(event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value;
    const position = document.getElementById("position").value;
    const photo = document.getElementById("photo").value;
    const pace = document.getElementById("pace").value;
    const shooting = document.getElementById("shooting").value;
    const passing = document.getElementById("passing").value;
    const dribbling = document.getElementById("dribbling").value;
    const defending = document.getElementById("defending").value;
    const physical = document.getElementById("physical").value;
  
    if (!name || !position || !photo || !pace || !shooting || !passing || !dribbling || !defending || !physical) {
      alert("Please fill in all fields");
      return;
    }
  
    const newPlayer = {
      id: Allplayers.length + 1, 
      name: name,
      position: position,
      photo: photo,
      pace: pace,
      shooting: shooting,
      passing: passing,
      dribbling: dribbling,
      defending: defending,
      physical: physical
    };
  
    Allplayers.push(newPlayer);
  
    localStorage.setItem('allplayers', JSON.stringify(Allplayers));
  
    // document.getElementById("playerForm").reset();
    
    getPlayers(); 
    toggleVisibility(Div_add_player);
  }
  
  const cards = document.querySelectorAll(".player-card"); 
  cards.forEach(card => {
    card.addEventListener("dblclick", function () {
      const index = Allplayers.findIndex(player => player.id === playerId);
  if (index !== -1) {
    Allplayers.splice(index, 1);
    card.remove();
    }
  }); 
});

  function funcAjouter_Terrain(divCard,id) {
    var I = Allplayers.findIndex((player) => player.id == id);
    
    console.log("players",Allplayers)
    Allplayers.forEach(player => {
      console.log("index",typeof(player.id),typeof(id))
      if (player.id == id) {  
        switch (player.position) {
          case 'LW':
              if (div_LW.innerHTML.trim() === '') {
                div_LW.innerHTML=divCard.innerHTML 
                divCard.remove()
                Allplayers.splice(I,1)
              } else {
                AjouterAu_Changement(divCard)
              }
              break;

            
          case 'ST':
                if (div_ST.innerHTML.trim() === '') {
                  div_ST.appendChild(divCard);
                } else {
                  AjouterAu_Changement(divCard)
                Allplayers.splice(I,1)

                }   
                break;

          case 'RW':
            if (div_RW.innerHTML.trim() === '') {
              div_RW.appendChild(divCard);
              Allplayers.splice(I,1)

            } else {
              AjouterAu_Changement(divCard)
          }
              break;
          case 'CM':
            if (div_CM.innerHTML.trim() === '') {
              div_CM.appendChild(divCard);
              Allplayers.splice(I,1)

            } else {
              AjouterAu_Changement(divCard)
            }
              break;
          case 'CML':
            if (div_CML.innerHTML.trim() === '') {
              div_CML.appendChild(divCard);
              Allplayers.splice(I,1)

            } else {
              AjouterAu_Changement(divCard)
            }
              break;
          case 'CMR':
            if (div_CMR.innerHTML.trim() === '') {
                Allplayers.splice(I,1)
                div_CMR.appendChild(divCard);
            } else {
              AjouterAu_Changement(divCard)
            }
              break;
          case 'LB':
            if (div_LB.innerHTML.trim() === '') {
              div_LB.appendChild(divCard);
              Allplayers.splice(I,1)

            } else {
              AjouterAu_Changement(divCard)
          }
              break;
          
          case 'CBL':
            if (div_CBL.innerHTML.trim() === '') {
              div_CBL.appendChild(divCard);
              Allplayers.splice(I,1)

            } else {
              AjouterAu_Changement(divCard)
          }
              
              break;
          case 'CBR':
                  if (div_CBR.innerHTML.trim() === '') {
                    div_CBR.appendChild(divCard);
                Allplayers.splice(I,1)

                  } else {
                    AjouterAu_Changement(divCard)
                  }
              break;
          case 'RB':
                if (div_RB.innerHTML.trim() === '') {
                div_RB.appendChild(divCard);
                Allplayers.splice(I,1)

                }else {
                  AjouterAu_Changement(divCard)
                }
                break;
          case 'GK':
            if (div_GK.innerHTML.trim() === '') {
              alert("jjjj")
              div_GK.appendChild(divCard);
              Allplayers.splice(I,1)

            } else {
              AjouterAu_Changement(divCard)
            }
              break;
          default:
              console.log('Unknown position');
              break;
        }
      }
    });
  }
  
  function AjouterAu_Changement(joueur)
  {
    document.getElementById('Bonne_touche').appendChild(joueur); 
  }


  function modifierJoueur(element)
  {
    alert('Modifier',element);
    toggleVisibility()
  }
  function suprimerJoueur(element)
  {
    alert('suprimer',element);
    element.remove()
    var I = Allplayers.findIndex((player) => player.id == element.id);
    Allplayers.splice(I,1)
  }

  let validateForm = () => {
    if (playerName.value === "" || playerName.value.length > 20) {
      showErrorMessage(playerName, "Enter a valid name");
    } else if (playerImage.value === "") {
      showErrorMessage(playerImage, "you have to enter a valid url");
    } else if (playerPosition.value === "none") {
      showErrorMessage(playerPosition, "you have to choose a valid position");
    } else if (playerNationality.value === "") {
      showErrorMessage(playerNationality, "you have to enter a valid url");
    } else if (playerClub.value === "") {
      showErrorMessage(playerClub, "enter a valid logo url");
    } else if (playerRating.value === "" || playerRating.value <= 0) {
      showErrorMessage(playerRating, "invalid rating number");
    } else if (playerPace.value === "" || playerPace.value <= 0) {
      showErrorMessage(playerPace, "invalid pace number");
    } else if (playerShooting.value === "" || playerShooting.value <= 0) {
      showErrorMessage(playerShooting, "invalid shooting number");
    } else if (playerPassing.value === "" || playerPassing.value <= 0) {
      showErrorMessage(playerPassing, "invalid passing number");
    } else if (playerDriblling.value === "" || playerDriblling.value <= 0) {
      showErrorMessage(playerDriblling, "invalid dribling number");
    } else if (playerDefending.value === "" || playerDefending.value <= 0) {
      showErrorMessage(playerDefending, "invalid defendig number");
    } else if (playerPhysical.value === "" || playerPhysical.value <= 0) {
      showErrorMessage(playerPhysical, "invalid physical number");
    } else {
      addPlayerForm.reset();
      hideModal();
    }
  };

  function showErrorMessage(element, message) {
    const inputControl = element.parentElement;
    const displayError = inputControl.querySelector(".error-message");
    displayError.innerHTML = message;
  }
  document.getElementById("add-player-btn").addEventListener('click', (e) => {
    e.preventDefault();
    console.log("fzepn");
    validateForm();
  });
  
  document.getElementById('close-btn-modal').addEventListener("click", function(e) {
    toggleVisibility(modal_add_player);
  });
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
let playerCountryFlag = document.getElementById("f-flag");
let playerClub = document.getElementById("f-club");
let playerClubLogo = document.getElementById("f-logo");
let playerRating = document.getElementById("f-rating");
let playerPace = document.getElementById("f-pace");
let playerShooting = document.getElementById("f-shooting");
let playerPassing = document.getElementById("f-passing");
let playerDriblling = document.getElementById("f-driblling");
let playerDefending = document.getElementById("f-defending");
let playerPhysical = document.getElementById("f-physical");

const addPlayerForm=document.getElementById("add-player-form")



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

document.getElementById("close-btn").addEventListener("click", function() {
  toggleVisibility(modal_add_player);
});



function getPlayers(cont,element) {
  showAllplzyerSection.innerHTML = '';

  element.forEach(player => {
      let playerDiv = document.createElement('div');
      playerDiv.setAttribute('draggable', 'true');
      playerDiv.setAttribute('id', `player-${player.id}`); 
      playerDiv.className = "relative flex items-center justify-center bg-gray-800 text-white rounded-lg ";
      if(player.position === 'GK')
      {
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
                                  <span class="font-bold mr-[0.3rem]">${player.speed}</span>
                                  <span class="font-light">SP</span>
                              </div>
                              <div class="flex items-center text-[0.5rem] uppercase">
                                  <span class="font-bold mr-[0.3rem]">${player.kicking}</span>
                                  <span class="font-light">KIC</span>
                              </div>
                              <div class="flex items-center text-[0.5rem] uppercase">
                                  <span class="font-bold mr-[0.3rem]">${player.reflexes}</span>
                                  <span class="font-light">REF</span>
                              </div>
                          </div>
                          <div>
                              <div class="flex items-center text-[0.5rem] uppercase">
                                  <span class="font-bold mr-[0.3rem]">${player.positioning}</span>
                                  <span class="font-light">POS</span>
                              </div>
                              <div class="flex items-center text-[0.5rem] uppercase">
                                  <span class="font-bold mr-[0.3rem]">${player.handling}</span>
                                  <span class="font-light">HAND</span>
                              </div>
                              <div class="flex items-center text-[0.5rem] uppercase">
                                  <span class="font-bold mr-[0.3rem]">${player.diving}</span>
                                  <span class="font-light">DIV</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      `;
      }
      else
      {
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

      }
     
      
      cont.appendChild(playerDiv);
  });
}

function positionFliter(position,diva){
    temData = Allplayers.filter((player) => player.position.toLowerCase() === position.toLowerCase());
    toggleVisibility(crud_modal)
  
    // FiltrerAjouterPoopup(temData)
    getPlayers(divChoisiJoueur,temData)
}

////////////////////////////////



////////////////////////////////


fetch('../../players.json')
  .then(response => response.json())
  .then(data => {
    // console.log(data.players);
 if(localStorage.length == 0)
 {
      localStorage.setItem('allplayers',JSON.stringify(data.players))
 }
        
})
.catch(error => console.error('Error fetching JSON:', error));

setTimeout(function() {
  console.log(Allplayers);
  Allplayers = JSON.parse(localStorage.getItem('allplayers'));
  
  getPlayers(showAllplzyerSection,Allplayers); 
   

  
}, 75); 



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

  function validateForm_Ajout(){
    if (playerName.value === "" || playerName.value.length > 20) {
      showErrorMessage(playerName, "Enter a valid name");
    } else if (playerImage.value === "") {
      showErrorMessage(playerImage, "you have to enter a valid url");
    } else if (playerPosition.value === "none") {
      showErrorMessage(playerPosition, "you have to choose a valid position");
    } else if (playerNationality.value === "") {
      showErrorMessage(playerNationality, "you have to enter a valid nationality");
    } else if (playerClub.value === "") {
    } else if (playerCountryFlag.value === "") {
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
      alert("Ajouter Avec successfully")
      toggleVisibility(modal_add_player);
    }
  };

  function showErrorMessage(element, message) {
    const inputControl = element.parentElement;
    const displayError = inputControl.querySelector(".error-message");
    displayError.innerHTML = message;
  }

  // Ajouter nouveau joueur
  document.getElementById("add-player-btn").addEventListener('click', (e) => {
    e.preventDefault();
    validateForm_Ajout();
    addNewPlayer();
    
  });
  function adapteForm() {
    if (playerPosition.value === "gk") {
      playerPace.setAttribute("placeholder", "dividing");
      playerDriblling.setAttribute("placeholder", "handling");
      playerShooting.setAttribute("placeholder", "kicking");
      playerDefending.setAttribute("placeholder", "reflexes");
      playerPassing.setAttribute("placeholder", "speed");
      playerPhysical.setAttribute("placeholder", "positioning");
    } else {
      playerPace.setAttribute("placeholder", "pace");
      playerDriblling.setAttribute("placeholder", "driblling");
      playerShooting.setAttribute("placeholder", "shooting");
      playerDefending.setAttribute("placeholder", "defencing");
      playerPassing.setAttribute("placeholder", "passing");
      playerPhysical.setAttribute("placeholder", "physical");
    }
    console.log(playerPosition.value);
  }

  // Ajouter le nouveau joueur A DATABASE



  
  document.getElementById('close-btn').addEventListener("click", function(e) {
    toggleVisibility(modal_add_player);
  });

  function addNewPlayer(){
    let newPlayer;
    if(playerPosition.value != "gk"){
       newPlayer = {
        id : Allplayers.length+1,
        name: playerName.value,
        photo : playerImage.value,
        position : playerPosition.value,
        nationality : playerNationality.value,
        flag : playerCountryFlag.value,
        club : playerClub.value,
        logo : playerClubLogo.value,
        rating: playerRating.value,
        pace: playerPace.value,
        shooting: playerShooting.value,
        passing: playerPassing.value,
        driblling: playerDriblling.value,
        defending: playerDefending.value,
        physical: playerPhysical.value,
      }
    }
  
    else {
      newPlayer = {
      id : Allplayers.length+1,
      name: playerName.value,
      photo : playerImage.value,
      position : playerPosition.value,
      nationality : playerNationality.value,
      flag : playerCountryFlag.value,
      club : playerClub.value,
      logo : playerClubLogo.value,
      rating: playerRating.value,
      diving: playerPace.value,
      handling: playerShooting.value,
      kicking: playerPassing.value,
      reflexes: playerDriblling.value,
      speed: playerDefending.value,
      positioning: playerPhysical.value,
    }
    }
  
    updateLocalStroage(newPlayer,"add")
    console.log("newplayer",newPlayer)
   
  }
  
  function updateLocalStroage(player,mod){
    if(mod === "sup"){
      const index = findIndex(p => p.id == player.id);
    Allplayers.splice(index,1);
      localStorage.setItem("allplayers",JSON.stringify,Allplayers)
      console.log("allplayers",Allplayers)
    }
    else {
      Allplayers.push(player);
      localStorage.setItem("allplayers",JSON.stringify(Allplayers))
      console.log("allplayers",Allplayers)
    }
  }
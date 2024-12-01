// function changeFormation() {
//   const formation = document.getElementById('formation').value;
  
//   if (formation === '433') {
//     document.getElementById('attaque').innerHTML = `
//       <div id="LW" onclick="positionFliter('LW', this)" class="relative hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//       <div id="ST" onclick="positionFliter('ST', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//       <div id="RW" onclick="positionFliter('RW', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//     `;
    
//     document.getElementById('milieu').innerHTML = `
//       <div id="CML" onclick="positionFliter('CML', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//       <div id="CM" onclick="positionFliter('CM', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//       <div id="CMR" onclick="positionFliter('CMR', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//     `;
    
//     document.getElementById('defense').innerHTML = `
//       <div id="LB" onclick="positionFliter('LB', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//       <div id="CBL" onclick="positionFliter('CBL', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//       <div id="CBR" onclick="positionFliter('CBR', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//       <div id="RB" onclick="positionFliter('RB', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//     `;
//   }
//   else if (formation === '442') {
//     document.getElementById('attaque').innerHTML = `
//       <div id="LW" onclick="positionFliter('LW', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//       <div id="ST" onclick="positionFliter('ST', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//     `;
    
//     document.getElementById('milieu').innerHTML = `
//       <div id="CML" onclick="positionFliter('CML', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//       <div id="CM" onclick="positionFliter('CM', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//       <div id="CMR" onclick="positionFliter('CMR', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//       <div id="RW" onclick="positionFliter('RW', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//     `;
    
//     document.getElementById('defense').innerHTML = `
//       <div id="LB" onclick="positionFliter('LB', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//       <div id="CBL" onclick="positionFliter('CBL', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//       <div id="CBR" onclick="positionFliter('CBR', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//       <div id="RB" onclick="positionFliter('RB', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//     `;
//   }
//   else if (formation === '352') {
//     document.getElementById('attaque').innerHTML = `
//       <div id="LW" onclick="positionFliter('LW', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//       <div id="ST" onclick="positionFliter('ST', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//     `;
    
//     document.getElementById('milieu').innerHTML = `
//       <div id="CML" onclick="positionFliter('CML', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//       <div id="CM" onclick="positionFliter('CM', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//       <div id="CMR" onclick="positionFliter('CMR', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//       <div id="RW" onclick="positionFliter('RW', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//       <div id="LB" onclick="positionFliter('LB', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//     `;
    
//     document.getElementById('defense').innerHTML = `
//       <div id="LB" onclick="positionFliter('LB', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//       <div id="CBL" onclick="positionFliter('CBL', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//       <div id="CBR" onclick="positionFliter('CBR', this)" class="hover:shadow-sm hover:cursor-pointer w-[100px] h-[180px] bg-cover bg-center" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');"></div>
//     `;
//   }
// }
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
const div_GK = document.getElementById("pGK")

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
let playerDriblling = document.getElementById("f-dribbling");
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

//////////////////////////////////////////////////////////////////////// afficher les filters dans popup
function FiltrerAjouterPoopup(element) {
  divChoisiJoueur.innerHTML = '';  
  element.forEach(player => {
    playerDiv = document.createElement('div');
    playerDiv.setAttribute('draggable', 'true');
    playerDiv.setAttribute('id', `${player.id}`);  
    playerDiv.setAttribute('ondblclick',"funcAjouter_Terrain(this,this.id)");  
    playerDiv.className = "relative text-white rounded-lg";

    if(player.position != "GK"){
      playerDiv.innerHTML = `
         
      <div class="relative w-[100px] h-[180px] bg-cover bg-center bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
      <div class="absolute top-0 right-0 z-10 w-full flex justify-around">
       <button onclick="suprimerJoueur(this.parentElement.parentElement.parentElement)"><i class="fa fa-trash w-[30px] h-[30px] text-red-600"></i></button>
       <button onclick="remplacerJoueur(this.parentElement.parentElement.parentElement)"><i class="fa-sharp fa-solid fa-arrow-right-arrow-left fa-bounce" style="color: #FFD43B;"></i></button>
       <button onclick="editPlayer(this.parentElement.parentElement.parentElement)"><i class="fa fa-edit w-[30px] h-[30px] text-green-700"></i></button>
      </div>
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
    }
    else {
      playerDiv.innerHTML = `
      
  <div class="relative w-[100px] h-[180px] bg-cover bg-center bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
  <div class="absolute top-0 right-0 z-10 w-full flex justify-around">
       <button onclick="suprimerJoueur(this.parentElement.parentElement.parentElement)"><i class="fa fa-trash w-[30px] h-[30px] text-red-600"></i></button>
       <button onclick="remplacerJoueur(this.parentElement.parentElement.parentElement)"><i class="fa-sharp fa-solid fa-arrow-right-arrow-left fa-bounce" style="color: #FFD43B;"></i></button>
       <button onclick="editPlayer(this.parentElement.parentElement.parentElement)"><i class="fa fa-edit w-[30px] h-[30px] text-green-700"></i></button>
      </div>
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
              <span class="font-bold mr-[0.3rem]">${player.speed}</span>
              <span class="font-light">SP</span>
            </div>
            <div class="flex items-center text-[0.5rem] uppercase">
              <span class="font-bold mr-[0.3rem]">${player.kicking}</span>
              <span class="font-light">KiC</span>
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
    
    divChoisiJoueur.appendChild(playerDiv);
    
  });
}
function getPlayers() {
  showAllplzyerSection.innerHTML = '';

  Allplayers.forEach(player => {
      let playerDiv = document.createElement('div');
      playerDiv.setAttribute('draggable', 'true');
      playerDiv.setAttribute('id', `${player.id}`); 
      playerDiv.className = "relative flex items-center justify-center bg-gray-800 text-white rounded-lg ";
      if(player.position === 'GK')
      {
        playerDiv.innerHTML = `
          
          <div class="relative w-[100px] h-[180px] bg-cover bg-center bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
          <div class="absolute top-0 right-0 z-10 w-full flex justify-around">
         <button onclick="suprimerJoueur(this.parentElement.parentElement.parentElement)"><i class="fa fa-trash w-[30px] h-[30px] text-red-600"></i></button>
         <button onclick="modifierJoueur(this.parentElement.parentElement.parentElement)"><i class="fa fa-edit w-[30px] h-[30px] text-green-700"></i></button>
        </div>
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
                  <span class="ml-[0.4rem] text-shadow-lg">POS</span>
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
      else {
        playerDiv.innerHTML = `
        
        <div class="relative w-[100px] h-[180px] bg-cover bg-center bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
        <div class="absolute top-0 right-0 z-10 w-full flex justify-around">
         <button onclick="suprimerJoueur(this.parentElement.parentElement.parentElement)"><i class="fa fa-trash w-[30px] h-[30px] text-red-600"></i></button>
         <button onclick="modifierJoueur(this.parentElement.parentElement.parentElement)"><i class="fa fa-edit w-[30px] h-[30px] text-green-700"></i></button>
        </div>
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
                <span class="ml-[0.4rem] text-shadow-lg">POS</span>
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
     
      
      showAllplzyerSection.appendChild(playerDiv);
  });
}


// //////////////////////////filtrer les joueur
function positionFliter(position,diva){
    temData = Allplayers.filter((player) => player.position.toLowerCase() === position.toLowerCase());
    toggleVisibility(crud_modal)
  
    FiltrerAjouterPoopup(temData)
}

////////////////////////////////



////////////////////////////////


fetch('../../players.json')
  .then(response => response.json())
  .then(data => {
    // console.log(data.players);
 if(!localStorage.getItem("allplayers"))
 {
      localStorage.setItem('allplayers',JSON.stringify(data.players))
 } 
})
.catch(error => console.error('Error fetching JSON:', error));

////afficher tous les joueurs
setTimeout(function() {
  console.log(Allplayers);
  Allplayers = JSON.parse(localStorage.getItem('allplayers'));
  getPlayers(); 
}, 75); 

let changement = [];
if(!localStorage.getItem("changement")){
  localStorage.setItem("changement",JSON.stringify(changement));
}

let terainPlayers = [];
if(!localStorage.getItem("terainPlayers")){
  localStorage.setItem("terainPlayers",JSON.stringify(changement));
}


function remplacerJoueur(element) {

console.log("carad id :", element.id)
let player=changement.filter(p => p.position == element.id)
let p = player.filter(p => p.id == player.id)
element.innerHTML = `
         
      <div class="relative w-[100px] h-[180px] bg-cover bg-center bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
      <div class="absolute top-0 right-0 z-10 w-full flex justify-around">
       <button onclick="suprimerJoueur(this.parentElement.parentElement.parentElement)"><i class="fa fa-trash w-[30px] h-[30px] text-red-600"></i></button>
       <button onclick="remplacerJoueur(this.parentElement.parentElement.parentElement)"><i class="fa-sharp fa-solid fa-arrow-right-arrow-left fa-bounce" style="color: #FFD43B;"></i></button>
       <button onclick="editPlayer(this.parentElement.parentElement.parentElement)"><i class="fa fa-edit w-[30px] h-[30px] text-green-700"></i></button>
      </div>
        <div class="relative flex text-[#e9cc74] px-[0.3rem]">
          <div class="absolute py-[0.8rem_0] text-xs uppercase font-light">
            <div class="text-[1rem] mt-5">${player[0].rating}</div>
            <div>${player[0].position}</div>
            <div class="block">
              <img src="${player[0].flag}" alt="${player[0].nationality}" class="w-[1rem] h-[14px] object-contain" />
            </div>
            <div class="block">
              <img src="${player[0].logo}" alt="${player[0].club}" class="w-[1rem] h-[14px] object-contain" />
            </div>
          </div>
          <div class="w-[70px] h-[80px] mx-auto overflow-hidden">
            <img src="${player[0].photo}" alt="${player[0].name}" class="w-full h-full object-contain relative right-[-1rem] bottom-0" />
          </div>
        </div>

        <div class="w-full flex justify-around text-[#88e635] text-[0.7rem] font-bold uppercase">
          <span class="ml-[0.4rem] text-shadow-lg">${player[0].position}</span>
        </div>

        <div class="relative">
          <div class="text-[#e9cc74] w-[90%] mx-auto">
            <div class="text-center w-[100%] text-[0.6rem] uppercase border-b-2 border-[#e9cc74]/[0.1] ">
              <span class="block text-shadow-lg">${player[0].name}</span>
            </div>
            <div class="flex justify-center ">
              <div class="pr-[1.5rem] border-r-2 border-[#e9cc74]/[0.1]">
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${player[0].pace}</span>
                  <span class="font-light">PAC</span>
                </div>
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${player[0].shooting}</span>
                  <span class="font-light">SHO</span>
                </div>
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${player[0].passing}</span>
                  <span class="font-light">PAS</span>
                </div>
              </div>
              <div>
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${player[0].dribbling}</span>
                  <span class="font-light">DRI</span>
                </div>
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${player[0].defending}</span>
                  <span class="font-light">DEF</span>
                </div>
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${player[0].physical}</span>
                  <span class="font-light">PHY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
console.log("player[0] :", player[0])
}
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
      // console.log("index",typeof(player.id),typeof(id))
      if (player.id == id) {  
        switch (player.position) {
          case 'LW':
              if (div_LW.innerHTML.trim() === '') {
                terainPlayers.push(player);
                localStorage.setItem("terainPlayers",JSON.stringify(terainPlayers))
                div_LW.innerHTML=divCard.innerHTML 
                divCard.remove()
                Allplayers.splice(I,1)
              } else {
                if(changement.filter(p => p.position ==="LW").length < 1){
                  changement.push(player);
                  localStorage.setItem("changement",JSON.stringify(changement))
                  AjouterAu_Changement(divCard)
                }
                
              }
              break;

            
          case 'ST':
                if (div_ST.innerHTML.trim() === '') {
                  terainPlayers.push(player);
                  localStorage.setItem("terainPlayers",JSON.stringify(terainPlayers))
                  div_ST.innerHTML=divCard.innerHTML
                  divCard.remove()
                Allplayers.splice(I,1)

                } else {
                  if(changement.filter(p => p.position ==="ST").length < 1){
                    changement.push(player);
                    localStorage.setItem("changement",JSON.stringify(changement))
                    AjouterAu_Changement(divCard)                
                }  } 
                break;

          case 'RW':
            if (div_RW.innerHTML.trim() === '') {
              terainPlayers.push(player);
              localStorage.setItem("terainPlayers",JSON.stringify(terainPlayers))
              div_RW.innerHTML=divCard.innerHTML;
              divCard.remove()
              Allplayers.splice(I,1)

            } else {
              if(changement.filter(p => p.position ==="RW").length < 1){
                changement.push(player);
                localStorage.setItem("changement",JSON.stringify(changement))
                AjouterAu_Changement(divCard)
          }}
              break;

          case 'CM':
            if (div_CM.innerHTML.trim() === '') {
              terainPlayers.push(player);
              localStorage.setItem("terainPlayers",JSON.stringify(terainPlayers))
              div_CM.innerHTML=divCard.innerHTML;
              divCard.remove()
              Allplayers.splice(I,1)
            } else {
              if(changement.filter(p => p.position ==="CM").length < 1){
                changement.push(player);
                localStorage.setItem("changement",JSON.stringify(changement))
                AjouterAu_Changement(divCard)
            }
          }
              break;

          case 'CML':
            if (div_CML.innerHTML.trim() === '') {
              terainPlayers.push(player);
              localStorage.setItem("terainPlayers",JSON.stringify(terainPlayers))
              div_CML.innerHTML=divCard.innerHTML;
              divCard.remove()
              Allplayers.splice(I,1)

            } else {
              if(changement.filter(p => p.position ==="CML").length < 1){
                changement.push(player);
                localStorage.setItem("changement",JSON.stringify(changement))
                AjouterAu_Changement(divCard)
            }
          }
              break;
          case 'CMR':
            if (div_CMR.innerHTML.trim() === '') {
              terainPlayers.push(player);
              localStorage.setItem("terainPlayers",JSON.stringify(terainPlayers))
                div_CMR.innerHTML=divCard.innerHTML;
                Allplayers.splice(I,1)
                divCard.remove()
            } else {
              if(changement.filter(p => p.position ==="CMR").length < 1){
                changement.push(player);
                localStorage.setItem("changement",JSON.stringify(changement))
                AjouterAu_Changement(divCard)
            }
          }
              break;
          case 'LB':
            if (div_LB.innerHTML.trim() === '') {
              terainPlayers.push(player);
              localStorage.setItem("terainPlayers",JSON.stringify(terainPlayers))
              div_LB.innerHTML=divCard.innerHTML;
              divCard.remove()
              Allplayers.splice(I,1)
            } else {
              if(changement.filter(p => p.position ==="LB").length < 1){
                changement.push(player);
                localStorage.setItem("changement",JSON.stringify(changement))
                AjouterAu_Changement(divCard)
          }
        }
              break;
          
          case 'CBL':
            if (div_CBL.innerHTML.trim() === '') {
              terainPlayers.push(player);
              localStorage.setItem("terainPlayers",JSON.stringify(terainPlayers))
              div_CBL.innerHTML=divCard.innerHTML;
              divCard.remove()
              Allplayers.splice(I,1)
            } else {
              if(changement.filter(p => p.position ==="CBL").length < 1){
                changement.push(player);
                localStorage.setItem("changement",JSON.stringify(changement))
                AjouterAu_Changement(divCard)
          }}
              break;
          case 'CBR':
                  if (div_CBR.innerHTML.trim() === '') {
                    terainPlayers.push(player);
                    localStorage.setItem("terainPlayers",JSON.stringify(terainPlayers))
                    div_CBR.innerHTML=divCard.innerHTML;
                    divCard.remove()
                    Allplayers.splice(I,1)

                  } else {
                    if(changement.filter(p => p.position ==="CBR").length < 1){
                      changement.push(player);
                      localStorage.setItem("changement",JSON.stringify(changement))
                      AjouterAu_Changement(divCard)
                  }}
              break;
          case 'RB':
                if (div_RB.innerHTML.trim() === '') {
                  terainPlayers.push(player);
                  localStorage.setItem("terainPlayers",JSON.stringify(terainPlayers))
                  div_RB.innerHTML=divCard.innerHTML;
                  divCard.remove()
                  Allplayers.splice(I,1)
                }else {
                  if(changement.filter(p => p.position ==="RB").length < 1){
                    changement.push(player);
                    localStorage.setItem("changement",JSON.stringify(changement))
                    AjouterAu_Changement(divCard)
                }}
                break;
          case 'GK':
            if (div_GK.innerHTML.trim() === '') {
              terainPlayers.push(player);
              localStorage.setItem("terainPlayers",JSON.stringify(terainPlayers))
              div_GK.innerHTML = divCard.innerHTML;
              divCard.remove()
              Allplayers.splice(I,1)
              console.log("true",div_GK)
            } else {
              if(changement.filter(p => p.position ==="GK").length < 1){
                changement.push(player);
                localStorage.setItem("changement",JSON.stringify(changement))
                AjouterAu_Changement(divCard)
            }
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
    toggleVisibility(modal_add_player)

  }
  function suprimerJoueur(element)
  {
    console.log('suprimer',element.id);
    element.remove()
    updateLocalStroage(element,"sup")
  }

  ///valider la forme de l'ajouter
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
  }

  
  function addNewPlayer(){
    let newPlayer;
    if(playerPosition.value != "GK"){
       newPlayer = {
        id : Allplayers.length+1,
        name: playerName.value,
        photo : playerImage.value,
        position : playerPosition.value,
        nationality : playerNationality.value,
        flag : playerCountryFlag.value,
        club : playerClub.value,
        logo : playerClubLogo.value,
        rating: parseInt(playerRating.value),
        pace: parseInt(playerPace.value),
        shooting: parseInt(playerShooting.value),
        passing: parseInt(playerPassing.value),
        dribbling: parseInt(playerDriblling.value),
        defending: parseInt(playerDefending.value),
        physical: parseInt(playerPhysical.value),
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
      rating: parseInt(playerRating.value),
      diving: parseInt(playerPace.value),
      handling: parseInt(playerShooting.value),
      kicking: parseInt(playerPassing.value),
      reflexes: parseInt(playerDriblling.value),
      speed: parseInt(playerDefending.value),
      positioning: parseInt(playerPhysical.value),
    }
    }
    updateLocalStroage(newPlayer,"add")
    
  }
  function updateLocalStroage(player,mod){
    if(mod === "sup"){
      const index = Allplayers.findIndex(p => p.id == player.id);
      console.log(index);
      Allplayers.splice(index,1);
      localStorage.setItem("allplayers",JSON.stringify(Allplayers))
      console.log("allplayers",Allplayers)
    }
    else {
      Allplayers.push(player);
      localStorage.setItem("allplayers",JSON.stringify(Allplayers))
      console.log("allplayers",Allplayers)
    }
  }


  ////update player information
const updatePlayerBtn = document.createElement("button");
updatePlayerBtn.className = "text-white bg-[#5ce1e6] px-2 py-1 rounded-md mt-2 focus:outline-none focus:border-none";
updatePlayerBtn.innerText = "Update Player";

var play;
function editPlayer(element) {
  let id = element.id;
  console.log("cardId",id)
  modal.classList.remove("hidden");

    addPlayerBtn.remove()
    addPlayerForm.appendChild(updatePlayerBtn);

    for(let i = 0;i < Allplayers.length;i++){
      if (Allplayers[i].id == id) {
        if(Allplayers[i].position != "GK"){
          playerName.value = Allplayers[i].name;
          playerImage.value = Allplayers[i].photo;
          playerNationality.value = Allplayers[i].nationality;
          playerCountryFlag.value = Allplayers[i].flag;
          playerClub.value = Allplayers[i].club;
          playerClubLogo.value = Allplayers[i].logo;
          playerPosition.value = Allplayers[i].position;
          playerRating.value = Allplayers[i].rating;
          playerPace.value = Allplayers[i].pace;
          playerShooting.value = Allplayers[i].shooting;
          playerPassing.value = Allplayers[i].passing;
          playerDriblling.value = Allplayers[i].dribbling;
          playerDefending.value = Allplayers[i].defending;
          playerPhysical.value = Allplayers[i].physical;
          play = Allplayers[i];
          break;
        }
        
        else{
          playerName.value = Allplayers[i].name;
          playerImage.value = Allplayers[i].photo;
          playerNationality.value = Allplayers[i].nationality;
          playerCountryFlag.value = Allplayers[i].flag;
          playerClub.value = Allplayers[i].club;
          playerClubLogo.value = Allplayers[i].logo;
          playerPosition.value = Allplayers[i].position;
          playerRating.value = Allplayers[i].rating;
          playerPace.value = Allplayers[i].diving;
          playerShooting.value = Allplayers[i].handling;
          playerPassing.value = Allplayers[i].kicking;
          playerDriblling.value = Allplayers[i].reflexes;
          playerDefending.value = Allplayers[i].speed;
          playerPhysical.value = Allplayers[i].positioning;
          play = Allplayers[i];
          break;
        }
      }
    }
    
}
updatePlayerBtn.addEventListener("click",()=>{
  updatePlayerInfo(play)
  Allplayers.splice(Allplayers.findIndex( p => p.id == play.id),1);
  updateLocalStroage(play,"add");
} )


function updatePlayerInfo(player){
  Allplayers.map(p=>{
    if(player.id == p.id){
      if(player.position != "GK"){
        player.name = playerName.value ;
        player.photo = playerImage.value;
        player.nationality = playerNationality.value;
        player.flag = playerCountryFlag.value;
        player.club = playerClub.value ;
        player.logo = playerClubLogo.value;
        player.position = playerPosition.value;
        player.rating = playerRating.value;
        player.pace = playerPace.value;
        player.shooting = playerShooting.value;
        player.passing = playerPassing.value;
        player.dribbling = playerDriblling.value;
        player.defending = playerDefending.value;
        player.physical = playerPhysical.value;
      }
    }
  })
  

}
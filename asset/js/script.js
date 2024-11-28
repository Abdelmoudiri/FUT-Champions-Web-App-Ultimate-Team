const showAllplzyerSection=document.getElementById("allplayerSection");
const divChoisiJoueur=document.getElementById("div_choisi_joueur");
const crud_modal=document.getElementById("crud-modal");
const Div_add_player=document.getElementById("Div_add_player");
const btnClose=document.getElementById("btnClose");
const btnAjouter=document.getElementById("btnAjoute");


const div_LW = document.getElementById("LW");
const div_ST = document.getElementById("ST");
const div_RW = document.getElementById("RW");

const div_CM = document.getElementById("CM");
const div_CM1 = document.getElementById("CM-1");
const div_CM2 = document.getElementById("CM-2");

const div_LB = document.getElementById("LB");
const div_CB = document.getElementById("CB");
const div_CB1 = document.getElementById("CB-1");
const div_RB = document.getElementById("RB");

const div_GK = document.getElementById("Gk");



let Allplayers = [];
let temData=[];
let playerDiv; 

btnAjouter.addEventListener("click",()=>{
  toggleVisibility(crud_modal);
  toggleVisibility(Div_add_player);
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


function FiltrerAjouterPoopup(element, diva) {
  divChoisiJoueur.innerHTML = '';  
  element.forEach(player => {
    playerDiv = document.createElement('div');
    playerDiv.setAttribute('draggable', 'true');
    playerDiv.setAttribute('id', `${player.id}`);  
    playerDiv.setAttribute('onclick',"funcAjouter_Terrain(this,this.id);");  
    playerDiv.className = "relative flex items-center justify-center";
    playerDiv.innerHTML = `
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
    // playerDiv.addEventListener("click", function() {
    //   diva.appendChild(playerDiv);
    // });
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
    FiltrerAjouterPoopup(temData,diva)
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
document.getElementById('ajouterAlocalStorage').addEventListener('click', addPlayerToDatabase);

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
  
    document.getElementById("playerForm").reset();
    
    getPlayers(); 
    toggleVisibility(Div_add_player);
  }
  

  function funcAjouter_Terrain(divCard,id) {
    Allplayers.forEach(player => {

      if (player.id == id) {  
        switch (player.position) {
          case 'LW':
              if (div_LW.innerHTML.trim() === '') {
                div_LW.appendChild(divCard);
              } else {
                AjouterAu_Changement(divCard)
              }
              break;

            
          case 'ST':
                if (div_ST.innerHTML.trim() === '') {
                  div_ST.appendChild(divCard);
                } else {
                  AjouterAu_Changement(divCard)
                }   
                break;

          case 'RW':
            if (div_RW.innerHTML.trim() === '') {
              div_RW.appendChild(divCard);
            } else {
              AjouterAu_Changement(divCard)
          }
              break;
          case 'CM':
            if (div_CM.innerHTML.trim() === '') {
              div_CM.appendChild(divCard);
            } else {
              AjouterAu_Changement(divCard)
          }
              break;
          case 'LB':
            if (div_LB.innerHTML.trim() === '') {
              div_LB.appendChild(divCard);
            } else {
              AjouterAu_Changement(divCard)
          }
              break;
          case 'CB':
            if (div_CB.innerHTML.trim() === '') {
              div_CB.appendChild(divCard);
            } else {
              AjouterAu_Changement(divCard)
          }
              
              break;
          case 'CB':
                  if (div_CB1.innerHTML.trim() === '') {
                    div_CB1.appendChild(divCard);
                  } else {
                    AjouterAu_Changement(divCard)
                  }
              break;
          case 'RB':
                if (div_RB.innerHTML.trim() === '') {
                div_RB.appendChild(divCard);
                }else {
                  AjouterAu_Changement(divCard)
                }
                break;
          case 'GK':
            if (div_GK.innerHTML.trim() === '') {
              div_GK.appendChild(divCard);
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
    playerDiv = document.createElement('div');
    playerDiv.setAttribute('draggable', 'true');
    playerDiv.setAttribute('id', `${joueur.id}`);  
    playerDiv.setAttribute('onclick',"funcAjouter_Terrain(this,this.id);");  
    playerDiv.className = "relative flex items-center justify-center";
    playerDiv.innerHTML = `
      <div class="relative w-[100px] h-[180px] bg-cover bg-center bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
        <div class="relative flex text-[#e9cc74] px-[0.3rem]">
          <div class="absolute py-[0.8rem_0] text-xs uppercase font-light">
            <div class="text-[1rem] mt-5">${joueur.rating}</div>
            <div>${joueur.position}</div>
            <div class="block">
              <img src="${joueur.flag}" alt="${joueur.nationality}" class="w-[1rem] h-[14px] object-contain" />
            </div>
            <div class="block">
              <img src="${joueur.logo}" alt="${joueur.club}" class="w-[1rem] h-[14px] object-contain" />
            </div>
          </div>
          <div class="w-[70px] h-[80px] mx-auto overflow-hidden">
            <img src="${joueur.photo}" alt="${joueur.name}" class="w-full h-full object-contain relative right-[-1rem] bottom-0" />
          </div>
        </div>

        <div class="w-full flex justify-around text-[#88e635] text-[0.7rem] font-bold uppercase">
          <span class="ml-[0.4rem] text-shadow-lg">${joueur.position}</span>
        </div>

        <div class="relative">
          <div class="text-[#e9cc74] w-[90%] mx-auto">
            <div class="text-center w-[100%] text-[0.6rem] uppercase border-b-2 border-[#e9cc74]/[0.1] ">
              <span class="block text-shadow-lg">${joueur.name}</span>
            </div>
            <div class="flex justify-center ">
              <div class="pr-[1.5rem] border-r-2 border-[#e9cc74]/[0.1]">
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${joueur.pace}</span>
                  <span class="font-light">PAC</span>
                </div>
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${joueur.shooting}</span>
                  <span class="font-light">SHO</span>
                </div>
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${joueur.passing}</span>
                  <span class="font-light">PAS</span>
                </div>
              </div>
              <div>
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${joueur.dribbling}</span>
                  <span class="font-light">DRI</span>
                </div>
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${joueur.defending}</span>
                  <span class="font-light">DEF</span>
                </div>
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${joueur.physical}</span>
                  <span class="font-light">PHY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    document.getElementById('Bonne_touche').appendChild(playerDiv);
    
  }

  

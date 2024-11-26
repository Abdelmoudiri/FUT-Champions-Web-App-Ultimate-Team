const showAllplzyerSection=document.getElementById("allplayerSection");


let Allplayers = [];

function toggleVisibility(element) {
    if (element.classList.contains('block')) {
        element.classList.remove('block');
        element.classList.add('hidden');
        setTimeout(() => {
            element.classList.remove('hide');
            element.classList.add('hidden');
        }, 300);
    } else {
        element.classList.remove('hidden');
        element.classList.add('block');
    }
}
function getPlayers() {
    Allplayers.forEach(player => {
  let playeDiv=document.createElement('div');
  playeDiv.className="relative flex items-center justify-cente"
  playeDiv.innerHTML=`<div class="relative w-[150px] h-[220px] bg-cover bg-center  bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
              <div class="relative flex text-[#e9cc74] px-[0.3rem]">
                <div class="absolute py-[0.8rem_0] text-xs uppercase font-light">
                  <div class="text-[1rem] mt-5">97</div>
                  <div >RW</div>
                  <div class="block">
                    <img src="${player.flag}" alt="${player.nationality}" class="w-[1rem] h-[14px] object-contain" />
                  </div>
                  <div class="block">
                    <img src="${player.logo}" alt="${player.club}" class="w-[1rem] h-[14px] object-contain" />
                  </div>
                </div>
                <div class="w-[130px] h-[130px] mx-auto overflow-hidden">
                  <img src="${player.photo}" alt="${player.name}" class="w-full h-full object-contain relative right-[-1rem] bottom-0" />
                 
                </div>
              </div>

               <div class=" w-full flex justify-around text-[#88e635] text-[0.7rem] font-bold uppercase">
                    <span class="ml-[0.4rem] text-shadow-lg">${player.position}</span>
                    <span class="ml-[0.4rem] text-shadow-lg">${player.position}</span>
                </div>

              <div class="relative">
                <div class="text-[#e9cc74] w-[90%] mx-auto">
                  <div class="text-center text-[0.7rem] uppercase border-b-2 border-[#e9cc74]/[0.1] ">
                    <span class="block text-shadow-lg">${player.name}</span>
                  </div>
                  <div class="flex justify-center ">
                    <div class="pr-[1.5rem] border-r-2 border-[#e9cc74]/[0.1]">
                      <div class="flex items-center text-[0.5rem] uppercase">
                        <span class="font-bold mr-[0.3rem]">97</span>
                        <span class="font-light">PAC</span>
                      </div>
                      <div class="flex items-center text-[0.5rem] uppercase">
                        <span class="font-bold mr-[0.3rem]">95</span>
                        <span class="font-light">SHO</span>
                      </div>
                      <div class="flex items-center text-[0.5rem] uppercase">
                        <span class="font-bold mr-[0.3rem]">94</span>
                        <span class="font-light">PAS</span>
                      </div>
                    </div>
                    <div>
                      <div class="flex items-center text-[0.5rem] uppercase">
                        <span class="font-bold mr-[0.3rem]">99</span>
                        <span class="font-light">DRI</span>
                      </div>
                      <div class="flex items-center text-[0.5rem] uppercase">
                        <span class="font-bold mr-[0.3rem]">35</span>
                        <span class="font-light">DEF</span>
                      </div>
                      <div class="flex items-center text-[0.5rem] uppercase">
                        <span class="font-bold mr-[0.3rem]">68</span>
                        <span class="font-light">PHY</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`
showAllplzyerSection.appendChild(playeDiv)

    console.log(player.name);
  });
}
function positionFliter(position){
    let temData = Allplayers.filter((player) => player.position.toLowerCase() === position);
    console.log("haris is", temData);
}


fetch('/players.json')
  .then(response => response.json())
  .then(data => {
    Allplayers = [...data.players];
    console.log(Allplayers);
    getPlayers(); 
})
.catch(error => console.error('Error fetching JSON:', error));

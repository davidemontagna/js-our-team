const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];



const insertMember = document.getElementById("addMemberButton");

insertMember.addEventListener("click", function(){

  const newMember = {
    name:'',
    role: '',
    image: '',
  }
   newMember['name'] = document.querySelector('#name').value;
   newMember['role'] = document.querySelector('#role').value;
   newMember['image'] = document.querySelector('#image').value;

   team.push(newMember);
   console.log(team);
   
  showCardMember();
})


function showCardMember(){
  const card = document.getElementsByClassName("team-container");
  for(i=0; i < team.length; i++){
    card.innerHTML = `<div class="team-card">
                      <div class="card-image">
                        <img
                          src="${team[i][2]}"
                          alt="${team[i][0]}"
                        />
                      </div>
                      <div class="card-text">
                        <h3>${team[i][0]}</h3>
                        <p>${team[i][1]}</p>
                      </div>
                    </div>`
  }
  
}
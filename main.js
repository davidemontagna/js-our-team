/*
Viene fornito un layout di base e un file js in cui è definito un array
di oggetti che rappresentano i membro del team. Ogni membro ha le informazioni
necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell’html,
stampiamo dinamicamente una card per ogni membro del team.

BONUS:
Utilizziamo gli input presenti nella pagina per permettere all’utente di
aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato
un nuovo oggetto, il quale viene inserito nell’array iniziale, e viene stampata
una nuova card con tutte le informazioni inserite dall’utente.
*/

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
let card = document.getElementById("cards-member");

insertMember.addEventListener("click", function(){

  card.innerHTML = "";

  //creo un nuovo oggetto vuoto in cui inserire i dati immessi dall'utente
  const newMember = {
    name:'',
    role: '',
    image: '',
  }
  //assegno il valore a ogni chiave 
   newMember['name'] = document.querySelector('#name').value;
   newMember['role'] = document.querySelector('#role').value;
   newMember['image'] = document.querySelector('#image').value;

   team.push(newMember); //pusho l'object nell'array
   console.log(team);

  showCardMember(team);
})

//Funzione per inserire la nuova card nell'html
function showCardMember(team){
  
  for(i=0; i <= team.length; i++){
    card.innerHTML += `<div class="team-card">
                        <div class="card-image">
                          <img
                            src="${team[i][2]}"
                          >
                        </div>
                        <div class="card-text">
                          <h3>${team[i][0]}</h3>
                          <p>${team[i][1]}</p>
                        </div>
                    </div>`
  }
  
}
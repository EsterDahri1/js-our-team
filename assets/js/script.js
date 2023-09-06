//console.log('ciao');

/*
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
*/

/*
MILESTONE 0: 
Creo array di oggetti forniti
*/

const teamMembers = [
    {
        name: "Wayne Barnett",
        job: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",
        job: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        job: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        job: "Social Media Manager",	
        photo: "angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",	
        job: "Developer",	
        photo: "scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",	
        job: "Graphic Designer",	
        photo: "barbara-ramos-graphic-designer.jpg"
    }
];
//console.log(teamMembers);

const teamMemberDOM = document.querySelector('.member')
console.log(teamMemberDOM);

/*
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
*/
for (let i = 0; i < teamMembers.length; i++) {
    const teamMember = teamMembers[i];
    
    console.log(teamMember.name, teamMember.job, teamMember.photo);

    /*MILESTONE 2:
        Stampare le stesse informazioni su DOM sottoforma di stringhe
      BONUS 1:
        Trasformare la stringa foto in una immagine effettiva
      BONUS 2:
        Organizzare i singoli membri in card/schede*/

    const markup = `
    <div class="col-12 col-md-4">
        <div class="card text-center">
            <img src="./assets/img/${teamMember.photo}" alt="profile photos of team Members">
            <div class="cardBody">
                <h3>${teamMember.name}</h3>
                <p>${teamMember.job}</p>     
            </div>
        </div>
    </div>`

    teamMemberDOM.insertAdjacentHTML('beforeend', markup);
};

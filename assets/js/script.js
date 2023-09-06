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

const teamMember = document.querySelector('.member')
console.log(teamMember);



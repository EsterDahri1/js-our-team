console.log('ciao');

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

//MILESTONE 0: Creo array di oggetti forniti
const teamMembers = [
    {
        name: "Wayne Barnett",
        job: "Founder & CEO",
        photo: ""
    },

    {
        name: "Angela Caroll",
        job: "Chief Editor",
        photo: ""
    },

    {
        name: "Walter Gordon",
        job: "Office Manager",
        photo: ""
    },

    {
        name: "Angela Lopez",
        job: "Social Media Manager",	
        photo: ""
    },

    {
        name: "Scott Estrada",	
        job: "Developer",	
        photo: ""
    },

    {
        name: "Barbara Ramos",	
        job: "Graphic Designer",	
        photo: ""
    }
];
//console.log(teamMembers);

/*MILESTONE 1:
Stampare su console:*/
//le informazioni di nome, ruolo e la stringa della foto

for (const key in teamMembers) {
   console.log(teamMembers[key]);
}


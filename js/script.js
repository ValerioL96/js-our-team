//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.

//1) creo un array di oggeti denominata members con le informazioni (nome,ruolo e foto) di ogni giocatore.
    
    const members = [
        {
            nome: 'Wayne Barnett',
            ruolo: 'Founder & CEO',
            foto: 'wayne-barnett-founder-ceo.jpg'
        },

        {
            nome: 'Angela Caroll',
            ruolo: 'Chief Editor',
            foto: 'angela-caroll-chief-editor.jpg'
        },

        {
            nome: 'Walter Gordon',
            ruolo: 'Office Manager',
            foto: 'walter-gordon-office-manager.jpg'
        },

        {
            nome: 'Angela Lopez',
            ruolo: 'Social Media Manager',
            foto: 'angela-lopez-social-media-manager.jpg'
        },

        {
            nome: 'Scott Estrada',
            ruolo: 'Developer',
            foto: 'scott-estrada-developer.jpg'
        },

        {
            nome: 'Barbara Ramos',
            ruolo: 'Graphic Designer',
            foto: 'barbara-ramos-graphic-designer.jpg'
        }
    ];
	
    console.log(members);
		
//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

//2) creo un ciclo for indice = 0, che sia minore della lunghezza della mia array e che aumeti se stesso di 1:

    for(let i = 0 ; i < members.length ; i++){

//3) creo un ciclo forin per stampare tutte le informazioni, per ogni chiave nell'oggetto members[i] scrive  in console members[i].chiave:

        const singleMember = members[i];
        for (const key in members[i]) {
               console.log(singleMember[key]);
               
//MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe

//4) creo un elemento per collegarlo alla section creata nel file css:
   
           const cardsEl = document.querySelector('section#cards');

//5) creo un elemento per ogni card dei membri:

           const membersCardsEl = document.createElement('article');

//6) collego l'elemento ad una classe creata con css (members-cards):

        membersCardsEl.classList.add('members-cards');  
        membersCardsEl.append(singleMember[key]) 
        cardsEl.appendChild(membersCardsEl);
      }
    }
    

    
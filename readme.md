Consegna:


Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

1) creo un array di oggeti denominata members con le informazioni (nome,ruolo e foto) di ogni giocatore.
    
    - const members = [
        {
            nome: 'Wayne Barnett',
            ruolo: 'Founder & CEO',
            foto: 'wayne-barnett-founder-ceo.jpg'
        }
        {
            nome: 'Angela Caroll',
            ruolo: 'Chief Editor',
            foto: 'angela-caroll-chief-editor.jpg'
        }
        {
            nome: 'Walter Gordon',
            ruolo: 'Office Manager',
            foto: 'walter-gordon-office-manager.jpg'
        }
        {
            nome: 'Angela Lopez',
            ruolo: 'Social Media Manager',
            foto: 'angela-lopez-social-media-manager.jpg'
        }
        {
            nome: 'Scott Estrada',
            ruolo: 'Developer',
            foto: 'scott-estrada-developer.jpg'
        }
        {
            nome: 'Barbara Ramos',
            ruolo: 'Graphic Designer',
            foto: 'barbara-ramos-graphic-designer.jpg'
        }
    ];
			
		
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

2) creo un ciclo for indice = 0, che sia minore della lunghezza della mia array e che aumeti se stesso di 1:

   - for(let i= 0 ; i< members.length ; i++){

3) creo un ciclo forin per stampare tutte le informazioni, per ogni chiave nell'oggetto members[i] scrive  in console members[i].chiave:

    - for( const key in members[i]){
        console.log(members[i].key);
    }
   }

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
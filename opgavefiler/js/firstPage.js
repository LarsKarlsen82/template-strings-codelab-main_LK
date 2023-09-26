/* Opgave 1*/

// din kode her
const FirstName = 'Jens';
const workYearTotal = '5';
let spacer = ' ';

let myGreeting = 'Hej';
let myMessage = myGreeting.concat(spacer, FirstName);

let besked = myMessage + ` , du har nu arbejdet i vores virksomhed i ${workYearTotal} år.`;

let myElement = document.getElementById('message');

myElement.innerHTML = besked;


/* Opgave 2*/

// din kode her

const myData=[
    { "navn": "T-shirt",
    "beskrivelse": "En t-shirt lavet af bomuld",
    "pris": 99 },
    { "navn": "Jeans",
    "beskrivelse": "Blå denim jeans med straight fit",
    "pris": 299
    },
    { "navn": "Hættetrøje",
    "beskrivelse": "En grå hættetrøje med lynlås",
    "pris": 199 }
    ]     

    buildStudentView(myData);

    function buildStudentView(myStudentList) {
        let myInfoElement = document.getElementById('produktListe');

        myStudentList.forEach((myProduct) => {
            let myInfoTemplate = `
                Navn: ${myProduct.navn}<br>
                Beskrivelse: ${myProduct.beskrivelse}<br>
                Pris: ${myProduct.pris}<br><br>
            `;
            myInfoElement.innerHTML += myInfoTemplate;
        });
    }


/* Opgave 3 - skriv videre på koden her: */

// array med person data
const myPersons = [];


// find form elementer
const myForm = document.getElementById('formular');
const submitButton = document.getElementById('indsend-knap');
const personList = document.getElementById('person-liste');

      // Vi tilføjer en klikbegivenhedslytter til knappen
      submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Forhindrer formularen i at blive sendt, så siden ikke genindlæses

        // Her finder vi inputfelterne i formularen
        const myFormFields = myForm.querySelectorAll('input');

        // Vi tilføjer værdierne fra inputfelterne til vores liste med personer
        myPersons.push({
            navn: myFormFields[0].value,
            alder: myFormFields[1].value,
        });

        // Vi sorterer listen efter alder og viser den på siden
        const sorteretMyPersons = sorterEfterAlder(myPersons);
        visListe(sorteretMyPersons);
    });

    // Denne funktion viser listen med personer på websiden
    function visListe(sorteretMyPersons) {
        let html = '';
        sorteretMyPersons.forEach((person) => {
            // Vi opretter et HTML-skabelon for hver person i listen
            html += `<li>${person.navn} er ${person.alder} år gammel.</li>`;
        });
        personList.innerHTML = html; // Vi opdaterer HTML-indholdet i vores liste-element
    }

    // Denne funktion sorterer listen med personer efter alder
    function sorterEfterAlder(myPersons) {
        return myPersons.sort((a, b) => a.alder - b.alder);
    }



  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDQosIiGFx8TSkfy1ixH9fnCegusRGQFzw",
    authDomain: "database-oppgave-1.firebaseapp.com",
    projectId: "database-oppgave-1",
    storageBucket: "database-oppgave-1.appspot.com",
    messagingSenderId: "424240675176",
    appId: "1:424240675176:web:1567bf5ad8de1575827edd",
    measurementId: "G-Q5L99B3JRX"
  };
 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const DB = firebase.firestore();

  const personLISTVIEW = document.querySelector('#personcollect');
  const PersonForm =document.querySelector('#personreg');
  const personCOLLECTION = 'Person';
  
  // getting data (person)
  DB.collection(personCOLLECTION).onSnapshot(snapshot =>{
    const collectionArr = snapshot.docs;
    if(collectionArr.length > 0){
        personLISTVIEW.innerHTML = '';
        collectionArr.forEach(arrelement => {
          element = arrelement.data();
          personLISTVIEW.innerHTML += `
          <li> <span class="person"> ${element.Fornavn} ${element.Etternavn}</span></li>
          `
        });
    }
  });

  const eiendomLISTVIEW = document.querySelector('#eiendomcollect');
  const EiendomForm =document.querySelector('#eiendomreg');
  const EiendomCOLLECTION = 'Eindom';

  // getting data (eiendom)
  DB.collection(EiendomCOLLECTION).onSnapshot(snapshot =>{
  const collectionArr = snapshot.docs;
  if(collectionArr.length > 0){
      eiendomLISTVIEW.innerHTML = '';
      collectionArr.forEach(arrelement => {
        element = arrelement.data();
        eiendomLISTVIEW.innerHTML += `
        <li> <span class="eiendom"> ${element.Adresse} :${element.Eiendomsnummer}</span></li>
        `
      });
  }
});

const kjøretøyLISTVIEW = document.querySelector('#kjøretøycollect');
const kjøretøyForm =document.querySelector('#kjøretøyreg');
const KjøretøyCOLLECTION = 'Kjøretøy';

// getting data (kjøretøy)
DB.collection(KjøretøyCOLLECTION).onSnapshot(snapshot =>{
  const collectionArr = snapshot.docs;
  if(collectionArr.length > 0){
      kjøretøyLISTVIEW.innerHTML = '';
      collectionArr.forEach(arrelement => {
        element = arrelement.data();
        kjøretøyLISTVIEW.innerHTML += `
        <li> <span class="person"> ${element.Kjøretøytype} ${element.Chassinummer} ${element.Eier}</span></li>
        `
      });
  }
});

  // saving data(person)
  PersonForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let Fornavn = document.getElementById("fornavn").value
    let Etternavn = document.getElementById("etternavn").value
    let Fødselsdato = document.getElementById("fødselsdato").value
    let Postnummer= document.getElementById("postnummer").value
    let Postadresse = document.getElementById("postadresse").value
    let Ektefelle = document.getElementById("ektefelle").value
    DB.collection(personCOLLECTION).add({
      Fornavn,
       Etternavn,
       Fødselsdato,
       Postnummer,
       Postadresse,
       Ektefelle,
    });
  });
  
  // saving data(eiendom)
  EiendomForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let Adresse = document.getElementById("adresse").value
    let Eiendomsnummer = document.getElementById("eiendomsnummer").value
    let Areal = document.getElementById("areal").value
    let Kommune = document.getElementById("kommune").value
    let Postnummer= document.getElementById("postnummer").value
    let Poststed = document.getElementById("poststed").value
    DB.collection(EiendomCOLLECTION).add({
      Adresse,
       Eiendomsnummer,
       Areal,
       Kommune,
       Postnummer,
       Poststed,
    });
  });
  

// saving data(kjøretøy)
kjøretøyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let Eier = document.getElementById("eier").value
  let Kjøretøytype = document.getElementById("kjøretøytype").value
  let Vekt = document.getElementById("vekt").value
  let Chassinummer= document.getElementById("chassinummer").value
  let AntallSeter = document.getElementById("antallseter").value
  let Drivstoff = document.getElementById("drivstoff").value
  let Registreringsaar = document.getElementById("registreringsaar").value
  DB.collection(KjøretøyCOLLECTION).add({
    Eier,
     Kjøretøytype,
     Vekt,
     Chassinummer,
     AntallSeter,
     Drivstoff,
     Registreringsaar,
  });
});
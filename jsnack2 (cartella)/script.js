/* 2) snack 2.2
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.*/


const arrName = [
'pippo ',
'flavio ',
'mastro ',
'lollo ',
'andrea '
]

const arrSurname = [
    'geppetto',
    'cassarà',
    'vitale',
    'farollo',
    'pallino'
]

const arrFullName =[]

for(let i = 0; i < arrName.length; i++){
    const Name = arrName[i];
    const randIndex = Math.floor(Math.random()* arrSurname.length);
    const Surname = arrSurname[randIndex];
    const fullName = Name + '' + Surname;
    arrFullName.push(fullName);
}


console.log(arrFullName)

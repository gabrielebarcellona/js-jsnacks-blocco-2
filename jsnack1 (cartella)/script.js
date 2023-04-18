/*1) snack 1.5:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

let myArr =[]

let number ;



for(let i = 0; i< 6; i++){
    number = prompt('dammi un numero')

    if(number % 2 == 1){
        console.log(number)
        myArr[i] = number 
        }
        
    }
    console.log(myArr)


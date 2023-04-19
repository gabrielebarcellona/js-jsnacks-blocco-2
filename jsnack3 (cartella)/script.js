/*Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari*/

const arrNums =[1,4,3,32,5,3,7,21];
let sum = 0

for(let i = 0; i < arrNums.length; i++){
    if(i % 2 == 1){
        sum += arrNums[i]; 
    }
}

console.log(sum)

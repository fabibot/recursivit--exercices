/*
input 8 : >>> [0, 1, 1, 2, 3, 5, 8, 13].
*/

// const { min } = require("lodash");

function fibs(num){
    let n0 = 0;
    let n1 = 1;
    let total = 0;
    let array = []
    for(let i = 0; i < num; i++){
        if(i == 0){
            array.push(0)
        } else if(i == 1){
            array.push(1);
        } else {
        total = n0 + n1;
        array.push(total);
        n0 = n1;
        n1 = total;
        }
    }
    return array;
}
// console.log(fibs(8));
let arrfibs = [];
function fibsRec(num){
    if(num < 2){
        return num;
    } else {
        let x = (fibsRec(num - 1) + fibsRec(num - 2));
        arrfibs.push(x)
        return x;
    }
}
// console.log(fibsRec(8));
// console.log(arrfibs);

let result = [];
function mergeSort(array){
    
    if (array.length > 1){
        midIndex = Math.ceil(array.length /2);

        let array1 = array.slice(0, midIndex);
        let array2 = array.slice(midIndex, array.length);
        mergeSort(array1);
        mergeSort(array2);
    } else {
        if(result[0] == null){
            result.push(array[0]);
        } else {
            let index;
            for(let i = 0; i <= result.length; i++){
                if(array[0] > result[i]){
                    index = i + 1;
                }
                if(array[0] == result[i]){
                    index = i;
                    result.slice(index, 0, array[0]);
                    break;
                }
            }
            if(!index){
                result.splice(0, 0, array[0]);
            } else {
                result.splice(index, 0, array[0]);
            }
        }
    }
    return result;
}
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));

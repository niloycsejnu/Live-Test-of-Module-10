
//1) Create a function that takes voltage and current and returns the calculated power.

function circuitPower(voltage,current){
    let power = voltage*current;
    return power;
}
console.log(`The power is ${circuitPower(110,3)}`);


//2) Write a JavaScript function named ‘findMaxNumber’ that takes an array of numbers as an argument and returns the maximum number in the array. If the array is empty, the function should return null.

function findMaxNumber(numbers){
    if(numbers.length === 0){
        return null;
    }
    let maxNum = numbers[0];
    for(let i=0; i<numbers.length;i++){
        if(numbers[i]>maxNum){
            maxNum = numbers[i];
        }
    }
    return maxNum;
}
console.log(`Maximum number is ${findMaxNumber([2,-5,12,5,7])} for [2,-5,12,5,7]`);
console.log(`Maximum number is ${findMaxNumber([-22,-35,-12,-5,-7])} for [-22,-35,-12,-5,-7]`);
console.log(`${findMaxNumber([])} for Array is empty`);


//3) Write a JavaScript function named ‘mergeArrays’ that takes two arrays as arguments and returns a new array.

function mergeArrays(array1,array2){
    newArray = array1.concat(array2);
    return newArray;
}
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let newArr = mergeArrays(arr1,arr2);
console.log(`New Array is [${newArr}]`);


//4) Create a function ‘arrayValuesTypes’ that takes an array and returns the types of values (data types) in a new array. 

function arrayValuesTypes(array){
    let typesOfArray = [];
    for(let i=0;i<array.length;i++){
        let type = typeof array[i];
        if(type === 0){
            type = null;
        }
        typesOfArray.push(type);
    }
    return typesOfArray;
}
console.log(arrayValuesTypes([1, 2, "null", []]));
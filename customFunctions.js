
const customMap = (array, callback) =>{
    let resultArray = [];

    for(let index = 0; index < array.length; index++){
        resultArray.push(callback(array[index], index, array))
    }
    return resultArray;
}





const customFilter = (array, callback) => {
    let resultArray = [];

    for(value of array){
        if(callback(value)){
            resultArray.push(value);
        }
    }
    return resultArray;
}





const customForEach = (array, callback) => {

    for(let index = 0; index < array.length; index++){
         callback(array[index], index, array)
    }
}





const customReduce = (array,callback,intitialValue = 0) => {
    let resultValue = intitialValue;
    
    for(value of array){
        resultValue = callback(resultValue, value);
    }
    return resultValue;
}





// 1. custom map function

let numbers = [4,2,8,5,3]
const square = (num) => {
    return num * num;
}

let squaredNumbers = customMap(numbers,square);
console.log(squaredNumbers)



// 2. custom filter function

let integers = [6,3,7,8,10,24,56,23,87];
const isEven = (num) => {
    return num % 2 === 0;
}

let evenNumbers = customFilter(integers, isEven)
console.log(evenNumbers)



// 3. custom forEach function

let marks = [96, 87, 93, 63, 75, 89];
const displayMarks = (marks) => {
    console.log(marks)
}

customForEach(marks, displayMarks);



// 4. custom reduce function

let money = [50,200,20,500,20,10,50,100,500]
const sum = (accumulator, currentValue) => {
    return accumulator + currentValue
}

let totalMoney = customReduce(money, sum);
console.log(totalMoney);

console.log(customReduce(money, sum, 50))   // initial value is 50 here

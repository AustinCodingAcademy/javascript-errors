const names = ["Jon","Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];
const myNumbers = [4,3,55,22,99,1913,7,5,4,2,1];


function findThree(name){
  return name.length === 3;
}

function filter(theArray, fnc){
  let newArr = [];
  for (let i = 0; i < theArray.length; i++) {
    if(fnc(theArray[i])) {
      newArr.push(theArray[i]);
    }
  }
  return newArr;    
}

let result = filter(names,findThree);
console.log(result);
// ********************************************************************** */
// //?  tar 1

function valid_id() {

    let res=prompt("enter valid id number (9 digit)","example: 024594038");

    if(!res) {
        return false;
    }

    if(res.length!=9) {
        return false;
    }

    for(let i=0;i<9;i++) {
        if(res.charAt(c)<'0' || res.charAt(c)>'9') {
            return false;
        }
    }
    return true;

}

console.log(valid_id());

//********************************************************************** */
//?  tar 2

function isPrime(num) {
  let i;
  if (num == 0 || num == 1) return true;

  for (i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
let result = isPrime(14);
console.log(result);

//********************************************************************** */
//?  tar 3

function addSpaceBeforeUpperChar(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      newStr += " ";
      newStr += str[i];
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

let res = addSpaceBeforeUpperChar("abCdEf");
console.log(res);



//********************************************************************** */
//?  tar 4


function countInStr(str1, str2) {
  let itr_ar = str1.matchAll(str2);
  let count=0;

  //TODO ask Ben about iterator
  itr_ar.forEach((item)=>{
    count++;
  });
  console.log(count)
}
  

countInStr("eli eli", "eli");

//********************************************************************** */
//?  tar 5  sort string
//*  the function change the string to lowercase before sorting:

function sortStr(str) {
    const str_ar=str.split("");
    let n= str.length-1;

    for(let j=0, i=0;j<n-1;j++,i++) {
        if(str_ar[j]>str_ar[j+1]) {
            let temp=str_ar[j];
            str_ar[j]=str_ar[j+1];
            str_ar[j+1]=temp;
        }
    }
    return str_ar.join("");
}


let myString="abab";
console.log(sortStr(myString.toLowerCase()))

//********************************************************************** */
//?  tar 6  
// common calculator 
/*## calculator 

- index.html
- js/main.js
- css/style.css*/










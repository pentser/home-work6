// ********************************************************************** */
// //?  tar 1

// function valid_id() {

//     let res=prompt("enter valid id number (9 digit)","example: 024594038");

//     if(!res) {
//         return false;
//     }

//     if(res.length!=9) {
//         return false;
//     }

//     for(let i=0;i<9;i++) {
//         if(res.charAt(c)<'0' || res.charAt(c)>'9') {
//             return false;
//         }
//     }
//     return true;

// }

// console.log(valid_id());

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

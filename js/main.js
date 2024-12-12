
let $input = document.querySelector(".input input");

let $row1 =document.querySelector(".row1");
let $row2 =document.querySelector(".row2");
let $row3 =document.querySelector(".row3");
let $row4 =document.querySelector(".row4");

let operator="";
let operandX=0;
let operandY=0; 

$row1.addEventListener("click",(e)=> {
    console.log(e.target.id);
    $input.value+=e.target.id;
    if(e.target.id=="+") {
        operator=e.target.id;
    }

})
$row2.addEventListener("click",(e)=> {
    console.log(e.target.id);
    $input.value+=e.target.id;
    if(e.target.id=="-") {
        operator=e.target.id;
    }

})
$row3.addEventListener("click",(e)=> {
    console.log(e.target.id);
    $input.value+=e.target.id;
    if(e.target.id=="*") {
        operator=e.target.id;
    }

})
$row4.addEventListener("click",(e)=> {
    console.log(e.target.id);
    // if(e.target.id=="/") {
    //     operator="/";
    // }
     if(e.target.id=="=") {
        calculate($input.value);
    }
    else if(e.target.id=="C")
    //? delete last character;
    $input.value=$input.value.slice(0,-1);
    else {
        //? the / operator
        operator="/";
        $input.value+=e.target.id;
    }


})


function calculate(expretion) {
    let operands_ar=expretion.split(operator);
    let operandX=Number(operands_ar[0]); 
    let operandY=Number(operands_ar[1]);
    let result;
    switch(operator) {
        case "+":
            result=operandX + operandY;
            break;
        case "-":
         result=operandX - operandY;
         break;

         case "*":
            result=operandX * operandY;
            break;

        case "/":
            if(operandY==0)     {
                alert("Cant divide by zero!!!");
                operandX=0;
                operandY=0;
                operator=""
                $input.value="";
                return;
            }
            else 
            {
                result=operandX / operandY;
            }
        break;
    }

   
    alert(result);
    operandX=0;
    operandY=0;
    operator=""
    $input.value="";



}








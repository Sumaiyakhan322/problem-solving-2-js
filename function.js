//1-------3 friends number is given .Find there grade
function grade(number){
    if(number>=80){
        console.log("you have got A Grade");
    }
    else if(80>number &&number>=60){
        console.log("you have got B Grade");
    }
    else if(60>number &&number>=50){
        console.log("you have got C Grade");
    }
    else if(50>number &&number>=40){
        console.log("you have got B Grade");
    }
    else if(number<40){
        console.log("you have failed the exam");
    }
    return number;
}

var myNumber=85;
var tomNumber=66;
var janeNumber=30;
grade(myNumber);
grade(janeNumber);
grade(tomNumber);

//2------------Find the largest number of given 3 numbers (13,79,45)

function largestNumber(a,b,c){
    if(a>b && a>c){
        console.log(a+" The largest number");
    }
    else if(b>c && b>a){
        console.log(b+" The largest number");
    }
    else{
        console.log(c+" The largest number");
    }
    return a,b,c;
}
largestNumber(13,79,45);


//3--------------Find is a triangle is isosceles or not

function isIsosceles(a,b,c){
    if(a==b || b==c || c==a){
        console.log("The triangle is isosceles");
    }
    else{
        console.log("The triangle is not isosceles");
    }
    return a,b,c;
}
isIsosceles(8,8,9);


//4-------------Find the avg of 5 numbers given in array

function avgOfArray(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum +=arr[i];
      var  avg=sum/(arr.length);
    }
   return avg;
    
}
var myNumbers=[75.25,65,80,35.45,99.50];
var myAvg=avgOfArray(myNumbers);
console.log(myAvg.toFixed(2));


//5------------find remainder 
function findRemainder(myNumber){
    let remainder=myNumber%5;
    return remainder;
}
var myGivenNumber=119;
var myRemainder=findRemainder(myGivenNumber);
console.log(myRemainder);

//6------write a function called foo() that prints foo , also write a function named bar() that prints bar .Call function bar() in the foo() after printing .Now call the foo( ) to see the result.
function bar(){
    console.log("bar");
}
function foo(){
    console.log("foo");
    bar();
}
foo();

//7----------Write a function called odd_even() which takes an integer and fin whether it is add or even
function odd_even(number){
    if(number%2==0){
        console.log("The given integer is even");
    }
    else if(number%2!=0){
        console.log("The integer is odd");
    }
    else{
        console.log("The number is zero");
    }
}
odd_even(66);


//8---------use switch for crossing the roads
let color='yellow';
switch(color){
    case 'red':
        console.log("Danger");
        break;
    case 'yellow':
        console.log("Stop");
        break;
    case 'green':
        console.log("Cross th road");

}

//9---convert inch to feet
function convertToFeet(inch){
    let feet=inch/12;
    return feet;
}
let hight=84;
let inch=convertToFeet(hight);
console.log(hight+" inch is "+inch +" feet");

//10--------miles to kilometer
function milesTokilometer(miles){
    let kilometer=miles*1.609;
    return kilometer;
}
let givenMiles=1234;
let givenMilesToKilometer=milesTokilometer(givenMiles);
console.log(givenMiles+" Miles is " +givenMilesToKilometer+" Kilometer");
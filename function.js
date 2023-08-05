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




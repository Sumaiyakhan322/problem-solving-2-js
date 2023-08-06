//1---------- swap numbers
let first = 5;
let second = 7;
console.log(first, second);
const temp = first;
first = second;
second = temp;
console.log(first, second);
// swap with array destructing
[first,second]=[second,first];
console.log(first,second);

//2------- ludu game
for (let i = 0; i < 20; i++) {
    const random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
  }

//3----- who will be topper (2 persons)
const jim=90;
const dela=80;
if(jim>dela){
    console.log("Jim is the topper");
}
//4----- who will be topper (3 presons)
const mitu=90;
const mela=77;
const habin=88;
if(mitu>mela && mitu>habin){
    console.log("mitu is the topper");
}
else if(mela>mitu && mela>habin){
    console.log("mela is the topper");
}
else{
    console.log("habin is the topper");
}

//5---a function that takes 3 parameters and return max number also min number
function maxNumber(a,b,c){
    console.log(Math.max(a,b,c));
}
function minNumber(a,b,c){
    console.log(Math.min(a,b,c));
}
maxNumber(23,45,88);
minNumber(2,8,10)
//6-------- a function that takes a array and find the tallest person
function findTheTallest(arr){
    let largest=arr[0];
    for(i=0;i<arr.length;i++){
        let element=arr[i];
        if(element>largest){
            largest=element;
        }
    }
    return largest;
    

}
const heights=[12,46,767,645,444,100];
const tallest=findTheTallest(heights);
console.log("The tallest: ", tallest);

////7-------- a function that takes a array and find the lowest person
function findLowest(arr){
    let lowest=arr[0];
    for(i=0;i<arr.length;i++){
        let element=arr[i];
        if(element<lowest){
            lowest=element;
        }

    }
    return lowest;
}
const height2=[20,48,459,9,67,3];
const lowestHeight=findLowest(height2);
console.log("The lowest is: ",lowestHeight);
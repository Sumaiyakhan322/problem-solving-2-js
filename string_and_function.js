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
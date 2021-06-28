let Array=[1,2,3];
let newvalue=4;
letmidvalue=0;
if(Array.length%2){
midvalue=(Array.length-1)/2}
else{
midvalue=Array.length/2}
for (let i=0;i<Array.length;i++){
Array2.push(Array[i]);
if(i==midvalue){
Array2.push(newvalue)}
}
// expected outpot [1,2,4,3]
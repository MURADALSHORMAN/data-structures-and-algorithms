let findFibo=(number)=>{
  let initvalue0=0;
  let initvalue1=1;
  let sum=0;
  let fiboArry=[];

  if(fiboArry.length==0){
   
    fiboArry.push(0);
    fiboArry.push(1);
   }
  
  if(fiboArry.length==2){
    fiboArry.push(1);
  }
  ///fiboArry=[0,1,1]

  if (number<2){
    return fiboArry[number]
  }
  

  for(let i=2;i<number;i++){
  sum=fiboArry[i]+fiboArry[i-1];
  fiboArry.push(sum);
  }
  return fiboArry[number];

}

console.log(findFibo(45));
console.log(findFibo(14));
console.log(findFibo(8));




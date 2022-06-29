// 1.Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"

for ( var i = 1; i <= 100; i++){
  if (i%3===0){ 
    console.log("Fizz");
     }
  else if (i%5 ===0){
      console.log("Buzz");
       }
  else  if (i%3 === 0 && i%5 ===0){
        console.log("FizzBuzz");
         }

  else{
       console.log(i);
         }
}

// 2.Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
let sum=0;
for(var i=0;i<1000;i++){
  if (i%3 === 0 && i%5 ===0){
     }
     sum+=i
}
console.log(sum);


// 3Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

for(var i=0;i<21;i++){
  if (i%2===0){
     console.log(i ,"is even");  
  }
  else{
    console.log(i,"is odd");
   }  
}



// 4.Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]

let num=[-2,4,-5,6,0];
var largest=num[0];
for(var i=0;i<num.length;i++){
  if (num[i]>largest){
    largest=num[i];
  }
}
console.log(largest)
 


// 5.Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40

function largest1(o,p){
if (o>p){
console.log(o)
}
else{
  return p
}

}
console.log(largest1(10,40))



// 6.Write a JavaScript program to find leap years from 2000 to 2022

  for (i =2000;i<=2022;i++){
    if ((i%4===0 && i%100!==0) || (i%100===0 && i%400===0)){
      console.log(i);

       }
        else{
        console.log(false);
   }
  }
  
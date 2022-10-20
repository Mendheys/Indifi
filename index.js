// 1. Given unsorted integer Array, find a pair with the given Sum in it. Example: Number:
// [5,3,2,4,8,10], Goal: 12. Output: {8,4}, {10,2}

let arr = [5,3,2,4,8,10];
let N = arr.length;
let goal = 12
arr.sort((a,b) => a-b)


function Twosum(N,k,arr){

   
    let i = 0, j = N-1;
   
    while(i < j)
    {
       
       if(arr[i]+arr[j] === k)
       {
        console.log(arr[i], arr[j]);
         break
         
       } 
       else if(arr[i]+arr[j] > k)
       {
           j--;
       }
       else
       {
           i++;
       }    
    }


     
 }
Twosum(N,goal,arr)

//puzzle


// 2.There are 1000 wine bottles. One of the bottles contains poisoned wine. A
// rat dies after one hour of drinking the poisoned wine. How many minimum
// rats are needed to figure out which bottle contains poison in hour.

let answer1 = "10 Rats"

// 1. How do we measure forty-five minutes using two identical wires, each of
// which takes an hour to burn? We have matchsticks with us. The wires burn
// non-uniformly. So, for example, the two halves of wire might burn in 10
// minutes and 50 minutes respectively
let answer2 = " Initally if we light the 1st wire with both the ends and light the second wire with only one end then 1st wire will completely burn in 30minutes, and when 1st wire completely burn immidetialy brun the second wire other end then it will take another 15minutes to completely burn hence this way 45minutes are calculated"
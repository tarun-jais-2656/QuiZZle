
export const generateQuestion=(difficulty="easy")=>{
   const operations=["+","-","*","/"]
   const operation=operations[Math.floor(Math.random()*operations.length)];
   let num1=Math.floor(Math.random()*10+1);
   let num2=Math.floor(Math.random()*10+1);

   if(difficulty==='medium'){
    num1 *=10;
    num2 *=10;
   }else if(difficulty==='hard'){
    num1 *=100;
    num2 =num2=== 0 ? 1 : num2;  //avoid devide by zero
   }

   const question=`${num1}${operation}${num2}`;
   const answer=eval(question).toFixed(2);

   return {question,answer};
}
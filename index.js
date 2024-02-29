
// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
   "Please enter some integers separated by commas.",
 "1,2,3,4,5"
);
//userInputString = "Vanilla,Vanilla,Vanilla,Strawberry,Coffee,Coffee"
// Split the string of numbers into an array of strings.
const iceCreamType = userInputString.split(',');

console.log(iceCreamType);
 
function typetotal(iceCreamType){
const amount = {};
for (creamType of iceCreamType)
{
      if  (amount[creamType]===undefined)
        amount[creamType]=1;
      else 
       amount[creamType]=amount[creamType]+1
}
      console.table(amount) ; 
};
typetotal(iceCreamType);
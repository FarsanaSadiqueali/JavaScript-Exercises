/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */


var first=(input,n)=>{
  if(n==null)
    return input[0];
  else if(n>0)
    {
      return input.slice(0,n);
    }
  else
    return input.slice(0,0);
};
console.log(first([7,9,0,-2]));
console.log(first([7,9,0,-2],3));
console.log(first([7,9,0,-2],6));
console.log(first([7,9,0,-2],-2));

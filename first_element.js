/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */


var last=(input,n)=>{
  if(n==null)
    return input[input.length-1];
  else if(input.length<n)
    {
      return input;
    }
  else
    return input.slice(input.length-n,input.length);
};
console.log(last([7,9,0,-2]));
console.log(last([7,9,0,-2],3));
console.log(last([7,9,0,-2],6));

/*
Exception: ReferenceError: lastt is not defined
@Scratchpad/1:18:1
*/
/*
Exception: ReferenceError: lastt is not defined
@Scratchpad/1:18:1
*/
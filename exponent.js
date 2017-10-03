/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
var exponent = function(a, n) {
   if (a === 1)  
     return 0;
  else 
  { 
    
    return 1+exponent (a/n,n);  
  }
 
};

console.log(exponent(1024,2));
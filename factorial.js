/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
console.log(factorial(5))
function factorial(element)
{
  if(element==0)
    {
      return 1;
    }
else
  {
    return element*factorial(element-1)
  }
 
}
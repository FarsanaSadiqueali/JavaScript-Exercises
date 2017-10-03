/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function range(first,last)
{
  var s=[];
  if(first===last-2)
    {
      return last-1;
    }
  else
    {
   return first+1+'  '+range(first+1,last);
      
    }
  
}
console.log(range(2,9))

/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
function fib(n)
{
  var s=[];
  if(n==0)
    {
      return [0];
    }
    else if(n==1)
      {
        return s.push(1);
      }
  else
      {
        var s =fib(n-1);
    s.push(s[s.length-1]+s[s.length-2])
      return s;
      }
      
    
}
console.log(fib(9));



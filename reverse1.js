/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
var arr=[0,1,2,3,4,5,6]
console.log(br_search(5));
function br_search(num)
{
  var mid=Math.floor((arr.length+last)/2);
  
  if(mid===num)
    {
      return arr.indexOf(num)
      
    }
  else if(mid>num)
    {
      br_search(num);
    }
  else
    {
      br_search(num);
    }
}
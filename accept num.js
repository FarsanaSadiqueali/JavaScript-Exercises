/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */


var splitStrings=(number)=>{
  var numString=number.toString();
  var result=[];
  var i;
  for(i=0;i<numString.length;i++)
    {
      if(numString[i]%2==0 && numString[i+1]%2==0)
        {
         result +=numString[i]+'-';
        }
      else
        result +=numString[i];
    }
 return result;
                 };

console.log(splitStrings('2347586'));



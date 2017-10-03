/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
var numeric=(num)=>{
  var sum=0;
  var product=1;
num.forEach(function(element){
  sum =sum+element;
  product =product*element;
});
console.log('Sum:'+sum)
  console.log('Product:'+product)
}
numeric([2,3,4,5]);



/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/1:16
*/
/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/1:16
*/
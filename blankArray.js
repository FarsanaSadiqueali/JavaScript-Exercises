/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
var array=[1,2,2,3,4,5,2,3,1,5,7,9]
function duplication(array){
  for(var i=0;i<array.length;i++){
for(var j=i+1;j<array.length;j++)
  {
  if(array[i]===array[j])
    array.splice(j,1)
}
}
  console.log(array)
}
duplication(array);



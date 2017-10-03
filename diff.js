/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
function diff (array1,array2){
   var diff1=[];
   var diff2=[];
   var difference= array1.filter(x => array2.indexOf(x) == -1) .concat(array2.filter(x => array1.indexOf(x) == -1))
  
  
    return difference;
}

console.log(diff([1,2,3,1],[100,2,1,10]));


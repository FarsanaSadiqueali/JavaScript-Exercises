/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */


var array_Clone=(input)=>{
  return input.slice(0);
};
console.log(array_Clone([1,2,4,0]));
console.log(array_Clone([1,2,[4,0]]));

/*
Exception: TypeError: array_Clone.slice is not a function
array_Clone@Scratchpad/1:12:10
@Scratchpad/1:14:13
*/
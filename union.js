/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */


function union (array1,array2){
    var i=0;
    var j=0;
    var set=0
    array1.forEach(function(element1){
               array2.forEach(function(element2){
                   if(element1===element2)
                       {
                          array2.splice(i,1);
                          set=1;
                       }
                    i++;
               });
        if(set===1)
            {
                array1.splice(j,1);
                set=0;
            }
        j++;
       
               });
    return array1;
}
console.log(union([1,2,3,1],[100,2,1,10]));

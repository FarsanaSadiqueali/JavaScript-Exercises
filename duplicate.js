/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
function duplicate(element){
   var dup=[];
    var s=0;
    for(var i=0;i<element.length;i++)
        {
            for(var j=i+1;j<element.length;j++)
                {
                    if(element[i]===element[j])
                        {
                             console.log(element[j]);
                            element.splice(j,1);
                           
                        }
                }
        }
 
}
duplicate([1,2,4,3,2,4,5,6,1])


/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
var array1=[1,0,2,3,4];
var array2=[3,5,6,7,8,13];
function sum_array(array1,array2){
    var sum=[];
    var a1=array1.length;
    var a2=array2.length;
    for( var i=0;i<array1.length;i++)
        {
            sum[i]=array1[i]+array2[i];
        }
    if(a1<a2)
        { 
            var s=a2-a1;
            for(var i=s;i>0;i--)
                {
            sum[a2-i]=array2[a2-i]
                }
        }
    else
        
        {
            var s=a1-a2;
            for(var i=s;i>0;i--)
                {
                     sum[a1-i]=array1[a1-i]
                }
           
        }
    return sum;
}
console.log(sum_array(array1,array2));
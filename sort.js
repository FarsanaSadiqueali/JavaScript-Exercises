/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
var arr1=[3,'a','a','a',2,3,'a',3,'a',2,4,9,3];

var frequent=(arr1)=>{
var sample;
  var a=0;
var b=1;
  var i,j;
  for(i=0;i<arr1.length;i++)
    {
     for(j=i;j<arr1.length;j++)
           if(arr1[i]==arr1[j])
            a++;
            if(b<a)
              {
                b=a;
                var item=arr1[i];
              }
           }
  a=0;
       }
    


frequent(arr1);
console.log(""+item""+b);


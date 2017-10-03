/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
var color=["Blue","Green","Red","Orange","Violet","Indigo","Yellow"];
var o=["th","st","nd","rd"];
function colors(color,o){
  var o1;
    for(var i=1;i<=color.length;i++)
  {
    var j=i-1;
    var check=i%10;
    switch(check)
      {
        case 1:
          {
            o1=o.slice(1,2);
             break;
          }
             
        case 2:
          {
            o1=o.slice(2,3)
              break;
          }
              
        case 3:
          {
             o1=o.slice(3,4);
          break;
          }
             
        default:
          {
             o1=o.slice(0,1);
          break;
          }
             console.log(o1);
          return o1;
          
      }
      console.log(i+o1+" choice is "+color[j]);
  }

}
colors(color,o);

/*
Exception: SyntaxError: missing ; before statement
@Scratchpad/1:16
*/
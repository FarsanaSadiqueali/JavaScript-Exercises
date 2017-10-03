/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
var items=[1,2,3,4,5,7,8,9]
var binary_Search=(items,input)=>{ 
    var last=items.length-1;
    var firstIndex=0;
  var mid=Math.floor((firstIndex+last)/2);
 while(items[mid]!=input && firstIndex<last)
     {
         if(items[mid]>input)
             {
                 last=mid-1;
             }
         else
                 last=mid+1;
             }
        mid=Math.floor((firstIndex+last)/2);
     }
    return mid; 
}
console.log(binary_Search(items,1));
console.log(binary_Search(items,5));




/*
Exception: SyntaxError: return not in function
evalWithDebugger@resource://gre/modules/commonjs/toolkit/loader.js -> resource://devtools/server/actors/webconsole.js:1378:16
onEvaluateJS@resource://gre/modules/commonjs/toolkit/loader.js -> resource://devtools/server/actors/webconsole.js:894:20
onEvaluateJSAsync@resource://gre/modules/commonjs/toolkit/loader.js -> resource://devtools/server/actors/webconsole.js:865:20
onPacket@resource://gre/modules/commonjs/toolkit/loader.js -> resource://devtools/server/main.js:1799:15
receiveMessage@resource://gre/modules/commonjs/toolkit/loader.js -> resource://devtools/shared/transport/transport.js:761:7
*/
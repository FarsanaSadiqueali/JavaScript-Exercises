/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
var leapYear=(year)=>{
 
      if(year%4!=0)
        {
           console.log('Common year');
        }
    else if(year%100!=0)
       {
         console.log('Leap Year');
       }
  else if(year%400!==0)
    {
      console.log('Common Year')
    }
  else
    {
      console.log('Leap year')
    }
  
}
leapYear(2200);


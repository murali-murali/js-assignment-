Assignment 1



<!doctype html>



    
    <html> 
        
        <head>
    
 <script> 
     function odd_even()
     { var no=Number(document.getElementById("no_input").value); 

if(no%2==0)
 { 
alert("Even Number"); 
} else 
{ 
alert("Odd Number"); 
} } 
</script> 
        </head>
        <body> Enter Any Number:<input id="no_input"><br /> <button onclick="odd_even()">Click me</button> </body> 
    
    
    </html>



Assignment 2 
<!DOCTYPE html>

<html>
    <head>
        <meta http-equiv="CONTENT-TYPE" content="text/html; charset=UTF-8">
        <title>day 3</title>
    </head>
    <body>
        <h1>
            Assignment 2
        </h1>
    </body>
    
    <script> 
        var os =  prompt(" Type a os name ");
        var version= prompt(" Type a veraion");
   
       console.log(" Os name" +os +" version  is" + version );
    
    </script>
</html>


 Assignment 3 

<!DOCTYPE html>

<html>
    <head>
        <meta http-equiv="CONTENT-TYPE" content="text/html; charset=UTF-8">
        <title> Day 3</title>
    </head>
    <body>
        <h1>
           Assignment 3
        </h1>
        
   <script> 
       var mark= prompt("enter a mark");
       
       
switch (mark) {
   case "90": console.log(" your mark is"+ mark+ "and grade is s ");
             break;
    case "80" : console.log( " your mark is"+ mark+ "and grade is A ");
              break;
    case "70" : console.log(" your mark is"+ mark+ "and grade is B");
              break;
     case " 60" : console.log(" your mark is"+ mark+ "and grade is C ");
               break;
     case "50": console.log( " your mark is"+ mark+ "and grade is D ");
               break;
      default: console.log(" enter a valid mark ");
     

}
   </script>
    </body>
</html>


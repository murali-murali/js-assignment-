<!DOCTYPE html> // ass3//

<html>
    <head>
        
        <title> data types </title>
    </head>
    <body>
        <h1> Primitive Data 
            Types</h1>

String

Number

Boolean

Null

Undefined

 <h1>Non-primitive Data Type</h1>

Object

Date

Array
 
  <script>
       var value= 14 ; /*any type of number can be stored
      ex.float,double...etc*/
       var string = " murali";
       var Boolean= true;
      var data= null;
        
      
  </script>

            
        
    </body>
</html>
 //ass2

<!DOCTYPE html>

<html>
    <head>
 
        <title> seconday</title>
    </head>
    <body> <h1> var --variables can be updated and re-declared within its scope; </h1>
        <h1 >let --variables can be updated but not re-declared; </h1>
      <h1> const-- variables can neither be updated nor re-declared; </h1>
        <script>
            var name = " murali";
            console.log(name );
            
            { let name = " vijay";
     console.log(name);
/* only access in inside the brace 
*/
 
}

const id=10;
console.log(id);
   /* id value does not change 
*/
            
console.log(name);// global declaration for var 
            
        </script>
        
    </body>
</html>

// ass 3 

<!DOCTYPE html>

<html>
    <head>
        <meta http-equiv="CONTENT-TYPE" content="text/html; charset=UTF-8">
        <title>Day 2</title>
    </head>
    <body>
  <script>
      console.log("hiii");
      console.log("This is the outer level");
      console.group("First group"); 
      console.log("In the first group"); 
      console.group("Second group"); 
      console.log("In the second group"); 
      console.warn("Still  the second group"); 
      console.groupEnd(); 
      console.log("Back to the first group"); 
      console.groupEnd();
      console.debug("Back to the outer level");
     </script>
       
    </body>
</html>


Day 2
Assi1

<!DOCTYPE html>

<html>
    <head>
        
        <title>input from user</title>
    </head>
    <body>
        <h1>
            enter your name
        </h1>
        
        <script>
            var myInput = prompt("Please enter your name");

            console.log(myInput);
            console.log("Log in successfully");
        </script>
    </body>
</html>
  


Assi2

<!DOCTYPE html>

<html>
    <head>
        
        <title>Array and String </title>
    </head>
    <body>
        <h1>
            Array and String remaining 
        </h1>
        <script> 
        var animal=[" lion", "tiger ","fox"];
          console.log(animal);
         animal.push("horse");
         console.log(animal);
         console.log(animal-1);
         console.log(animal[0]);
         console.log(animal[1]);
         console.log(animal[2]);
         console.log(animal.length);  
            
      var fruits;
fruits = ["Banana", "Orange", "Apple", "Mango"];
            
    console.log(fruits);
    console.log(fruits.length);

var Arr=[];
  Arr[0]=" kumar";
  Arr[1]= 24;
  Arr[2]="tamil nadu";
   console.log(Arr);
  
   </script>
         <h1>
            String remaining 
        </h1>
   <script>
       var text= " welcome to 'the' my program language";
       console.log(text);
       console.log(text.length);
       console.log(text.slice(9,18));
       console.log(text.substring(9,18));
       
        console.log(text.substr(9));
       console.log(text.replace("to","do"));
       var text1 = "Hello World!";   
        
       console.log(text1.toUpperCase());
       console.log(text1.toLowerCase());
       console.log(text1.split(""));
       console.log(text1.charAt(6));
       console.log(text1.charCodeAt(8));
   </script>
        
    </body>
</html>
 Ass3 



<!DOCTYPE html>

<html>
    <head>
        
        <title> if else problem </title>
    </head>
    <body>
        
        <h1>
            
        </h1>
        <script> 
            var age = prompt( "enter your age" );
            if(age>21)
{
   var drink =alert(" can drink ");
   
}
else 
 var drink1 = alert(" can't drink ");
            
        </script>
    </body>
</html>


Letupgrgae 

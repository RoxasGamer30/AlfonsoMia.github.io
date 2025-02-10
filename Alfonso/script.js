   /*TEXTO WELCOME*/
   var i = 0
   var txt = "Welcome to My Personal Website";
   var speed = 80;

   function TypeWrite()
   {
       if(i < txt.length)
       {
        document.getElementById("Texto").innerHTML += txt.charAt(i);
        i++;
           setTimeout(TypeWrite,speed);
       }
   }   
   TypeWrite();
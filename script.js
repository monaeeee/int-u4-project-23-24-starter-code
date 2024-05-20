let button = document.querySelector("button");
let results = document.querySelector(".r");
let source= document.querySelector(".source");
let video= document.querySelector(".video");

button.addEventListener("click", function(){
   let age = document.querySelector(".inputone").value;
   let album = document.querySelector(".input2").value;

   
   if (12 < age < 26 && album === 'Ctrl'){ 
   results.innerHTML = "You're Normal girl by sza";
    source="https://youtu.be/WxflcXmtVTM?si=vYjeZ44MYTJxyNlv";
     } else if (age >=27 && album === "Sos"){
   results.innerHTML = "You're The Weekend by sza";
   } else if(12 < age < 26 && album === 'Sos'){ 
    results.innerHTML = "You're Nobdy gets me by sza";
    source="https://youtu.be/3mQ5Yaehtpg?si=k5q5rpYxABnbdmws";
   } else if (age >=27 && album === 'Ctrl') {
     results.innerHTML = "You're Snooze by sza";
   } else {
     results.innerHTML="Your Results do not match any song"
   };

   // if (12 < age < 26 && album === 'Sos'){ 
   //    results.innerHTML = "You're Nobdy gets me by sza";
   //     source="https://youtu.be/3mQ5Yaehtpg?si=k5q5rpYxABnbdmws";
   //      } else if (age >=27 && album === "Ctrl"){
   //    results.innerHTML = "You're Snooze by sza";
   //    }else{results.innerHTML="Your Results do not match any song"};


    });









// JavaScript goes here.
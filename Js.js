 var mode=document.getElementById('SwitchMode');
mode.addEventListener('click', ()=>{document.body.classList.toggle('dark');})


var open=document.getElementById('open');
open.addEventListener('click', openNav);
var sidenav=document.getElementById('mySidenav');
function openNav(){
             sidenav.style.width="250px";
         }
function closeNav(){
             sidenav.style.width="0px";
         }


var pers1=document.getElementById('nbPers');
var pers2=pers1.cloneNode(true);
pers2.id='div2';
var pers3=pers1.cloneNode(true);
pers3.id='div3';

var un=document.getElementById('un');
var deux=document.getElementById('deux');
var trois=document.getElementById('trois');
var room=document.getElementById('room');
           
           un.addEventListener('click', fReservation);
           function fReservation(){
               pers1.style.width="250px";
               pers1.style.display="block";
               var part3=document.getElementById('div3');
               part3.style.display="none";
               var part2=document.getElementById('div2');
               part2.style.display="none";
           }
           
          deux.addEventListener('click', fRes);
           function fRes(){
               var part1=document.getElementById('nbPers');
                part1.style.display="block";
               pers1.parentNode.appendChild(pers2);
               var part3=document.getElementById('div3');
               part3.style.display="none";
               var part2=document.getElementById('div2');
               part2.style.display="block";
           }
           
           trois.addEventListener('click',fTelo);
           function fTelo(){
               pers2.parentNode.appendChild(pers3);
               var part3=document.getElementById('div3');
               part3.style.display="block";
               var part2=document.getElementById('div2');
               part2.style.display="block";
           }
 
        room.addEventListener('click',fClose);
function fClose(){
                var part1=document.getElementById('nbPers');
                part1.style.display="none";
               var part3=document.getElementById('div3');
               part3.style.display="none";
               var part2=document.getElementById('div2');
               part2.style.display="none";
}



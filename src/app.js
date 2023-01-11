/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let icon=['<i class="bi bi-valentine2"></i>',
            '<i class="bi bi-twitch"></i>',
            '<i class="bi bi-send-fill"></i>',
            '<i class="bi bi-reddit"></i>'];
  let who = ['the dog','my granma','his turtle','my bird'];
  let what = ['eat','pissed','crushed','broked'];
  let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

  let iconRamdom=Math.floor(Math.random()*icon.length);
  let whoRandom=Math.floor(Math.random()*who.length);
  let whatRandom=Math.floor(Math.random()*who.length);
  let whenRandom=Math.floor(Math.random()*who.length);

  let excuse=icon[iconRamdom]+' '+who[whoRandom]+' '+what[whatRandom]+' '+when[whenRandom]+' '+icon[iconRamdom]

  let element=document.querySelector('#excuse');
 
  element.innerHTML=excuse;

  console.log("excuse: ", excuse);
  console.log("element: ", element);
  console.log("innerHTML: ", element.innerHTML);
}

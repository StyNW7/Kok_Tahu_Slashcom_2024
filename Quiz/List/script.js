//---Variables Declaration---//

var mode = document.querySelector("#mode"),
mus = document.querySelector("#mode2"),
mus2 = document.querySelector("#mode3"),
mode4 = document.querySelector("#mode4"),
audio = document.querySelector("#audio"),
loadPg = document.querySelector("#loadPg"),
firstPg = document.querySelector("#firstPg"),
start = document.querySelector("#start"),
replay = document.querySelector("#replay"),
incrct = document.querySelector("#incrct"),
crct = document.querySelector("#crct"),
atmptd = document.querySelector("#atmptd"),
main = document.querySelector("#main"),
resultPg = document.querySelector("#resultPg"),
queWrap = document.querySelector("#queWrap"),
progress = document.querySelector("#prog"),
qNum = document.querySelector("#QNum"),
chngBtn = document.querySelector("#chngBtn"),
nxt = document.querySelector("#nxt"),
prev = document.querySelector("#prev"),
que = document.querySelector("#que"),
opt = document.querySelectorAll(".opt");
const body = document.body;

//---User selection Array---//

var selections = new Array(ques.length).fill(" ");

//---Adding Listener to Next & Prev Buttons----//

nxt.addEventListener("click",vibrt)
prev.addEventListener("click",vibrt)

nxt.addEventListener("click",function(){
   if(n<ques.length-1){
      n++;
      showQuestion(n);
   }
   else{}
})

prev.addEventListener("click",function(){
   if(n>0){
      n--;
      showQuestion(n);
   }
   else{}
})

//---Question Changer----//

var n = 0;
var selectedOption = null;

function showQuestion(n) {
   qNum.innerHTML = n + 1;
   prog.style.width = (n + 1) / ques.length * 100 + "%";

   for (var i = 0; i < opt.length; i++) {
      opt[i].innerHTML = ques[n]["opt" + (i + 1)];
      opt[i].style.backgroundColor = "#001133";
    //   opt[i].addEventListener("mouseover", hoverOption);
    //   opt[i].addEventListener("mouseout", resetOption);
      opt[i].addEventListener("click", selectOption);
   }

   if (selections[n].innerHTML != " ") {
      for (var j = 0; j < opt.length; j++) {
         if (opt[j].innerHTML == selections[n]) {
            opt[j].style.backgroundColor = "#008074";
            selectedOption = opt[j];
         }
      }
   }

   que.innerHTML = ques[n].question;
}

function hoverOption(event) {
   event.target.style.backgroundColor = "#008074";
}

function resetOption(event) {
    event.target.style.backgroundColor = "#001133";
 }

function selectOption(event) {
   if (selectedOption !== null) {
      selectedOption.style.backgroundColor = "#001133";
   }
   event.target.style.backgroundColor = "ora#008074nge";
   selectedOption = event.target;
}

showQuestion(0);

//----Option Selecting Function----//

for(i=0;i<opt.length;i++){
  opt[i].addEventListener("click",function(){
     for(j=0;j<opt.length;j++){
       opt[j].style.backgroundColor="#222";
     }
     selections[n] = this.innerHTML;
     this.style.backgroundColor="#008074";
  })
}

//---Submit----//

var score = document.querySelector("#score");

submit.addEventListener("click", function() {
    resultPg.style.display = "block";
    setTimeout(function() { resultPg.style.left = "0"; });
 
    let correct = 0, incorrect = 0, attempted = 0;
 
    for (let k = 0; k < ques.length; k++) {
       if (selections[k] === ques[k].ans) {
          correct++;
          attempted++;
       } else if (selections[k] !== " ") {
          incorrect++;
          attempted++;
       }
    }
 
    score.innerHTML = ((correct / ques.length) * 100).toFixed(2);
    crct.innerHTML = correct;
    incrct.innerHTML = incorrect;
    atmptd.innerHTML = attempted;
 
    setTimeout(function() { main.style.display = "none"; }, 500);
 });

//---Replay----//

replay.addEventListener("click",rplay)
function rplay(){
   selections.fill(" ")
   for(i=0;i<opt.length;i++){
      opt[i].style.background="black";
   }
   resultPg.style.left="100%";
   n=0,attempted=0,correct=0,incorrect=0;
   showQuestion(0);
   main.style.display="block";
   setTimeout(function(){
      resultPg.style.display="none";
   },500)
}

//---Start----//

start.addEventListener("click",function(){
   main.style.display="block";
   main.style.left="100%"
   setTimeout(function(){
      main.style.left="0";
   })
   setTimeout(function(){
      firstPg.style.display="none"
   },500)
   rplay();
})

//---Home function----//

function home(){
   firstPg.style.display="block";
   resultPg.style.left="100%";
   setTimeout(function(){
      resultPg.style.display="none";
   },500)
}

//---Audio----//

mus.addEventListener("click",music)
function music(){
   if(audio.paused){
      audio.play();
      mus.style.background="#ffa";
   }
   else{
      audio.pause();
      mus.style.background="var(--txt)";
   }
}

mus2.addEventListener("click",music2)
function music2(){
   if(audio.paused){
      audio.play();
      mus2.style.background="#ffa";
   }
   else{
      audio.pause();
      mus2.style.background="var(--txt)";
   }
}

//---Vibrator---//

function vibrt(bs){navigator.vibrate("75");}

//----Mode Changer------//

var root = document.querySelector(":root");

mode.addEventListener("click",function(){
   
   if(mode.classList.contains("dark")){
      root.style.setProperty("--mode-color","#013");
      root.style.setProperty("--dot-color","#308a8a");
      root.style.setProperty("--txt","#eef");
      root.style.setProperty("--trans","rgba(255,255,255,.1)")
      mode.className="btn light";
      mode.innerHTML ="🔆";
   }
   else{
      root.style.setProperty("--mode-color","#6071bf");
      root.style.setProperty("--dot-color","white");
      root.style.setProperty("--txt","#fff");
      root.style.setProperty("--trans","rgba(0,0,0,.1)")
      mode.className="btn dark";
      mode.innerHTML ="🌙";
   }
   
})

mode4.addEventListener("click",function(){
   
    if(mode4.classList.contains("dark")){
       root.style.setProperty("--mode-color","#013");
       root.style.setProperty("--dot-color","#308a8a");
       root.style.setProperty("--txt","#eef");
       root.style.setProperty("--trans","rgba(255,255,255,.1)")
       mode4.className="btn light";
       mode4.innerHTML ="🔆";
    }
    else{
       root.style.setProperty("--mode-color","#6071bf");
       root.style.setProperty("--dot-color","white");
       root.style.setProperty("--txt","#fff");
       root.style.setProperty("--trans","rgba(0,0,0,.1)")
       mode4.className="btn dark";
       mode4.innerHTML ="🌙";
    }
    
 })
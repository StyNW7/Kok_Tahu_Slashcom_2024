let score = 0;
let true_answer = 0;
let false_answer = 0;

const symbols = ["*", "/", "+", "-"];
operators_variable = Math.floor(Math.random()*4);
operators = symbols[operators_variable];

let numberone = Math.floor(Math.random()*10+1);
let numbertwo = Math.floor(Math.random()*10+1);


var show = function(elem) {
    elem.style.display = 'inline';
};

var hide = function(elem) {
    elem.style.display = 'none';
};


function startGame() {

    let beginning = document.getElementById("beginning");
    let container = document.getElementById("container");
    let board = document.getElementById("board");
    let duration = 30;
    

    document.getElementById("number1").value = numberone;
    document.getElementById("number2").value = numbertwo;
    document.getElementById("operators").innerHTML = operators;

    hide(beginning);

    show(container);

    // we get start time
    startTime = new Date().getTime();
    // we create a timer with the setInterval method
    var timerId = setInterval(function() {
      var total = (new Date().getTime() - startTime) / 1000;

      // while total lower than duration, we update timer and the clicks by seconds

      if (total <= duration) {

        document.getElementById("timer").innerHTML = "Sisa waktu: " + total.toFixed(3);
        
      }
      
      else {
        hide(container);

        document.getElementById("scoreBoard").innerHTML = score * 10;


        document.getElementById("true").innerHTML = "True: " + true_answer;
        document.getElementById("false").innerHTML = "False: " + false_answer;

        let caption = document.getElementById("caption");

          if(score > 10){
            caption.innerHTML = "Kamu manusia super!";
          }
          else if(score == 10){
            caption.innerHTML = "Luar biasa, kamu mendapat nilai sempurna!";
          }
          else if(score >= 6){
            caption.innerHTML = "Kamu cukup hebat dalam Matematika";
          }
          else if(score < 6) {
            caption.innerHTML = "Tidak apa-apa, kamu bisa coba lagi!";
          }

        show(board);
      }
    }, 1);
}


function display(num){
  document.getElementById("answer").value+=num;
}

function clr(){
    document.getElementById("answer").value = "";
}

function del(){

var value = document.getElementById("answer").value;

value = value.substring(0,value.length-1);

    document.getElementById("answer").value = value ;    
}

function calculate() {
    let user_answer = document.getElementById("answer").value;
    
    let question = numberone + operators + numbertwo;
    let calculate = eval(question);
    let answer = Math.round((calculate + Number.EPSILON) * 100) / 100;
        
    if (user_answer == answer){
    
    score += 1;
    true_answer += 1;
        document.getElementById("result").innerHTML = "Jawaban benar! Score +1";
        document.getElementById("result").style.color="green";
        
    document.getElementById("score").innerHTML = "Score: " + score;
       
    }

    else {
    
    score -= 1;
    false_answer += 1;
        document.getElementById("result").innerHTML = "Jawaban salah! Score -1 <br>" + "Jawabannya: " + answer;
        document.getElementById("result").style.color="red";
        
document.getElementById("score").innerHTML = "Score: " + score;
    }
    
    newquestion();

}

function newquestion(){
operators_variable = Math.floor(Math.random()*4);
operators = symbols[operators_variable];
document.getElementById("operators").innerHTML = operators;

document.getElementById("answer").value= "";
numberone = Math.floor(Math.random()*10+1);
numbertwo = Math.floor(Math.random()*10+1);

document.getElementById("number1").value = numberone
document.getElementById("number2").value = numbertwo
    
}
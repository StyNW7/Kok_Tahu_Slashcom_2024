var answer = Math.floor(Math.random()*100) + 1; 
var no_of_guesses = 10;
var guesses_num = [];

function play(){

var msg1 = document.getElementById("message1"); 
var msg2 = document.getElementById("message2"); 
var msg3 = document.getElementById("message3");

var user_guess = document.getElementById("guess").value;

if(user_guess < 1 || user_guess > 100 ){
    alert("Masukkan angka dari 1 - 100");
}

else { 
    guesses_num.push(user_guess);
    no_of_guesses -= 1;

if (user_guess < answer){ 

    msg1.innerHTML = "Tebakanmu terlalu rendah";

    msg2.innerHTML = "Life: " + no_of_guesses + " Kesempatan";

    msg3.innerHTML = "Tebakanmu: " + guesses_num;
    
    if (no_of_guesses == 0){ 

    msg1.innerHTML = "Maaf, kamu kalah :(";

    msg2.innerHTML = "Kesempatanmu berakhir!"

    msg3.innerHTML = "Angka tersebut adalah: " + answer;
    } 
} 

else if (user_guess > answer){ 

    msg1.innerHTML = "Tebakanmu terlalu tinggi";

    msg2.innerHTML = "Life: " + no_of_guesses + " Kesempatan";

    msg3.innerHTML = "Tebakanmu: " + guesses_num;
    
    if (no_of_guesses == 0){ 

        msg1.innerHTML = "Maaf, kamu kalah :(";

        msg2.innerHTML = "Kesempatanmu berakhir!"
    
        msg3.innerHTML = "Angka tersebut adalah: " + answer;
    } 
}

else if (user_guess == answer){

    msg1.innerHTML = "Kamu menang!";

    msg2.innerHTML = "Angka tersebut adalah: " + answer;

    msg3.innerHTML = "Kamu berhasil menebak dalam " + (10 - no_of_guesses) + " tebakan";
    
    msg1.style.color="green";
    msg2.style.color="green";
    msg3.style.color="green";

}

} 

}
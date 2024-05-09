// Display the number and operator:
function display(num){
    document.getElementById("result").value+=num;
}

// Clear All the Values
function clr(){
    let clear = "";
    document.getElementById("result").value = clear;
}

// Delete the Values
function del(){

var value = document.getElementById("result").value;

value = value.substring(0,value.length-1);

    document.getElementById("result").value = value ;    
}

// Solve the Equation and catch the Error
function solver() {
  try {
    let a = document.getElementById("result").value;
    
    let z = eval(a);
    document.getElementById("result").value = z;
    } 
    catch(e){
    
    document.getElementById("result").value = "INVALID!"
  };
};

// Vibrate

$(function() {
        $("button").click(function(){
            navigator.vibrate(25);
        });
    });
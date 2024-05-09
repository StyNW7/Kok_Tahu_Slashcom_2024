document.getElementById("inp_text").focus();

document.getElementsByTagName("body")[0].addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        send();
    }
});

document.getElementById("send").addEventListener("click", send);

function send() {

    var text = document.getElementById("inp_text").value;
    
    if (text == "") {
    }

    else {

        var request = document.createElement("div");
        request.className = "request";
        request.innerText = text;

        document.getElementsByClassName("main")[0].appendChild(request);
        document.getElementById("inp_text").value = "";
        
        fetch(`https://api.monkedev.com/fun/chat?msg=${text}`)
        .then(response => response.json())
        .then(function(data){
        
            var response = document.createElement("div");
            response.className = "response";
            response.innerText = data.response
            
            setTimeout(function () {
                document.getElementsByClassName("main")[0].appendChild(response);
                var a = document.getElementsByClassName("main")[0].scrollHeight;
                document.getElementsByClassName("main")[0].scrollTop = a+100 ;
            }, 1000)
        });
    }

    var a = document.getElementsByClassName("main")[0].scrollHeight;
    document.getElementsByClassName("main")[0].scrollTop = a ;

};
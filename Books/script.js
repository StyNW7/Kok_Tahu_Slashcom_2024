// Search Function not Live, must click Search Button using jQuery

$(document).ready(function () {

    function searching(){
        var checker = 0;

        for (var i = 0; i < 7; i++) {
            var card = $("div").filter(".col-md-3")[i];
            var title = $("h5").filter(".card-title")[i].innerText.toUpperCase();

            if (title.indexOf($("#inp").val().toUpperCase()) > -1) {
                card.style.display = 'block';
                checker++;
            }
            else {
                card.style.display = 'none';
            }
        }

        if(checker > 0){
            $("#not_find_any_thing").text("");
        }

        else{

            $("#not_find_any_thing").text("Modul tidak ketemu :(").fadeIn();

        }
    }

    const textInput = document.getElementById('inp');
    textInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        searching()
      }
    });

    $('#search').click(function () {

        searching();

    });

});
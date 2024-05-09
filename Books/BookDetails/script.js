$(document).ready(function(){

    $("#details").click(function(){
        $("#bookDetails").toggle(900)
    })

    let view = 0;
    const viewBtn = document.querySelector("#viewMore")

    $("#viewMore").click(function(){
        $(".hidden").toggle(600)

        if (view){
            view = 0
            viewBtn.innerHTML = "Lihat lebih banyak"
        }

        else {
            view = 1
            viewBtn.innerHTML = "Lihat lebih sedikit"
        }
    })

})
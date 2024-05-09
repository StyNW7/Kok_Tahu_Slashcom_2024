// Filter Array
let filterarray =[];

// Gallery Card List for manipulation

let galleryarray = [
    {
        id:1,
        name : "Matematika",
        src: "../Images/Stuff/ToFuMath.jpeg",
        quiz: "List/quiz2.html",
        desc : "Ayo latihan tentang Matematika umum"
    },
    {
        id:2,
        name : "IPA",
        src: "../Images/Stuff/ToFuIPA.jpeg",
        quiz: "List/quiz1.html",
        desc : "Belajar tentang Ilmu Pengetahuan Alam pasti menarik"
    },
    {
        id:3,
        name : "IPS",
        src: "../Images/Stuff/ToFuIPS.jpeg",
        quiz: "List/quiz3.html",
        desc : "Wah belajar tentang dunia dan lingkungannya"
    },
    {
        id:4,
        name : "Bahasa Inggris",
        src: "../Images/Stuff/ToFuEnglish.jpeg",
        quiz: "List/quiz4.html",
        desc : "Coba belajar Bahasa Inggris melalui kuis yuk"
    },
    {
        id:5,
        name : "Bahasa Indonesia",
        src: "../Images/Stuff/ToFuBI.jpeg",
        quiz: "List/quiz5.html",
        desc : "Tes kemampuan bahasamu disini!"
    },
    {
        id:6,
        name : "Seni Budaya",
        src: "../Images/Stuff/ToFuMusic.jpeg",
        quiz: "List/quiz6.html",
        desc : "Seni itu menarik loh coba ikuti kuisnya"
    },
    {
        id:7,
        name : "PPKN",
        src: "../Images/Stuff/ToFuPPKn.jpeg",
        quiz: "List/quiz7.html",
        desc : "Tunjukkan rasa nasionalismemu disini"
    }
   ];

showgallery(galleryarray);

// Showing the Card

function showgallery(cardList){
   document.getElementById("card").innerText = "";
   for(var i=0;i<cardList.length;i++)
   {
       document.getElementById("card").innerHTML += `
        <div class="col-md-4 mt-3" >
           <div class="card p-3 ps-5 pe-5">
               <h4 class="text-capitalize text-center">${cardList[i].name}</h4>

          <img src="${cardList[i].src}" width="100%" height="320px"/>
          <p class="mt-2">${cardList[i].desc}</p>

          <a href="${cardList[i].quiz}">
            <button class="btn w-100 mx-auto" onclick="readBlog${i}">Mulai</button>
          </a>

          </div>
          </div>
       `
   }

}

// Live searching

document.getElementById("myinput").addEventListener("keyup",function(){
    let text = document.getElementById("myinput").value;

    filterarray = galleryarray.filter(function(a){
        if(a.name.includes(text)){
            return a.name;
        }

   });

   if(this.value==""){
       showgallery(galleryarray);
   }

   else {

       if(filterarray == ""){
           document.getElementById("para").style.display = 'block'
           document.getElementById("card").innerHTML = ""; 
       }

       else{
           showgallery(filterarray);
           document.getElementById("para").style.display = 'none'
       }
   }

});
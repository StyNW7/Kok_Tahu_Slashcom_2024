// Filter Array
let filterarray =[];

// Gallery Card List for manipulation

let galleryarray = [
    {
        id:1,
        name : "Matematika",
        src: "../Images/Stuff/ToFuMath.jpeg",
        test: "List/test2.html",
        desc : "Ujian Matematika!"
    },
    {
        id:2,
        name : "IPA",
        src: "../Images/Stuff/ToFuIPA.jpeg",
        test: "List/test1.html",
        desc : "Ujian IPA!"
    },
    {
        id:3,
        name : "IPS",
        src: "../Images/Stuff/ToFuIPS.jpeg",
        test: "List/test3.html",
        desc : "Ujian IPS!"
    },
    {
        id:4,
        name : "Bahasa Inggris",
        src: "../Images/Stuff/ToFuEnglish.jpeg",
        test: "List/test4.html",
        desc : "Ujian Bahasa Inggris!"
    },
    {
        id:5,
        name : "Bahasa Indonesia",
        src: "../Images/Stuff/ToFuBI.jpeg",
        test: "List/test5.html",
        desc : "Ujian Bahasa Indonesia!"
    },
    {
        id:6,
        name : "Seni Budaya",
        src: "../Images/Stuff/ToFuMusic.jpeg",
        test: "List/test6.html",
        desc : "Ujian Seni Budaya!"
    },
    {
        id:7,
        name : "PPKN",
        src: "../Images/Stuff/ToFuPPKn.jpeg",
        test: "List/test7.html",
        desc : "Ujian PPKN!"
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

          <a href="${cardList[i].test}">
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
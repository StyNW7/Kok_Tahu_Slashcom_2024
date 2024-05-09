// Filter Array
let filterarray =[];

// Gallery Card List for manipulation

let galleryarray = [
    {
        id:1,
        name : "Piano",
        src: "../Images/Book Cover/keyboard.jpeg.jpg",
        games: "../Games/Piano/index.html",
        desc : "Belajar bermain piano pasti seru!"
    },
    {
        id:2,
        name : "Drum",
        src: "../Images/Book Cover/drum.jpeg.jpg",
        games: "../Games/Drum Kit/DrumKit.html",
        desc : "Ingin mencoba drum virtual? Disini tempatnya"
    },
    {
        id:3,
        name : "3D Model",
        src: "../Images/Book Cover/3dmodel.jpeg.jpg",
        games: "../Games/Piano/index.html",
        desc : "Belajar sambil menggerakkan model pasti menarik!"
    },
    {
        id:4,
        name : "Kuis Matematika Sederhana",
        src: "../Images/Book Cover/mathtimer.jpeg.jpg",
        games: "../Games/Simple Quiz/SQ.html",
        desc : "Ikuti tantangan kuis Matematika yang seru!"
    },
    {
        id:5,
        name : "Tebak Nomor",
        src: "../Images/Book Cover/NumQuest.jpeg.jpg",
        games: "../Games/Number Guessing Game/NGG.html",
        desc : "Bermain tebak nomor menggunakan logika!"
    },
    {
        id:6,
        name : "Kalkulator",
        src: "../Images/Book Cover/KalkuKuiz.jpeg.jpg",
        games: "../Games/Simple Calculator/SC.html",
        desc : "Belajar menghitung menggunakan kalkulator sederhana"
    },
    {
        id:7,
        name : "E-Librarium Tutorial",
        src: "../Images/Book Cover/keyboard.jpeg.jpg",
        games: "../Games/Piano/index.html",
        desc : "Just a sample of E-Blogs. You can read it for free!"
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

          <a href="${cardList[i].games}">
            <button class="btn w-100 mx-auto" onclick="readBlog${i}">Mainkan</button>
          </a>

          </div>
          </div>
       `
   }

}

/*

<a href="Blog/blog${i}.html">
    <button class="btn w-100 mx-auto" onclick="readBlog${i}">Read</button>
</a>

*/

// Live searching for the product (Different search with the E-Books by Genre (not Live))

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
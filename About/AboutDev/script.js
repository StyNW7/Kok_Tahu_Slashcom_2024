var images = [
    '../../Images/Stuff/ProfilePictures/PP (1).png', 
    '../../Images/Stuff/ProfilePictures/PP (2).png', 
    '../../Images/Stuff/ProfilePictures/PP (3).png',
    '../../Images/Stuff/ProfilePictures/PP (4).png',
    '../../Images/Stuff/ProfilePictures/PP (5).png'
];

var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
var animation = setInterval(next,2000)
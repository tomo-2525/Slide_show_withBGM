var imageArray = ["images/resize_image/image0.jpg",
    "images/resize_image/image1.jpg",
    "images/resize_image/image2.jpg",
    "images/resize_image/image3.jpg",
    "images/resize_image/image4.jpg",
    "images/resize_image/image5.jpg",];


var musicArray = ["BGM/1022.mp3",
    "BGM/2452.mp3",
    "BGM/2558.mp3",
    "BGM/2870.mp3",
    "BGM/4712.mp3",
    "BGM/710.mp3"
];

var music = document.getElementById("music");
var key = "0";


var media = document.getElementsByTagName("audio")[0];
var length = musicArray.length;


var currentImage = 0;
var timerID;
var play_frag = 0;//play_frag=0のときに再生可能 再生中は１

function startSlideShow() {
    if (play_frag == 1) exit;
    play_frag = 1;
    changeImage();
    timerID = setInterval("changeImage()", 500);

    var audio = document.getElementById("audioID");
    audio.play();
    //playthis(key);
    // media.play();

    audio.volume = document.getElementById("volume").value;
}

function pauseSlideShow() {//途中
    if (play_frag == 0) exit;
    clearInterval(timerID);
    play_frag = 0;
    var audio = document.getElementById("audioID");
    audio.pause();
    // media.pause();
}

function stopSlideShow() {
    if (play_frag == 0) exit;
    play_frag = 0;
    clearInterval(timerID);
    changeImage = 0;
    showImage(changeImage);
    var audio = document.getElementById("audioID");
    audio.load();
    // media.load();
}



function changeImage() {
    showImage(currentImage);
    currentImage++;
    if (currentImage == imageArray.length) currentImage = 0;
}

function changeMusic() {
    var audio = document.getElementById("music");
    // var src = audio.getAttribute('src');
    //music.setAttribute('src', 'BGM/2870.mp3')
    //ocument.getElementById("music").src = 'BGM/2870.mp3';
    // var key = music.options[music.selectedIndex].value;
}

function changeVolume() {
    var audio = document.getElementById("audioID");
    audio.volume = document.getElementById("volume").value;
}

function showImage(imageNo) {
    document.getElementById("main").src = imageArray[imageNo];

    var thumbImages = document.getElementsByClassName("thumb");

    for (var i = 0; i < thumbImages.length; i++) {
        thumbImages[imageNo].classList.remove("select");
    }
    thumbImages[imageNo].classList.add("select");
}

function playthis(key) {

    switch (key) {
        case 0:
            var audio = document.getElementById("sample0");
            audio.play();
            break;

        case 1:
            var audio = document.getElementById("sample1");
            audio.play();
            break;

        case 2:
            var audio = document.getElementById("sample2");
            audio.play();
            break;

        case 3:
            var audio = document.getElementById("sample3");
            audio.play();
            break;

        case 4:
            var audio = document.getElementById("sample4");
            audio.play();
            break;

        case 5:
            var audio = document.getElementById("sample5");
            audio.play();
            break;

        case 6:
            var audio = document.getElementById("sample6");
            audio.play();
            break;


        case 7:
            var audio = document.getElementById("sample7");
            audio.play();
            break;

            dafault:
            var audio = document.getElementById("sample0");
            audio.play();
            break;
    }

}

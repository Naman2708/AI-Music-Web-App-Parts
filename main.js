peter_pan_song = "";
Harry_Potter_Theme_song = "";

function preload() {
    peter_pan_song = loadSound("music2.mp3");
    Harry_Potter_Theme_song = loadSound("music.mp3");
}

function setup(){
    canvas = createCapture(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,600,530);
}

var song1 = "";
var song2 = "";
rightWrist_X = 0;
rightWrist_Y = 0;
leftWrist_X = 0;
leftWrist_Y = 0;

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    modal = ml5.poseNet(video, modalLoaded);
    modal.on('pose', results);
}
function draw(){
    image(video, 0, 0, 600, 500);
}
function modalLoaded() {
    console.log("Modal Loaded");
}
function results(answers) {
if(answers.length > 0){
console.log(answers);
rightWrist_X = answers[0].pose.rightWrist.x;
rightWrist_Y = answers[0].pose.rightWrist.y;
leftWrist_X = answers[0].pose.leftWrist.x;
leftWrist_Y = answers[0].pose.leftWrist.y;
}
}
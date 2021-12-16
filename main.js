NoseX = 0;
NoseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function preload(){}

function setup() {
    video = createCapture(VIDEO);
    video.size(500,550);
    canvas = createCanvas(450,450); 
    canvas.position(560,100);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    background('#42f5b0');
    fill('#56fc03');
    stroke('#03fcf0');
    square(NoseX,NoseY,difference);
    document.getElementById("square_sides").innerHTML="width and height will be = "+difference+"px";
}

function modelLoaded() {
    console.log("Model is Loaded");
}

function gotPoses(results) {
    if(results.length> 0) {
    console.log(results);
    NoseX = results[0].pose.nose.x;
    NoseY = results[0].pose.nose.y;
    leftWristX = results[0].pose.leftWrist.x;
    rightWristY = results[0].pose.rightWrist.x;
    console.log("leftWristX:"+leftWristX);
    console.log("rightWristX:"+rightWristX)
    console.log("NoseX:"+NoseX);
    console.log("NoseY:"+NoseY);
    difference = leftWristX-rightWristX;
}
}
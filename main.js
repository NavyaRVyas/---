img="";
status2="";
function preload(){
img=loadImage("Puppy.jpeg");
}
function setup(){
canvas = createCanvas(640, 420);
canvas.center();
objectDetector=ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML="status-detecting objects";
}
function modelLoaded(){
    console.log(modelLoaded);
    status2=true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}
function draw(){
image(img, 0, 0, 640, 420);
fill("#FF0000");
noFill();
text("Very Cute Dog", 160, 140);
stroke("#FF0000");
rect(150, 120, 250, 250);
fill("#FF0000");
noFill();
text("Very Cute Dog", 400, 120);
stroke("#FF0000");
rect(325, 100, 225, 225);
}
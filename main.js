img = "";
status = "";
objects = [];
alarm = "";
function preload(){
    alarm = loadSound("mixkit-sound-alert-in-hall-1006.wav")
}
function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw(){
    image(video, 0, 0, 380, 380);
    if(status !=""){
        for (i = 0; 1 < objects.length; i++){
            document.getElementById("status").innerHTML = "Status :Baby Detected";
            alarm.stop()
        }
        else {
            document.getElementById("status").innerHTML = "Status :Baby Not Detected";
            alarm.play()
        }
        if(status = 0){
            document.getElementById("status").innerHTML = "Status :Baby Not Detected";
            alarm.play()
        }

    }
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results
}
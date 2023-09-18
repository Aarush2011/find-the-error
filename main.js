noseX=0;
noseY=0;
leftwristX=0;
rightwristX=0;
difference=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(500,450);
    canvas.position(560,80);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet initialized");
}
function draw()
    {
     background("grey");
     fill("green");
     stroke("green");
     square(noseX,noseY,difference);
    }
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = " + noseX+" noseY= "+noseY);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference = floor(rightwristX-leftwristX);
        console.log(" leftwristx= "+leftwristX +" rightwristx= "+rightwristX +" difference= "+difference);
    }

}
nose_X = 0;
nose_Y = 0;

function preload()
{
    mustache = loadImage('https://i.postimg.cc/Y9NX8RTM/A-Mustache-Looks-Like-a-Big-Hairy-Smile-removebg-preview-1.png');

}

function setup()
{
    canvas = createCanvas(600, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 600);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('poseNet is initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
         nose_X = results[0].pose.nose.x - 20;
         nose_Y = results[0].pose.nose.y - 1;
    }
}

function draw()
{
    image(video, 0, 0, 600, 600);
    image(mustache, nose_X, nose_Y, 50, 50);
}

function take_Snapshot()
{
    save('MyMustacheFilter.jpg');
}

function setup() {
    canvas = createCanvas(380,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function take_snapshot() {
 save('Birthday_party');
}
function draw() {
    image(video, 0, 0, 380, 300);
    stroke("orange");
    strokeWeight(20);
    noFill();
    rect(0,0,380,300);
    stroke("cyan");
    circle(0,0,20);
    circle(380,0,20);
    circle(380,300,20);
    circle(0,300,20);
}
















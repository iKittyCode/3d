var angle = 0
let w = 100
function setup() {
   // put setup code here
   createCanvas(windowWidth, windowHeight, WEBGL)
   frameRate(8)
}

function draw() {
   // put drawing code here
   lights()
normalMaterial();

   background(0)
   rotateX(45)
   rotateY(angle / 3)
   rotateX(angle * 4)
   //fill(random(256), random(256), random(256))
   box(w)
   angle += 1
w += 1
if (w < 300) {
w = 100
}
}

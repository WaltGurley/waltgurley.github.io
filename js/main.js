function setup() {
  var container = select('.vis-container');
  canvas = createCanvas(container.width, container.height);
  canvas.parent('vis-container');
  background(0, 0, 0);
}

//Global vars
var counterHeight = 0;
var counterHeight2 = 0;
var counterHeight3 = 0;
var counterWidth = 0;
var counterWidth2 = 0;
var counterWidth3 = 0;
var lineWeight = 15;

function draw() {
  background(0, 0, 0, 2);
  var col = map(counterHeight, 0, lineWeight, 0, 255)

  //Ellipse pattern
  // var radius = 30;
  // for (i = 0; i < width; i += (radius * 2)) {
  //   for (j = 0; j < height; j += (radius * 2)) {
  //     fill(random(0, 255), random(0, 255), random(0, 255))
  //     ellipse(i + radius, j + radius, radius, radius);
  //   }
  // }


  //Moing hor and vert lines
  noStroke();
  strokeWeight(lineWeight)
  // if (counter > mouseY - 20 && counter < mouseY + 20 ||
  //   height - counter > mouseY - 20 && height - counter < mouseY + 20) {
  if (mouseX != pmouseX) {
    // stroke(random(0, 255), random(0, 255), random(0, 255));
    stroke(0, 0, 0);
  } else {
    stroke(col, col, col);
  }

  //Moving horizontal lines
  line(0, counterHeight, width, counterHeight);
  line(0, height - counterHeight, width, height - counterHeight);

  line(0, counterHeight2, width, counterHeight2);
  line(0, height - counterHeight2, width, height - counterHeight2);

  line(0, counterHeight3, width, counterHeight3);
  line(0, height - counterHeight3, width, height - counterHeight3);

  //Moving vertical lines
  line(counterWidth, 0, counterWidth, height);
  line(width - counterWidth, 0, width - counterWidth, height);

  line(counterWidth2, 0, counterWidth2, height);
  line(width - counterWidth2, 0, width - counterWidth2, height);

  line(counterWidth3, 0, counterWidth3, height);
  line(width - counterWidth3, 0, width - counterWidth3, height);

  counterHeight++;
  counterHeight2+= 1.5;
  counterHeight3+= 2;
  counterWidth++;
  counterWidth2+= 1.5;
  counterWidth3+= 2;

  if (counterHeight >= height) {
    counterHeight = 0;
  }

  if (counterHeight2 >= height) {
    counterHeight2 = 0;
  }

  if (counterHeight3 >= height) {
    counterHeight3 = 0;
  }

  if (counterWidth >= width) {
    counterWidth = 0;
  }

  if (counterWidth2 >= width) {
    counterWidth2 = 0;
  }

  if (counterWidth3 >= width) {
    counterWidth3 = 0;
  }
}

function windowResized() {
  var container = select('.vis-container');
  resizeCanvas(container.width, container.height);

  //FOR TESTING
  console.log(container.width, container.height)
}

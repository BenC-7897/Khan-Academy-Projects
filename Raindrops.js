var xPositions = [160, 200]; // Starting x position 
var yPositions = [70, 50]; // Starting y position 

draw = function() {
    background(204, 247, 255); // Sky 
    for (var i = 0; i < xPositions.length; i++) {
    noStroke();
    fill(0, 200, 255); // Raindrops 
    if (yPositions[i] > 400) 
    {yPositions[i] = 0;}
    for (var i = 0; i < xPositions.length; i++) {
    ellipse(xPositions[i], yPositions[i], 10, 10);
    yPositions[i] += random(1,5);
    }
    }
var mouseClicked = function() { // Activate the raindrops when clicked 
    xPositions.push(random(10,50)); 
    yPositions.push(random(10,50)); 
};
};

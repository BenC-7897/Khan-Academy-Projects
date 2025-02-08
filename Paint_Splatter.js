var monteCarlo = function() {while(true) 
{var r1 = random(1);
var probability = r1; 
var r2 = random(1); 
if (r2 > probability) {return r1;}}};
var Walker = function() {
    this.x = width/4; 
    this.y = height/4;};
Walker.prototype.display = function()
{noStroke(); 
strokeWeight(2.25);
stroke(91, 199, 55);
point(this.x, this.y);};
Walker.prototype.walk = function() 
{var StepSize = floor(12.5*monteCarlo()); 
var xStepSize = random(-StepSize, StepSize);
var yStepSize = random(-StepSize, StepSize);
this.x += xStepSize; 
this.y += yStepSize;};
var w = new Walker();
draw = function() {
    w.walk();
    w.display();};

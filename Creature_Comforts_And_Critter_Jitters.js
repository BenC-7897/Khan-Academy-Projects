var G = 2; 
var Mover = function(m,x,y) {
this.mass = m; 
this.position = new PVector(x,y); 
this.velocity = new PVector(0,0); 
this.acceleration = new PVector(0,0);};
Mover.prototype.applyForce = function(force) {
var f = PVector.div(force, this.mass); 
this.acceleration.add(f);};
Mover.prototype.update = function() {
this.velocity.add (this.acceleration); 
this.position.add(this.velocity); 
this.acceleration.mult(0);};
Mover.prototype.display = function() {stroke(61, 73, 237); 
strokeWeight(1.5); 
fill(22, 171, 89); 
ellipse(this.position.x, this.position.y, this.mass*13, this.mass*13);};
Mover.prototype.calculateAttraction = function(m,i) {var force = PVector.sub(this.position, m.position); 
var distance = force.mag(); 
distance = constrain (distance, 20, 20); 
force.normalize(); 
var strength = (G * this.mass * m.mass)/(distance * distance); 
force.mult(strength); return force; }; 
var movers = []; 
for (var i = 0; i < 10; i++) 
{movers[i] = new Mover(random(0.1,2), random(width), random(height));}
draw = function() {
    background(37, 219, 213);

    for (var i = 0; i < movers.length; i++) {
        for (var j = 0; j < movers.length; j++) {
            if (i !== j) {
                var force = movers[j].calculateAttraction(movers[i]);
                movers[i].applyForce(force);
            }
        }

        movers[i].update();
        movers[i].display();
    }
};

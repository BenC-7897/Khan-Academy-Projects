var book = [ 
{title: "To Kill a Mockingbird",review: "Must Read",stars:4},
{title: "Nothing to Envy",review: "Emotionally gripping",stars:4.5}, 
{title: "I am Malala",review: "Pretty Great",stars:4}, 
{title: "Accelerated C++",review: "Outstanding",stars:4}];

// draw shelf
fill(150, 94, 9);
rect(0, 120, width, 10);

// draw one book
fill(214, 255, 219);
rect(10, 20, 90, 100);
fill(0, 0, 0);
text(book.title, 15, 29, 70, 100);

for (var i = 0; i < book.length; i++) {  
    fill(i*56, 207, 179); // Rating colour code 
    rect(95*i, 20, 90, 100);
    fill(48, 13, 13); // Book Title 
    text(book[i].title, i* 99+5, 29, 70, 100); 
    fill(138, 100, 100); // Word rating 
    text(book[i].review, i* 99+10, 64, 70, 100); }
for (var j = 0; j < book.length; j++) { // Cute Stars to act as a rating 
    for (var i = 0; i < book[j].stars; i++) {
    image(getImage("cute/Star"), 105*j + i * 15.5, 90, 20, 30);
}
}


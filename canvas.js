let canvasHome = document.getElementById("canvasElement");
let c = canvasHome.getContext("2d");

class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), false);
        c.strokeStyle = "black";
        c.stroke();
        c.fillStyle = "green";
        c.fill();
    }

    update() {
        if (this.x + this.radius > canvasHome.width || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
    
        if (this.y + this.radius > canvasHome.height || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
    
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }

}

var circleArray = [];
for (var i = 0; i < 25; i++) {
    let radius = 10;
    let x = Math.random() * (canvasHome.width - radius * 2) + radius;
    let y = Math.random() * (canvasHome.height - radius * 2) + radius;
    let dx = (Math.random() * - 0.5) * 4;
    let dy = (Math.random() * - 0.5) * 4;
    
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvasHome.width, canvasHome.height);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
        
    }
}

animate();
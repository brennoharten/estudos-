
class Line {

    constructor(x1, y1, x2, y2) {
        this.points = [];

        this.points.push(new Vector(3, [x1, y1 ,1]))
        this.points.push(new Vector(3, [x2, y2, 1]))
        
        this.color = "#000000";
        let t = new Transformations();
    
    }

    setColor(newColor) {
        this.color = newColor;
    }

    translate(dx,dy) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate2D(this.points[i], dx, dy);
        }
    }

    rotation(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation2D(this.points[i], angle);
        }
    }

    draw() {

        strokeWeight(1);
        stroke(this.color);
        fill(this.color);
        
        beginShape(TRIANGLES);
            vertex(this.points[0].get(1)/ this.points[0].get(3), this.points[0].get(2)/ this.points[0].get(3) );
            vertex(this.points[1].get(1)/ this.points[1].get(3), this.points[1].get(2)/ this.points[1].get(3) );

        endShape(CLOSE);
    }
}

class Rectangle {

    constructor(x, y, w, h) {
        this.points = [];

        this.points.push(new Vector(3, [x, y ,1]))
        this.points.push(new Vector(3, [x + w, y, 1]))
        this.points.push(new Vector(3, [x + w, y + h, 1]))
        this.points.push(new Vector(3, [x ,y + h, 1]))
        

        // this.points.push(new Vector(2, [x, y]))
        // this.points.push(new Vector(2, [x, y + h]))
        // this.points.push(new Vector(2, [x + w, y ]))
        // this.points.push(new Vector(2, [x + w,y + h]))
        this.color = "#000000";
        let t = new Transformations();
    
    }

    setColor(newColor) {
        this.color = newColor;
    }

    translate(dx,dy) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate2D(this.points[i], dx, dy);
        }
    }

    rotation(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation2D(this.points[i], angle);
        }
    }

    draw() {

        strokeWeight(1);
        stroke(this.color);
        fill(this.color);
        
        beginShape(TRIANGLES);
            vertex(this.points[0].get(1)/ this.points[0].get(3), this.points[0].get(2)/ this.points[0].get(3) );
            vertex(this.points[1].get(1)/ this.points[1].get(3), this.points[1].get(2)/ this.points[1].get(3) );
            vertex(this.points[3].get(1)/ this.points[3].get(3), this.points[3].get(2)/ this.points[3].get(3) );
        
            vertex(this.points[1].get(1)/ this.points[1].get(3), this.points[1].get(2)/ this.points[1].get(3) );
            vertex(this.points[2].get(1)/ this.points[2].get(3), this.points[2].get(2)/ this.points[2].get(3) );
            vertex(this.points[3].get(1)/ this.points[3].get(3), this.points[3].get(2)/ this.points[3].get(3) );
            
            // for (let i = 0; i < this.points.length; i++) {
            //     vertex(this.points[i]).get(1), this.points[i].get(2);
            // }

        endShape(CLOSE);
    }
}

class Circle {

    constructor(x, y, r, m) {
        this.points = [];
        angleMode(DEGREES)
        let z = r * sin(0) + x;
        let v = r * cos(0) + y;
        
        for (let a = 0 ; a < 360; a += 360/m ) {
            let b = r * sin(a) + x;
            let c = r * cos(a) + y;
            this.points.push(new Vector(3, [b, c ,1]))
            this.points.push(new Vector(3, [0, 0 ,1]))
        }

        this.points.push(new Vector(3, [z, v ,1]))
        
        this.color = "#000000";
        let t = new Transformations();
    
    }

    setColor(newColor) {
        this.color = newColor;
    }

    translate(dx,dy) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate2D(this.points[i], dx, dy);
        }
    }

    rotation(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation2D(this.points[i], angle);
        }
    }

    draw() {

        strokeWeight(1);
        stroke(this.color);
        fill(this.color);

        beginShape(TRIANGLE_STRIP);
            for (let i = 0; i < this.points.length; i++) {
                vertex(this.points[i].get(1), this.points[i].get(2));
                
            }
                    
        endShape(CLOSE);
    }
}

class Triangule {

    constructor(x1, y1, x2, y2, x3, y3) {
        this.points = [];

        this.points.push(new Vector(3, [x1, y1 ,1]))
        this.points.push(new Vector(3, [x2, y2, 1]))
        this.points.push(new Vector(3, [x3, y3, 1]))
        

        this.color = "#000000";
        let t = new Transformations();
    
    }

    setColor(newColor) {
        this.color = newColor;
    }

    translate(dx,dy) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate2D(this.points[i], dx, dy);
        }
    }

    rotation(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation2D(this.points[i], angle);
        }
    }

    draw() {

        strokeWeight(1);
        stroke(this.color);
        fill(this.color);
        
        beginShape(TRIANGLES);
            vertex(this.points[0].get(1)/ this.points[0].get(3), this.points[0].get(2)/ this.points[0].get(3) );
            vertex(this.points[1].get(1)/ this.points[1].get(3), this.points[1].get(2)/ this.points[1].get(3) );
            vertex(this.points[2].get(1)/ this.points[2].get(3), this.points[2].get(2)/ this.points[2].get(3) );
                    
        endShape(CLOSE);
    }
}
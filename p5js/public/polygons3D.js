class Plan{

    constructor(x, y, z, w, h, l) {
        this.points = [];
        this.points.push(new Vector(4, [x, y, z, 1]));
        this.points.push(new Vector(4, [x + w, y, z, 1]));
        this.points.push(new Vector(4, [x + w, y + h, z, 1]));
        this.points.push(new Vector(4, [x, y + h, z, 1]));
        

        this.color = "#000000";
        let t = new Transformations();

        this.faces = [];
        this.faces.push([0,1,3,1,2,3]);
    }

    setColor(newColor) {
        this.color = newColor;
    }

    translate(dx, dy, dz) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate3D(this.points[i], dx, dy, dz);
        }
    }

    rotationX(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dx(this.points[i], angle);   
        }
    }
    rotatioY(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dy(this.points[i], angle);   
        }    
    }

    rotatioZ(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dz(this.points[i], angle);   
        }   
    }

    draw() {

        strokeWeight(1);
        stroke(this.color);
        fill(this.color);
        beginShape(TRIANGLES)
        
            for(let i = 0; i < this.faces.length; i++){
                for(let j = 0; j < this.faces[i].length; j++){
                    let idx = this.faces[i][j]
                    vertex(this.points[idx].get(1),this.points[idx].get(2),this.points[idx].get(3));
                }  
            }
        
            // vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
            // vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            // vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
            
            // vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            // vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
            // vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        endShape()

    }    
}

class Parallelogram{

    constructor(x, y, z, w, h, l) {
        this.points = [];
        this.points.push(new Vector(4, [x, y, z, 1]));
        this.points.push(new Vector(4, [x + w, y, z, 1]));
        this.points.push(new Vector(4, [x + w, y + h, z, 1]));
        this.points.push(new Vector(4, [x, y + h, z, 1]));
        
        this.points.push(new Vector(4, [x, y, z - l, 1]));
        this.points.push(new Vector(4, [x + w, y, z - l, 1]));
        this.points.push(new Vector(4, [x + w, y + h, z - l, 1]));
        this.points.push(new Vector(4, [x, y + h, z - l, 1]));

        this.color = "#000000";
        let t = new Transformations();

        this.faces = [];
        this.faces.push([0,1,3,1,2,3]);
        this.faces.push([4,5,7,5,6,7]);
        this.faces.push([0,3,7,0,4,7]);
        this.faces.push([1,2,6,1,5,6]);
        this.faces.push([0,1,4,1,4,5]);
        this.faces.push([3,2,7,2,7,6]);
    }

    setColor(newColor) {
        this.color = newColor;
    }

    translate(dx, dy, dz) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate3D(this.points[i], dx, dy, dz);
        }
    }

    rotationX(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dx(this.points[i], angle);   
        }
    }
    rotatioY(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dy(this.points[i], angle);   
        }    
    }

    rotatioZ(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dz(this.points[i], angle);   
        }   
    }

    draw() {

        strokeWeight(1);
        stroke(this.color);
        fill(this.color);
        beginShape(TRIANGLES)
        
            for(let i = 0; i < this.faces.length; i++){
                for(let j = 0; j < this.faces[i].length; j++){
                    let idx = this.faces[i][j]
                    vertex(this.points[idx].get(1),this.points[idx].get(2),this.points[idx].get(3));
                }  
            }
        
            // vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
            // vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            // vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
            
            // vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            // vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
            // vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        endShape()

    }    
}


class pyramid {

    constructor(x, y, r, w, h, hp) {
        this.points = [];
        this.points.push(new Vector(4, [x, y, r, 1]));
        this.points.push(new Vector(4, [x + w, y, r, 1]));
        this.points.push(new Vector(4, [x + w, y + h, r, 1]));
        this.points.push(new Vector(4, [x, y + h, r, 1]));
        
        this.points.push(new Vector(4, [w/2, h/2, hp, 1]));
        

        this.color = "#000000";
        let t = new Transformations();

        this.faces = [];
        this.faces.push([0,1,3,1,2,3]);
    }

    setColor(newColor) {
        this.color = newColor;
    }

    translate(dx, dy, dz) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate3D(this.points[i], dx, dy, dz);
        }
    }

    rotationX(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dx(this.points[i], angle);   
        }
    }
    rotatioY(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dy(this.points[i], angle);   
        }    
    }

    rotatioZ(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dz(this.points[i], angle);   
        }   
    }

    draw() {

        strokeWeight(1);
        stroke(this.color);
        fill(this.color);
        beginShape(TRIANGLE_STRIP)
        
            for(let i = 0; i < this.faces.length; i++){
                for(let j = 0; j < this.faces[i].length; j++){
                    let idx = this.faces[i][j]
                    vertex(this.points[idx].get(1),this.points[idx].get(2),this.points[idx].get(3));
                    
                } 
            }

            for (let i = 0; i < this.points.length; i++) {
                vertex(this.points[i].get(1),this.points[i].get(2),this.points[i].get(3)); 
                vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3)); 
            }
            
            // vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
            // vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            // vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
            
            // vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            // vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
            // vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        endShape()

    }    
}

class sphere {

    constructor(x , y, r, st ,se) {
        this.points = [];
        angleMode(DEGREES)
    
        for (let i = 0 ; i < 360; i += 360/st ) {
            for (let j = 0 ; j < 360; j += 360/se ){
                let a = r * sin(j) * cos(i) + x;
                let b = r * sin(j) * sin(i) + y;
                let z = r * cos(j);
                this.points.push(new Vector(4, [a, b, z, 1]));

            }
        }
        this.color = "#000000";
        let t = new Transformations();

        this.faces = [];
        this.faces.push([0,1,3,1,2,3]);
    }

    setColor(newColor) {
        this.color = newColor;
    }

    translate(dx, dy, dz) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate3D(this.points[i], dx, dy, dz);
        }
    }

    rotationX(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dx(this.points[i], angle);   
        }
    }
    rotatioY(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dy(this.points[i], angle);   
        }    
    }

    rotatioZ(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dz(this.points[i], angle);   
        }   
    }

    draw() {

        
        stroke(this.color);
        
        beginShape()
            for (let i = 0; i < this.points.length; i++ ) {
                vertex(this.points[i].get(1), this.points[i].get(2), this.points[i].get(3));
            }

        endShape(CLOSE)

    }    
}



let easycam;
let r;
let angle = 0

function setup() {
    createCanvas(640,480, WEBGL);
    easycam = new Dw.EasyCam(this._renderer)
    r = new sphere(0, 0, 200, 3, 3)
    //r.translate(1,1,1)
    console.log(r.points)
}

function draw() {
    background(255);
    
    
    r.draw()    
    
    // angleMode(DEGREES)
    // let r = 3;
    // let total = 6;
    //     for (let a = 0 ; a < 360; a += 360/total ) {
    //         for (let j = 0 ; j < 360; j += 360/total ){
    //             let x = r * sin(j) * cos(a);
    //             let y = r * sin(j) * sin(a);
    //             let z = r * cos(j);
    //             stroke(255)
    //             point(x,y,z)
    //         }
    //     }
}
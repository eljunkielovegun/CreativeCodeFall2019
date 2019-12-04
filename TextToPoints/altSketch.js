let whatever;

function preload() {
  whatever = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup(){
    createCanvas(800,400);
    background(100)
//    textFont(whatever);  
//    textSize(72);
//    fill(255);
//    noStroke();
//    textAlign(CENTER);
//   
//    text("Creative Code", width/2, height/2)
    
    var points = whatever.textToPoints("Creative Code", 100,200,72,{
        sampleFactor: .5
    });
    
    print(points[200].x);
    
    var circle = new Circle;
    
    for(i =0; i<points.length; i++){
        var rand = random(points.length)
        //print((i+5)%points.length);
        var x1 = points[i].x;
        var y1 = points[i].y;
        var x2 = points[(i+100)%points.length].x;
        var y2 = points[(i+100)%points.length].y;
        var x3 = points[(abs(i-100))%points.length].x;
        var y3 = points[abs((i-100))%points.length].y;
        var x4 = points[(i+10)%points.length].x;
        var y4 = points[(i+10)%points.length].y;
        
        noFill();
        stroke(random(255));
       // color(random(255));
        if(abs(x2-x1)<20){
          bezier(x1,y1,x2,y2,x3,y3,x4,y4);
       //line(x1,y1,x2,y2);
        }
        circle.x= x1;
        circle.y=y1;
        circle.r=2;
        circle.display();
        //ellipse(x1,y1, 2);
    }
    
}

function Circle(x_,y_,r_){
    this.x =x_;
    this.y=y_;
    this.r = r_;
    
    this.display = function(){
        ellipse(this.x,this.y,this.r);
    }
    
}


function draw(){
    
    
}
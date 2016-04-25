var all_circles = [];
var circles_table;
var weekDays = ["Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday","Sunday"];
counter = 0;

var sw = 3;
var row_index = 0;
var circles_count;
var circles_index;
var circles_taste;
var circles_filling;
var circles_date;
var circles_day;
var circles_name;
var dayString;

function preload(){
  createCanvas(700,700);
circles_table = loadTable("p5/foodCalendar.csv", "csv","header");
}

function setup(){  
  for (var r = 0; r < circles_table.getRowCount(); r++){
    var taste = circles_table.get(r, "taste");
    var filling = circles_table.get(r, "feeling");
    var date = circles_table.get(r, "date");
    var name = circles_table.get(r, "food or drink");
    var day = circles_table.get(r, "day");

    all_circles.push(new Circles(taste, filling, date, name, day));
  }

}

function draw(){
        background(255);
  translate(350, 350);


  stroke(255, 34, 40);
  for (var i = 0; i < 7; i = i+1) {
      strokeWeight(1);
    text(weekDays[i],5,-330);
          strokeWeight(2);
    line(0, 0, 0, -350);
    rotate(2*PI/7);
  }
  pop();
    for (row_index = 0; row_index <26; row_index++) {
    all_circles[row_index].drawData();
  }
      for (row_index = 0; row_index <26; row_index++) {
    all_circles[row_index].legend();
  }
  strokeWeight(3);
  fill(135, 206, 250);
  rect(width-175, height-100, 150, 75, 20);
  strokeWeight(1);
  fill(0, 255, 0);
  ellipse(width-150, height-50, 10, 10);
  fill(0, 0, 255);
  ellipse(width-150, height-75, 10, 10);
  strokeWeight(3);
  fill(0);
  textSize(20);
  textAlign(CENTER);
  strokeWeight(1);
  textAlign(LEFT);
  textSize(15);
  text("how much did\nit fill me up", width-130, height-50);
  text("taste", width-130, height-70);

}


  function Circles(t,f,d,n,da) {
    this.date=d;
    this.day= da;
    this.taste = t;
    this.filling=f;
    this.nam=n;
    this.texy="";

  this.drawData = function() {


    this.circles_out = map(this.taste, 1.0, 10.0, -PI/2, 3*PI/2);
    this.circles_in = map(this.filling, 1.0, 10.0, -PI/2, 3*PI/2) ; 
    this.circles_pos = map(this.date, 0.0, 24.0, 0, -350);
    this.circles_line = map(this.day, 1.0, 7.0, 0, 12*PI/7);
    push();
    translate(350, 350);

    noFill();
    strokeWeight(sw);
    strokeCap(ROUND);
    stroke(240);

    rotate(this.circles_line);    

    stroke(0, 0, 255);
    arc(0, this.circles_pos, 40, 40, -PI/2, this.circles_out);
    stroke(0, 255, 0);
    arc(0, this.circles_pos, 30, 30, -PI/2, this.circles_in);
    pop();      
}
  this.legend = function(){
    if(mouseX >= 330-sin(this.circles_line)*this.circles_pos && mouseX <= 370-sin(this.circles_line)*this.circles_pos && mouseY >=330+sin(PI/2-this.circles_line)*this.circles_pos && mouseY<=370+sin(PI/2-this.circles_line)*this.circles_pos){
         if (mouseX+165<width){
          this.texy=" "+this.nam; 
          fill(255);
          strokeWeight(2);
          stroke(0);
          rect(mouseX+15,mouseY+15, 150, 40, 10);
          strokeWeight(1);
          fill(0);
          stroke(0);
          textSize(14);

          text(this.texy, mouseX +20, mouseY + 40);

  } else{
              this.texy=" "+this.nam; 
          fill(255);
          strokeWeight(2);
          stroke(0);
          rect(mouseX-165,mouseY+15, 150, 40, 10);
          strokeWeight(1);
          fill(0);
          stroke(0);
          textSize(14);

          text(this.texy, mouseX -160
            , mouseY + 40);


    }
}
}
}


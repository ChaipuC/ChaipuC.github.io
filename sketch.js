
var cols, rows;
var w = 30;
var grid = [];


function setup (){
    createCanvas(600,600);
    cols = floor(width/w);
    rows = floor(height/w);

    for (var j = 0; j < rows; j++){
        for (var i = 0; i < cols; i++){
            var cells = new Cell(i,j);
            grid.push(cells);
        }
    }
}

function draw(){
    background(51);
    for (var i = 0; i < grid.length; i++){
        grid[i].show();
    }
}

function Cell(i, j){
    this.i = i;
    this.j = j;

    this.show = function() {
        var x = this.i * w;
        var y = this.j * w;
        stroke(200);
        // rect(x, y, w, w);
        // noFill();
        line(x,y,x+w,y);
        line(x,y+w,x+w,y+w);
        line(x+w,y+w,x,y+w);
        line(x,y+w,x,y);

    }
}
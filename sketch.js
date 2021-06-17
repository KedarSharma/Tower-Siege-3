const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;

var score = 0;

var engine,world;

var state = "general";
var gameState = "onSling"

var randomColor = [];

for(var a= 0;a<=29;a++){
    randomColor[a] = '#'+Math.floor(Math.random()*12770000).toString(16);
}
function setup(){

    canvas = createCanvas(1500,600);

    engine = Engine.create();
    world = engine.world;

    poly = new Polygon(200,200,50,50);

    for(var a = 0;a<=4;a++){
        box[a] = new Box(500 + 50*a , 325, randomColor[a]);
    }
    for(var a = 5;a<=8;a++){
        box[a] = new Box(525 + 50*(a-5) , 285, randomColor[a]);
    }
    for(var a = 9;a<=11;a++){
        box[a] = new Box(550 + 50*(a-9) , 245, randomColor[a]);
    }
    for(var a = 12;a<=13;a++){
        box[a] = new Box(575 + 50*(a-12) , 205, randomColor[a]);
    }
    for(var a = 14;a<=14;a++){
        box[a] = new Box(600 + 50*(a-14) , 165, randomColor[a]);
    }


    for(var a = 15;a<=19;a++){
        box[a] = new Box(1100 + 50*(a-15) , 225, randomColor[a]);
    }
    for(var a = 20;a<=23;a++){
        box[a] = new Box(1125 + 50*(a-20) , 185, randomColor[a]);
    }
    for(var a = 24;a<=26;a++){
        box[a] = new Box(1150 + 50*(a-24) , 145, randomColor[a]);
    }
    for(var a = 27;a<=28;a++){
        box[a] = new Box(1175 + 50*(a-27) , 105, randomColor[a]);
    }
    for(var a = 29;a<=29;a++){
        box[a] = new Box(1200 + 50*(a-29) , 65, randomColor[a]);
    }

    ground1 = new Ground(750,-5000,10000,10000);
    ground2 = new Ground(-5000,300,10000,1000);
    ground3 = new Ground(6500,300,10000,1000);
    ground4 = new Ground(750,5600,10000,10000);
    

    platform1 = new Ground(600,350,300,10);
    platform2 = new Ground(1200,250,300,10);
    platform3 = new Ground(100,450,100,10);

    sling1 = new Slingshot({x:100,y:350},poly.body);
}

function draw(){

    Engine.update(engine);

    if(state == "general"){
		background("black");
        stroke("red");
        strokeWeight(1);
        fill("red");
        textSize(70);
        text("TOWER SIEGE-3",450,70);

        textSize(40);
        fill("lime");
        stroke("lime");
        text("Your task is to make the two block pyramids fall using the little polygon kept on \nthe left side and increase your score.",40,150);
        text("Drag your mouse and release it to shoot the polygon.",40,260);
        text("Press space and attempt at shooting again.",40,320);
        text("Enjoy and try to make the best use of flaws in the game. ;-)",40,380);

        textSize(50);
        fill("white");
        text("Press Enter key to play",420,500);

        stroke("blue");
        strokeWeight(4)
        line(430,80,1020,80);

        if(keyCode == 13){
            state = "play";
        }
    }

    if(state == "play"){

		myTime();

		if(bg == null){
			background("black");
		}
		else{
			background(bg);
		}

        for(var a = 0;a<=29;a++){
            box[a].display();
        }

        textSize(35);
        fill("red");
        noStroke();
        text("Score : " + score,10,50)

        ground1.display();
        ground2.display();
        ground3.display();
        ground4.display();

        platform1.display();
        platform2.display();
        platform3.display();

        poly.display();
        
        playing();
        scoring();
		
    }

    if(state == "win"){
		background("black");
        textSize(100);
		fill("red");
        text("YOU WIN!!!!!!!",400,200);

        fill("lime");
        text("You scored "+ score + " points",300,400);
    }
}

function mouseDragged(){
    if(state == "play" && gameState == "onSling")
    Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    if(state == "play"){
        sling1.fly();
        gameState = "launched";
    }
}

function keyPressed(){
    if(keyCode == 32 && state == "play" && gameState == "launched"){
        Matter.Body.setPosition(poly.body,{x:100,y:350});
        sling1.attach(poly.body);
        gameState = "onSling";
    }
}

function playing(){
    if( box[0].body.position.y >560 &&
        box[1].body.position.y >560 &&
        box[2].body.position.y >560 &&
        box[3].body.position.y >560 &&
        box[4].body.position.y >560 &&
        box[5].body.position.y >560 &&
        box[6].body.position.y >560 &&
        box[7].body.position.y >560 &&
        box[8].body.position.y >560 &&
        box[9].body.position.y >560 &&
        box[10].body.position.y >560 &&
        box[11].body.position.y >560 &&
        box[12].body.position.y >560 &&
        box[13].body.position.y >560 &&
        box[14].body.position.y >560 &&
        box[15].body.position.y >560 &&
        box[16].body.position.y >560 &&
        box[17].body.position.y >560 &&
        box[18].body.position.y >560 &&
        box[19].body.position.y >560 &&
        box[20].body.position.y >560 &&
        box[21].body.position.y >560 &&
        box[22].body.position.y >560 &&
        box[23].body.position.y >560 &&
        box[24].body.position.y >560 &&
        box[25].body.position.y >560 &&
        box[26].body.position.y >560 &&
        box[27].body.position.y >560 &&
        box[28].body.position.y >560 &&
        box[29].body.position.y >560){
            state = "win";
        }

}

function scoring(){
    for(var a = 0;a<=29;a++){
        if(box[a].body.position.y>545 && box[a].body.position.y<560){
            score = score + 1;
        }
    }
}

async function myTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();
    var datetime = responseJson.datetime;
    var hour = datetime.slice(11,13);
	if((hour>=20 && hour<=24)||(hour>=0 && hour<=5)){
		bg = "#190f63";
	}
	if((hour>=5 && hour<=12)){
		bg = "#e4e876";
	}
	if((hour>=12 && hour<=16)){
		bg = "#edf250";
	}
	if((hour>=16 && hour<=18)){
		bg = "#ebbd49";
	}
}
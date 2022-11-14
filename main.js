//Criar uma referência para tela

canvas = Document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Dê altura e largura específicas para a imagem do carro

greencar_whidt = 75;
greencar_height = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.

greencar_x = 5;
greencar_y = 225;


function add() {
 background_Imgtag = new Image();
 background_Imgtag.onload = uploadBackground;
 background_Imgtag.src = background_image;
	
 greencar_Imgtag = new Image();
 greencar_Imgtag.onload = uploadGreenCar;
 greencar_Imgtag.src = greencar_image;
 //carregar carro e imagens de fundo na tela.
}

function uploadBackground() {
	ctx.drawImage(background_Imgtag, 0, 0, canvas.widht, canvas.height);

}

function uploadGreenCar() {
	tx.drawImage(greencar_Imgtag, greencar_x,greencar_y , greencar_width, greencar_height);
	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
      greencar_y = greencar_y - 10;
console.log("when up arrow is pressed, x = " +greencar_x +  " | y = " + greencar_y);
uploadBackground();
uploadGreenCar();
	}
}
function down()
{
	if(greencar_y >=0)
	{
      greencar_y = greencar_y - 10;
console.log("when up arrow is pressed, x = " +greencar_x +  " | y = " + greencar_y);
uploadBackground();
uploadGreenCar();
	}
}
function left()
{
	if(greencar_y >=0)
	{
      greencar_y = greencar_y - 10;
console.log("when up arrow is pressed, x = " +greencar_x +  " | y = " + greencar_y);
uploadBackground();
uploadGreenCar();
	}
}

function right()
{
	if(greencar_y >=0)
	{
      greencar_y = greencar_y - 10;
console.log("when up arrow is pressed, x = " +greencar_x +  " | y = " + greencar_y);
uploadBackground();
uploadGreenCar();
	}
}

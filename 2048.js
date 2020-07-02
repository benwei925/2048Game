

var numberArr = new Array();
var score=0;
window.onload = function(){

	alert("适度游戏益脑，沉迷游戏伤身。");


	document.getElementById('score').innerText = 0;

	newgame();
	var newgamebutton = document.getElementById('newgamebutton');
	newgamebutton.onclick =function(){
		score=0;
		document.getElementById('score').innerText = 0;
		newgame();
	}
	
}


//显示游戏数据到数字格上

function showNumber(){
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			var number_cell = document.getElementById('number_cell-'+i+'-'+j);
			if(numberArr[i][j]==0){
				number_cell.style.display = 'none';
			}else {
				number_cell.style.display = "block";
				number_cell.style.background = setBgColor(numberArr[i][j]);
				number_cell.style.color = setColor(numberArr[i][j]);
				number_cell.innerText = numberArr[i][j];
				if(numberArr[i][j]>=1024){
					number_cell.style.fontSize = "45px";
			    }else{
				    number_cell.style.fontSize = "60px";
				}
			}
		}
	}
}
//生成随机位置的随机数字
function getRandNumber(){

	//是否存在空的位置
	if(hasEmptyPositon() == true){


	//生成随机位置
	
	var randx = parseInt(Math.floor(Math.random()*4));
	var randy = parseInt(Math.floor(Math.random()*4));

	while(true){
		if(numberArr[randx][randy] == 0){
			break;
	    }else {
	    	randx = parseInt(Math.floor(Math.random()*4));
	    	randy = parseInt(Math.floor(Math.random()*4));
	    }
	}

	
	//生成随机数字
	
	var randNumber = Math.random()<0.5 ? 2:4;
	numberArr[randx][randy] =randNumber;

	showNumber();
	}
}

//清空棋盘区域
function removeAll(){
	var grid_container = document.getElementById('grid_container');
	var nodes = grid_container.childNodes;
	for(var i=nodes.length-1; i>=0; i--){
		grid_container.removeChild(nodes[i]);
	}

}


function isGameOver(){
    //没有空位置，并且不能向上下左右移动
    if(hasEmptyPositon() == false
    	&& canMoveLeft() == false
    	&& canMoveRight() == false
    	&& canMoveUp() == false
    	&& canMoveDown() == false){

    	alert("Game Over!");

    }
}

function setBgColor(number){
	switch(number){
		case 2: return"#eee4da";break;
		case 4: return"#EADDBB";break;
		case 8: return"#EFB176";break;
		case 16: return"#f59563";break;
		case 32: return"#f67c5f";break;
		case 64: return"#f65e3b";break;
		case 128: return"#edcf72";break;
		case 256: return"#edcc61";break;
		case 512: return"#9c0";break;
		case 1024: return"#33b5e5";break;
		case 2048: return"#09c";break;
		case 4096: return"#a6c";break;
		case 8192: return"#93c";break;

	}
}

function setColor(number){
	if(number<=4){
		return"#776E65";
	}else{
		return"#FFF";
	}
}


function closeWin(){
	var userAgent = navigator.userAgent;
	if  (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") != -1){
		window.location.herf="about:blank";
		window.close();
	}else{
		window.opener = null;
	    window.open('','_self');
	    window.close();
	}
	
}


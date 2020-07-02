//2048游戏的上下左右移动控制
document.onkeydown = function(ev) {
	switch(ev.keyCode){
		case 37: //left
		        moveLeft();
		        getRandNumber();
		        isGameOver();
		        break;
		case 38: //up
		        moveUp();
		        getRandNumber();
		        isGameOver();
		        break;
		case 39: //right
		        moveRight();
		        getRandNumber();
		        isGameOver();
		        break;
		case 40: //down
		        moveDown();
		        getRandNumber();
		        isGameOver();
		        break;
	}
}


function moveLeft(){

	//是否能够向左移动
	if(canMoveLeft() == true){
		for(var i=0; i<4; i++){
			for(var j=1; j<4; j++){
				if(numberArr[i][j] !=0){
					for(var k=0;k<j;k++){
						if(numberArr[i][k]==0 && hasObstacleRow(i,k,j,numberArr)){
							//可以移动
							numberArr[i][k] = numberArr[i][j];
							numberArr[i][j] = 0;
						}else if(numberArr[i][k] == numberArr[i][j] && hasObstacleRow(i,k,j,numberArr)){
							//可以移动
							numberArr[i][k] += numberArr[i][j];
							score += numberArr[i][k];
							document.getElementById('score').innerText = score;
							numberArr[i][j] = 0;
						}
					}	
				}
			}
		}
		return true;
	}
	return false;
}

function moveUp(){
    //是否能够向上移动
    if(canMoveUp() == true){
		for(var i=1; i<4; i++){
			for(var j=0; j<4; j++){
				if(numberArr[i][j] !=0){
					for(var k=0;k<i;k++){
						if(numberArr[k][j]==0 && hasObstacleCol(j,k,i,numberArr)){
							//可以移动
							numberArr[k][j] = numberArr[i][j];
							numberArr[i][j] = 0;
						}else if(numberArr[k][j] == numberArr[i][j] && hasObstacleRow(j,k,i,numberArr)){
							//可以移动
							numberArr[k][j] += numberArr[i][j];
							score += numberArr[i][k];
							document.getElementById('score').innerText = score;
							numberArr[i][j] = 0;
						}
					}	
				}
			}
		}
		return true;
	}
	return false;
}

function moveRight(){
	//是否能够向右移动
    if(canMoveRight() == true){
		for(var i=0; i<4; i++){
			for(var j=2; j>=0; j--){
				if(numberArr[i][j] !=0){
					for(var k=3;k>j;k--){
						if(numberArr[i][k]==0 && hasObstacleRow(i,k,j,numberArr)){
							//可以移动
							numberArr[i][k] = numberArr[i][j];
							numberArr[i][j] = 0;
						}else if(numberArr[i][k] == numberArr[i][j] && hasObstacleRow(i,k,j,numberArr)){
							//可以移动
							numberArr[i][k] += numberArr[i][j];
							score += numberArr[i][k];
							document.getElementById('score').innerText = score;
							numberArr[i][j] = 0;
						}
					}	
				}
			}
		}
		return true;
	}
	return false;
}

function moveDown(){
    //是否能够向下移动
    if(canMoveDown() == true){
		for(var i=2; i>=0; i--){
			for(var j=0; j<4; j++){
				if(numberArr[i][j] !=0){
					for(var k=3;k>i;k--){
						if(numberArr[k][j]==0 && hasObstacleCol(j,k,i,numberArr)){
							//可以移动
							numberArr[k][j] = numberArr[i][j];
							numberArr[i][j] = 0;
						}else if(numberArr[k][j] == numberArr[i][j] && hasObstacleRow(j,k,i,numberArr)){
							//可以移动
							numberArr[k][j] += numberArr[i][j];
							score += numberArr[i][k];
							document.getElementById('score').innerText = score;
							numberArr[i][j] = 0;
						}
					}	
				}
			}
		}
		return true;
	}
	return false;
}

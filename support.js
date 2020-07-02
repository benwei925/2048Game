//判断是否存在空位
function hasEmptyPositon() {
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			if(numberArr[i][j] == 0){
				return true;
			}
		}
	}

	return false;
}



//P判断是否能够向左移动
function canMoveLeft(){

	for (var i=0;i<4;i++){
		for (var j=1;j<4;j++){
			if(numberArr[i][j-1] == 0 || numberArr[i][j-1] == numberArr[i][j]){
				return true;
			}
		}
	}
	return false;
}


//P判断是否能够向右移动
function canMoveRight(){

	for(var i=0;i<4;i++){
		for( var j=2;j>=0;j--){
			if(numberArr[i][j+1] == 0 || numberArr[i][j+1] == numberArr[i][j]){
				return true;
			}
		}
	}

	return false;
}


//P判断是否能够向上移动
function canMoveUp(){

	for(var i=1;i<4;i++){
		for( var j=0;j<4;j++){
			if(numberArr[i-1][j] == 0 || numberArr[i-1][j] == numberArr[i][j]){
				return true;
			}
		}
	}

	return false;
}

//P判断是否能够向下移动
function canMoveDown(){

	for(var i=2;i>=0;i--){
		for( var j=0;j<4;j++){
			if(numberArr[i+1][j] == 0 || numberArr[i+1][j] == numberArr[i][j]){
				return true;
			}
		}
	}

	return false;
}

//判断行方向上是否有障碍物
function hasObstacleRow(row,col1,col2,numberArr){

	for(var i=col1+1; i<col2; i++){
		if(numberArr[row][i] !=0){
			return false;
		}
	}

	return true;
}

//判断列方向上是否有障碍物
function hasObstacleCol(col,row1,row2,numberArr){

	for(var i=row1+1; i<row2; i++){
		if(numberArr[i][col] !=0){
			return false;
		}
	}

	return true;
}
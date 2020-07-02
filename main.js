function newgame(){
    score=0;
    //清空原有棋盘区域
    removeAll();

    //棋盘格的初始化
    initGridCell();
    
    //数字格的初始化
    initNumberCell();
    
    //在两个随机位置产生两个随机数字（2，4）
    getRandNumber();
    getRandNumber();

    //showNumber();
}
//初始化棋盘格
function initGridCell(){
    var grid_container = document.getElementById('grid_container');

    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var grid_cell = document.createElement('div');
            grid_cell.setAttribute('class',"grid_cell");
            grid_container.appendChild(grid_cell);
            grid_cell.style.left = 20+120*j+ "px";
            grid_cell.style.top = 20+120*i+ "px";
        }
    }

    //初始化游戏数据
    for(var i=0;i<4;i++){
        numberArr[i] = new Array();
        for(var j=0;j<4;j++){
            numberArr[i][j] = 0;
        }
    }
}
//初始化数字格
function initNumberCell(){
    var grid_container = document.getElementById('grid_container');

    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            var number_cell = document.createElement('div');
            number_cell.setAttribute('class','number_cell');

            number_cell.setAttribute('id','number_cell-'+i+'-'+j);

            grid_container.appendChild(number_cell);
            number_cell.style.left = 20+120*j+"px";
            number_cell.style.top = 20+120*i+"px";
            //number_cell.style.background = "#FF0";
            //number_cell.innerText = numberArr[i][j];
        }
    }
}
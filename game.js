var tetrisdiv = document.getElementById("tetris-bg");


const rows = 20;
const column = 10;

// global vars
var blockName;
var currentBlock;
var currentShape;
var shapesArray = [];
var shapesIdArray = [];
var shapeId;
var gameActive = false;
var score = 0;





const tetrisGrid = [];
for (let i=0; i < rows; i++) {
    tetrisGrid[i] = [];
    for(let j=0; j < column; j++) {
        tetrisGrid[i][j] = undefined;
    }
}
console.log(tetrisGrid)

shapeId = 0;

function startGame(){
    console.log()
    document.getElementById('start').style.visibility="hidden";
    gameActive = true;
    var audio = new Audio('SugarCrash! - ElyOtto (10 Minute Loop).mp3');
    audio.play();
    appearShape();
    
    
}



function appearShape() {
    const shapes = {
        "L" : [[1,1],[1,2],[1,3],[2,3]],
        "J" : [[3,1],[3,2],[3,3],[2,3]],
        "Z" : [[1,1],[2,1],[2,2],[3,2]],
        "S" : [[1,2],[2,1],[2,2],[3,1]],
        "T" : [[1,1],[2,1],[2,2],[3,1]],
        "O" : [[1,1],[1,2],[2,1],[2,2]],
        "I" : [[1,1],[1,2],[1,3],[1,4]],
    }

    var key = Object.keys(shapes);
    blockName = key[Math.floor(key.length * Math.random())];
    var newBlock = shapes[blockName];

        // Check spaqn
    for(let y = 0 ; y < 4 ; y++) {
        // CHecks if coordinate is free
        if(tetrisGrid[newBlock[y][1]][newBlock[y][0]] != undefined) {
            endGame();
        }
    }

    console.log(blockName);
    
    // Place piece in grid
    var newDiv = document.createElement('div');
    newDiv.setAttribute("id", "moving");
    document.getElementById("tetris-bg").appendChild(newDiv);

    shapesArray.push([[], [], [], []])
    for (let y = 0; y < 4; y++) {
        
        /*
        coordX = Number(newBlock[y][0] * 30);
        coordY = Number(newBlock[y][1] * 30);
        */

        //console.log(coordX, coordY);

        var block = document.createElement('div');
        block.style.width= 30 + "px";
        block.style.height= 30 + "px";
        if (blockName == "L") {
            block.style.backgroundColor='Orange';
        } else if (blockName == "J") {
                block.style.backgroundColor='#0000ff';
        } else if (blockName == "Z") {
            block.style.backgroundColor='Red';
        } else if (blockName == "S") {
            block.style.backgroundColor='Green';
        } else if (blockName == "T") {
            block.style.backgroundColor='Magenta';
        } else if (blockName == "O") {
            block.style.backgroundColor='Yellow';
        } else if (blockName == "I") {
            block.style.backgroundColor='#00ffff';
        } 
        //block.style.tranform = "translate(" + coordX + "px," + coordY + "px)";
        block.style.position = "absolute";
        block.id = shapesArray.length.toString() + "_" + y.toString();
        shapesArray[shapesArray.length - 1][y].push(block.id);
        
        //document.getElementById("tetris-bg").appendChild(block);
        newDiv.appendChild(block);

        tetrisGrid[newBlock[y][1]][newBlock[y][0]] = block.id;
        document.getElementById(block.id).style.transform = "translate(" + newBlock[y][0] * 30 + "px," + newBlock[y][1] * 30 + "px)";

    }


    console.log(tetrisGrid);
    console.log(newBlock);
    console.log(shapesArray);

    currentBlock = newBlock;
    shapeId = shapeId + 1;
    shapesIdArray.push(shapeId);

}
/** 
function checkCollision(direction) {
        var noCollision = true;
        var tempCoords = [];
        var left;
        var down;
        switch(direction) {
            case 'left'    : left = -1; down =  0; break;
            case 'right'   : left =  1; down =  0; break;
            case 'down'    : left =  0; down = -1; break;
            case 'autoDown': left =  0; down = -1; break;
        }
        for (let i=0; i<4; i++) {
            for (let j=0; j<2; j++) {
                tempCoords[j] = coords[j] + (shapes[currentBlockId][i][j] - 1);
            }
            // Check Vertical
            if (tempCoords[1] <= 20) {
                if (tetrisGrid[tempCoords[0]+left][tempCoords[1]+down] != null ||
                    tempCoords[1]+down < 0)
                    tetrisGrid[currentBlock[y][1]][currentBlock[y][0]] = ""; {
                        noCollision = false;
                        break;
                    }
            }
            // Check Horizontal
            if (tempCoords[0]+left < 0 ||
                tempCoords[0]+left >=10) {
                    noCollision = false;
                    break;
                }
        }
        return noCollision;
    }

    */

function completeRow(){
    console.log("REACHING FUNC");
    for(let y=0; y<20; y++){
        var c = 0;
        console.log("reaching" + y);
        for(let i=0; i<10; i++){
            if (tetrisGrid[y][i] == undefined){
                console.log("has undefined");
                break;
            }
            c = c + 1;
            console.log("C value" +c)
        }
        if (c == 10){
            console.log("EVERY CELL NOTT UNDEFINED");
            console.log("ROW " + y);
            for(let j=0; j<10; j++){
                console.log("deleted element"+ tetrisGrid[y][j]);
                tetrisGrid[y][j] = undefined;
                console.log(tetrisGrid);
            }
            break;

            
        }
    }
    }



function checkdown(){
        // Check Vertical
        for (let y = 0; y < 4; y++) {
            if (currentBlock[y][1]+1 < 19){
                var one = tetrisGrid[currentBlock[y][1]][currentBlock[y][0]];
                var two = tetrisGrid[currentBlock[y][1]+1][currentBlock[y][0]];
                console.log("nowwww");
                console.log(one);
                console.log(two);
                //console.log(tetrisGrid);
                if (two !== undefined){
                    console.log("two is not equal to nothing");
                    console.log('first point ' + one.charAt(0));
                    console.log('second point ' + two.charAt(0));

                    if (one.substring(0,2) != two.substring(0,2)){
                        console.log("HITT");
                        var blockToStop = document.getElementById("moving");
                        blockToStop.setAttribute('id', "notMoving");
                        if (gameActive){
                            appearShape();
                        }

                        break;
                    }
                    else{
                        console.log("Miss");
                    }
                }
            }
            else{

        }
    }
}

function checkleft(){
        // Check Vertical
        for (let y = 0; y < 4; y++) {
            if (currentBlock[y][1]-1 > 0){
                var one = tetrisGrid[currentBlock[y][1]][currentBlock[y][0]];
                var two = tetrisGrid[currentBlock[y][1]][currentBlock[y][0]-1];
                console.log("LEFFFFFFT");
                console.log(one);
                console.log(two);
                //console.log(tetrisGrid);
                if (two !== undefined){
                    console.log("LEEEEEEEEFFTTTT two is not equal to nothing");
                    console.log('LEEEEEEEFFFFFTTTTT first point ' + one.charAt(0));
                    console.log('LEEEEEEEFFFFFTTTTTsecond point ' + two.charAt(0));

                    if (one.substring(0,2) != two.substring(0,2)){
                        console.log("LEEEEEEEFFFFFTTTTTHITT");
                        var blockToStop = document.getElementById("moving");
                        blockToStop.setAttribute('id', "notMoving");
                        if (gameActive){
                            appearShape();
                        }

                        break;
                    }
                    else{
                        console.log("LEEEEEEEFFFFFTTTTTMiss");
                    }
                }
            }
            else{

        }
    }
}

function sortFunctionX(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] > b[0]) ? -1 : 1;
    }
}

function sortFunctionMinX(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

function sortFunctionY(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] > b[1]) ? -1 : 1;
    }
}

function endGame() {
    gameActive = false;
    score = shapesArray.length;
    alert("GAME OVER - score is " + score);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'leaderboard.php');
    let data = 'score='+score;
    xhr.setRequestHeader("Content_type", "application/x-www-form-urlencoded");
    xhr.send(data);


}


document.addEventListener("keydown", (k) => {
    
    console.log(k.key);
    switch (k.key) {
        case "ArrowDown":
            completeRow();
            var parent = document.getElementById("moving");
            var piecesToMove = parent.getElementsByTagName('div');

            max = -999
            for (let y = 0; y < 4; y++) {
                if (currentBlock[y][1] > max){
                    //('current block ' + currentBlock[y][1]);
                    max = currentBlock[y][1];
                    //console.log('max for lowesst block ' + max);
                }
            }



                for (let y = 0; y < 4; y++) {
                // reset tetris grid
                //console.log('lowest point ' + max);
                if (max == 19){
                   // console.log('reached wall');
                    var blockToStop = document.getElementById("moving");
                    blockToStop.setAttribute('id', "notMoving");
                    if (gameActive){
                            appearShape();
                        }

                    break;
                }
                else{
                    currentBlock.sort(sortFunctionY);
                    console.log(currentBlock);
                    console.log(shapesArray[y]);
                    //console.log('not reached wall');
                    for (let y = 0; y < 4; y++) {
                
                        var temp = tetrisGrid[currentBlock[y][1]][currentBlock[y][0]]
                        // reset tetris grid
                        
                        tetrisGrid[currentBlock[y][1]][currentBlock[y][0]] = undefined;
                        currentBlock[y][1] +=1;
                        
        
                        
                        
                        //document.getElementById(block.id).style.transform = "translate(" + (coordX + 30) + "px," + (coordY + 30) + "px)";
                        piecesToMove[y].style.transform = "translate( " + (currentBlock[y][0])* 30 + "px, " + (currentBlock[y][1])* 30 + "px)";
        
                        // reset tetris grid
                        //console.log(temp);
                        tetrisGrid[currentBlock[y][1]][currentBlock[y][0]] = temp;
                        console.log(tetrisGrid);
                        
                    }
                    break;

                }
            }
            checkdown();


            break;
        
        case "ArrowRight":
            completeRow();
            var parent = document.getElementById("moving");
            var piecesToMove = parent.getElementsByTagName('div');

            max = -999
            for (let y = 0; y < 4; y++) {
                if (currentBlock[y][0] > max){
                    //console.log('current block ' + currentBlock[y][0]);
                    max = currentBlock[y][0];
                    //console.log('max for block ' + max);
                }
            }

                
                for (let y = 0; y < 4; y++) {
                // reset tetris grid
                //console.log('leftest point ' + max);
                if (max == 9){
                    //console.log('reached wall');
                    break;
                }
                else{ var rightest = false;
                    for (let y = 0; y < 4; y++) {
                        console.log("jsabfkjsbfkjdsbsdsjkfbsdjbfsdjkdfbkjfsd________________---")
                        if (currentBlock[y][1]+1 > 10){
                                                    console.log("jsabfkjsbfkjdsbsdsjkfbsdjbfsdjkdfbkjfsd________________---")

                            var one = tetrisGrid[currentBlock[y][1]][currentBlock[y][0]];
                            var two = tetrisGrid[currentBlock[y][1]][currentBlock[y][0]+1];
                            console.log("LEFFFFFFT");
                            console.log(one);
                            console.log(two);
                            //console.log(tetrisGrid);
                            if (two !== undefined){
                                console.log("LEEEEEEEEFFTTTT two is not equal to nothing");
                                console.log('LEEEEEEEFFFFFTTTTT first point ' + one.charAt(0));
                                console.log('LEEEEEEEFFFFFTTTTTsecond point ' + two.charAt(0));

                                if (one.substring(0,2) != two.substring(0,2)){
                                    console.log("LEEEEEEEFFFFFTTTTTHITT");
                                    rightest = true;
                                }
                                else{
                                    console.log("LEEEEEEEFFFFFTTTTTMiss");
                    }
                }
            }
    }
    if (rightest == true){
        break;
    }
                    //console.log('not reached wall');

                    currentBlock.sort(sortFunctionX);
                    console.log(currentBlock);
                    console.log(shapesArray[y]);


                    for (let y = 0; y < 4; y++) {
                        
                        
                        var temp = tetrisGrid[currentBlock[y][1]][currentBlock[y][0]]
                        // reset tetris grid
                        
                        tetrisGrid[currentBlock[y][1]][currentBlock[y][0]] = undefined;
                        currentBlock[y][0] +=1;
                        
        
                        
                        
                        //document.getElementById(block.id).style.transform = "translate(" + (coordX + 30) + "px," + (coordY + 30) + "px)";
                        piecesToMove[y].style.transform = "translate( " + (currentBlock[y][0])* 30 + "px, " + (currentBlock[y][1])* 30 + "px)";
        
                        // reset tetris grid
                        console.log(temp);
                        tetrisGrid[currentBlock[y][1]][currentBlock[y][0]] = temp;
                        console.log(tetrisGrid);
                    }
                    break;

                }
            }
    

            break;
    
        
        
        case "ArrowLeft":       
            completeRow();
            var parent = document.getElementById("moving");
            var piecesToMove = parent.getElementsByTagName('div');

            //console.log("test");

            max = 100
            for (let y = 0; y < 4; y++) {
                if (currentBlock[y][0] < max){
                    //console.log('current block ' + currentBlock[y][0]);
                    max = currentBlock[y][0];
                    //console.log('max for block ' + max);
                }
            }

                for (let y = 0; y < 4; y++) {
                // reset tetris grid
                //console.log('leftest point ' + max);
                if (max == 0){
                    //console.log('reached wall');
                    break;
                }
                else{
                    var leftest = false;
                    for (let y = 0; y < 4; y++) {
                        if (currentBlock[y][1]-1 > 0){
                            var one = tetrisGrid[currentBlock[y][1]][currentBlock[y][0]];
                            var two = tetrisGrid[currentBlock[y][1]][currentBlock[y][0]-1];
                            console.log(one);
                            console.log(two);
                            //console.log(tetrisGrid);
                            if (two !== undefined){
                                console.log('irst point ' + one.charAt(0));
                                console.log('second point ' + two.charAt(0));

                                if (one.substring(0,2) != two.substring(0,2)){
                                    console.log("");
                                    leftest = true;
                                }
                                else{
                                    console.log("");
                    }
                }
            }
    }
    if (leftest == true){
        break;
    }

                    currentBlock.sort(sortFunctionMinX);
                    console.log(currentBlock);
                    console.log(shapesArray[y]);

                    //console.log('not reached wall');
                    for (let y = 0; y < 4; y++) {
                
                        var temp = tetrisGrid[currentBlock[y][1]][currentBlock[y][0]]
                        // reset tetris grid
                        
                        tetrisGrid[currentBlock[y][1]][currentBlock[y][0]] = undefined;
                        currentBlock[y][0] -=1;
                        
                     
                         //document.getElementById(block.id).style.transform = "translate(" + (coordX + 30) + "px," + (coordY + 30) + "px)";
                        piecesToMove[y].style.transform = "translate( " + (currentBlock[y][0])* 30 + "px, " + (currentBlock[y][1])* 30 + "px)";
        
                        // reset tetris grid
                        console.log(temp);
                        tetrisGrid[currentBlock[y][1]][currentBlock[y][0]] = temp;
                        //console.log(tetrisGrid)
                    }
                    break;

                }
            }
            console.log("DHGUKDGUIGFUIGFIUGFIUGRI____________________DKEGFUFGKFGKFGKF");
            break;
        
    }      
} )
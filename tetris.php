<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" type="text/css" href="StyleSheet.css"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    
</head>
    
<body>
<?php include("navbar.php");
session_start();
if (!isset(($_SESSION["UserName"]))) {
    header("Location: index.php");
}
?> 
    
    <div class = "main">
    
        <div class="daddybox">
            <div class="box">
            <button class="button" id ="start" onclick=startGame()>Start the game</button>
                
                <div id="tetris-bg" >
                    
                </div>
            </div>
        </div>       

    </div>
    <script src="game.js"> </script>
</body>

</html>
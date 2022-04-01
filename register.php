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
    <?php include("navbar.php");?> 
    
    <div class="main">
        <div class="daddybox">
            <div class="box">
                <h1>Register </h1>
                <form action="/index.php" method="POST">
                    <label for="firstname">First name: </label><br>
                    <input type="text" id="firstname" name="firstname"><br>
                    <label for="lastname">Last name: </label><br>
                    <input type="text" id="lastname" name="lastname"><br>
                    <label for="username">Username: </label><br>
                    <input type="text" id="username" name="username"><br>
                    <label for="password">Password: </label><br>
                    <input type="password" id="password" name="password"><br>
                    <label for="confpassword">Confirm password: </label><br>
                    <input type="password" id="confpassword" name="confpassword"><br>
                    <label for="display"> Display Scores on leaderboard? </label>
                    <input type="radio" id="display" name="display" value="yes" checked>Yes</input>
                    <input type="radio" id="display" name="display" value="no">No</input> <br>
                    <input type="submit" value="Submit" name="register">

                </form>

            </div>
        </div>

    </div>  
    
</body>
</html>
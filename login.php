<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
    <link rel="stylesheet" type="text/css" href="StyleSheet.css"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">

</head>
<body>
    <?php include("navbar.php");?>
    
    <div class="main">
        <div class = "daddybox">
            <div class ="box">
                <h1> Login </h1>
                <form action="/loginauth.php">
                    <label for="username">Username: </label><br>
                    <input type="text" id="username" name="username" placeholder="Username"><br>
                    <label for="password">Password: </label><br>
                    <input type="password" id="password" name="password" placeholder="Password"><br>
                    <input type="submit" value="Submit" name="login">
                </form>
                <p>Don't have an account? <a href='register.php'>Register now</a></p>
            </div>
        </div>

        <?php
        if ( isset( $_POST['login'])) {
            $username = mysqli_real_escpae_string($link, $_POST['username']);
            $password = mysqli_real_escpae_string($link, $_POST['password']);
        }
        ?>
    </div>
</body>
</html>
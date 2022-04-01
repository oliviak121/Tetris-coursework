<?php

//Start session and connect to database
session_start();

//Gets database information
$domain = 'localhost';
$usr = 'oak202';
$pwd = 'WebDev2021'; 
$database = 'tetris';
echo 1;
$link = mysqli_connect($domain, $usr, $pwd, $database);
echo 3;

if($link == false) {
    die("ERROR: unable to connect to database.".mysqli_connect_error());
    exit();
    session_destroy();
} 
echo 2;

//Check request method
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $name = htmlentities($_POST["firstname"]);
    $surname = htmlentities($_POST["lastname"]);
    $username = htmlentities($_POST["username"]);
    $password = htmlentities($_POST["password"]);
    $display = htmlentities($_POST["display"]);

    
    //Check password must only be letters and or numbers
    if (preg_match('/[^A-Za-z0-9]/', $password)) {
        echo "Password must only contain uppercase and lowercase letters and numbers";
        //header("Location: registration.php");
    }

    //Checks password is equal to or more than 8 characters
    if (strlen($password) < 8) {
        echo "password must be at least 8 characters";
        //header("Location: registration.php");
    }


    $usernamequerysafe = "SELECT UserName FROM Users WHERE UserName = ?";
    $stmt = $link->prepare($usernamequerysafe);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows !== 0) {
        die("Already account with that username, choose another");
        header("Location: register.php");
    }

    $options = [
        'cost' => 12,
    ];

    $passwd_hash = password_hash($password, PASSWORD_BCRYPT, $options);

    echo $passwd_hash;

    echo '--------';

    echo $display;

    echo '--------';

    $sql = "INSERT INTO Users (UserName, FirstName, LastName, Password, Display) VALUES ('" . $username  . "', '" . $name  . "', '" . $surname  . "', '" . $passwd_hash  . "', '" . $display  . "')";
    $sql2 = "INSERT INTO Users (UserName, FirstName, LastName, Password, Display) VALUES (?,?,?,?,?)";

    echo $sql;
    echo $sql2;

    //$stmt = $link->prepare($sql);
    //$stmt = $link->prepare($sql2);
    //echo $stmt;
    echo 'reached5';
    //$stmt->bind_param("sssss", $username, $name, $surname, $passwd_hash, $display);
    echo 'reached1';

    if ($link->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $link->error;
      }



    echo 'reached2';


    $_SESSION["UserName"] = $username;
} else {
    echo "Incorrect request method";
}

echo 'reached3';

mysqli_close($link);

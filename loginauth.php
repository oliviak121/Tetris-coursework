<?php
session_start();

//Gets database information
$domain = 'localhost';
$username = 'oak202';
$password = 'WebDev2021'; 
$database = 'tetris';
echo 1;
$link = mysqli_connect($domain, $username, $password, $database);
echo 3;

if($link == false) {
    die("ERROR: unable to connect to database.".mysqli_connect_error());
    exit();
} 
echo 2;

$usrname = htmlentities($_GET["username"]);
$pwd = htmlentities($_GET["password"]);

echo $usrname;
echo $pwd;

//sql query to get the password from the database for the username entered
$sql = "SELECT Password FROM Users WHERE UserName = ?";

echo $sql;

echo 18;
$stmt = $link->prepare($sql);
$stmt->bind_param("s", $usrname);
$stmt->execute();
$result = $stmt->get_result();
echo 7;
while ($row = $result->fetch_assoc()) {
    $saltedpassword = $row['Password'];
    echo $saltedpassword;
    echo 6;
}

echo 8;

echo 'stored password';
echo $saltedpassword;

echo 'entered password';
echo $pwd;

if (password_verify($pwd, $saltedpassword)) {
    $_SESSION['username'] = $usrname;
    echo 'verified';
    header("Location: /tetris.php");
    $_SESSION['loggedin'] = true;
} else {
    echo "Username or Password is entered incorrectly";
}

echo 9;
mysqli_close($link);
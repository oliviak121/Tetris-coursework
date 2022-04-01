

<?php 
$domain = 'localhost';
$username = 'oak202';
$password = 'WebDev2021'; 
$database = 'tetris';
echo 1;
$link = mysqli_connect($domain, $username, $password, $database);
echo 3;

if($link == false) {
    die("ERROR: unable to connect to database.".mysqli_connect_error());
} 
echo 2;



?> 
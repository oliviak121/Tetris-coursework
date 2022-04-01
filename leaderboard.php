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

    $domain = 'localhost';
    $usr = 'oak202';
    $pwd = 'WebDev2021'; 
    $database = 'tetris';

    $conn = mysqli_connect($domain, $usr, $pwd, $database);
    if( isset($_POST['score'])) {
        
            $sql = "INSERT INTO Scores (Username, Score) VALUES ('";
                $sql .= $_SESSION['UserName'];
                $sql .= "', '";
                $sql .= $_POST['score'];
                $sql .= "');";
            if (mysqli_query($conn, $sql)) {
                echo "New score added successfully";
            } else {
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }
    }
    mysqli_close($conn);
    ?>
    
    <div class="main">
        
        <div class="daddybox">
            <div class="box">
            <h1>Leaderboard </h1>
            <table id='leaderboard'>
                <tr>
                    <th> Username </th>
                    <th> Score </th>
                </tr>
                
            </table> 

            <script>
                function addRow(leaderboard) {
                    let tableRef = document.getElementById(leaderboard);
                    let newRow = tableRef.insertRow(-1);

                    let newUserCell = newRow.insertCell(0);
                    let newHighCell = newRow.insertCell(1);

                    let newUsername = document.createTextNode($username);
                    newUserCell.appendChild(newUsername);

                    let newHighCell = document.createTextNode(#score from database);
                    newHighCell.appendChild(newHighname);
                }

                addRow('leaderboard')


            </div>
        </div>
    </div>
</body>
</html>
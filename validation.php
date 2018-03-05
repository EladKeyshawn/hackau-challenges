<?php
$servername = "localhost";
$username = "root";
$password = "haim1993";

// Create connection
$conn = mysqli_connect($servername, $username, $password);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// enter database
$sql = "USE passwords";
if (mysqli_query($conn, $sql)) {
    // echo "Enter DATABASE successfully";
} else {
    // echo "Error creating database: " . mysqli_error($conn);
}


$sql = "SELECT * FROM levels";
if (mysqli_query($conn, $sql)) {
    // echo "Enter DATABASE successfully";
} else {
    // echo "Error creating database: " . mysqli_error($conn);
}

$result = $conn->query($sql);

$id = $_POST["id"];
$pass = $_POST["password"];

if ($result->num_rows > 0) {
    // output data of each row
    $flag = false;
    while($row = $result->fetch_assoc()) {
        if ($id == 3) {
            if (($row["id"] == $id) && ($row["pass"] == $pass)) {
                $flag = true;
                echo "yay, password is correct! :)";
                header( "refresh:3;url=./sql-injection.html" );
            }
        }
        else if ($id == 4) {
            if (($row["id"] == $id) && ($row["pass"] == $pass)) {
                $flag = true;
                echo "yay, password is correct! :)";
                header( "refresh:3;url=./cyber3.html" );
            }
        }
    }
    if (!$flag) {
        echo "wrong password!";
        header( "refresh:3;url=./cyber.html" );
    }
}

mysqli_close($conn);
?>

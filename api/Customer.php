<?php
/**
 * Created by IntelliJ IDEA.
 * User: Piyumi Shashikala
 * Date: 7/9/2019
 * Time: 9:30 PM
 */

require_once __DIR__ . "/../dbconnection/dbconnection.php";



$method = $_SERVER["REQUEST_METHOD"];

switch ($method) {
    case "POST":
        $customerID = $_POST['customerID'];
        $custFirstName = $_POST['custFirstName'];
        $custLastName = $_POST['custLastName'];
        $custAddress = $_POST['custAddress'];
        $custSalary = $_POST['custSalary'];

        if (!$connection) {
            echo mysqli_connect_error();
        } else {
            $SQL = "insert into customer values
            ('$customerID',
            '$custFirstName',
            '$custLastName',
            '$custAddress',
            '$custSalary')";
            $result = mysqli_query($connection, $SQL);
            if ($result) {
                echo 1;
            } else {
                echo 0;
            }

        }
        break;

    case "GET":
        if (!$connection) {
            echo mysqli_connect_error();
        } else {
            $SQL = "select * from customer ";
            $result = mysqli_query($connection, $SQL);

           echo json_encode($result->fetch_all());
        }
        break;

}
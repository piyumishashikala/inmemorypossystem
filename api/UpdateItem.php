<?php
/**
 * Created by IntelliJ IDEA.
 * User: Piyumi Shashikala
 * Date: 7/9/2019
 * Time: 11:53 PM
 */

require_once __DIR__ . "/../dbconnection/dbconnection.php";

$method = $_SERVER["REQUEST_METHOD"];

switch ($method) {
    case "POST":
        $itemCOde = $_POST['itemCOde'];
        $itemName = $_POST['itemName'];
        $itemqty = $_POST['itemqty'];
        $itemPrice = $_POST['itemPrice'];

        if (!$connection) {
            echo mysqli_connect_error();
        } else {
            $SQL = "update item set 
           
            fname='$itemCOde',
           lname= '$custLastName',
           address= '$custAddress',
            salary='$custSalary' where  cid='$customerID' ";
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
//            $SQL = "select * from customer ";
//            $result = mysqli_query($connection, $SQL);
//
//            echo json_encode($result->fetch_all());
        }
        break;

}
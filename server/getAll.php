<?php
header("Access-Control-Allow-Origin: https://angular-ivy-gdpfhs.stackblitz.io" );
$bd = include_once "bd.php";
$sentencia = $bd->query("select * from pendientes");
$Pendientes = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($Pendientes);

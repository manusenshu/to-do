<?php
header("Access-Control-Allow-Origin: https://to-do-angular.stackblitz.io" );
header("Access-Control-Allow-Headers: *");
if (empty($_GET["idPendiente"])) {
    exit("No hay id de Pendiente");
}
$idPendiente = $_GET["idPendiente"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("SELECT * from pendientes where id = ?");
$sentencia->execute([$idPendiente]);
$Pendiente = $sentencia->fetchObject();
echo json_encode($Pendiente);

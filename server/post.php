<?php
header("Access-Control-Allow-Origin: https://to-do-angular.stackblitz.io" );
header("Access-Control-Allow-Headers: *");
$jsonPendiente = json_decode(file_get_contents("php://input"));
if (!$jsonPendiente) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("INSERT into pendientes(titulo, descripcion, fecha, caducidad, estado) values (?,?,CURDATE(),?,587587587)");
$resultado = $sentencia->execute([$jsonPendiente->titulo, $jsonPendiente->descripcion, $jsonPendiente->caducidad]);
echo json_encode([
    "resultado" => $resultado,
]);

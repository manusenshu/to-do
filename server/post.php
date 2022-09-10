<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonPendiente = json_decode(file_get_contents("php://input"));
if (!$jsonPendiente) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("insert into pendientes(titulo, descripcion, fecha) values (?,?,CURDATE())");
$resultado = $sentencia->execute([$jsonPendiente->titulo, $jsonPendiente->descripcion, $jsonPendiente->fecha]);
echo json_encode([
    "resultado" => $resultado,
]);

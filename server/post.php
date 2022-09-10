<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonPendiente = json_decode(file_get_contents("php://input"));
if (!$jsonPendiente) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("insert into Pendientes(nombre, raza, edad) values (?,?,?)");
$resultado = $sentencia->execute([$jsonPendiente->nombre, $jsonPendiente->raza, $jsonPendiente->edad]);
echo json_encode([
    "resultado" => $resultado,
]);

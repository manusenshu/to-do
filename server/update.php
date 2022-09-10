<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");
}
$jsonPendiente = json_decode(file_get_contents("php://input"));
if (!$jsonPendiente) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("UPDATE pendientes SET titulo = ?, descripcion = ?, fecha = ? WHERE id = ?");
$resultado = $sentencia->execute([$jsonPendiente->titulo, $jsonPendiente->descripcion, $jsonPendiente->fecha, $jsonPendiente->id]);
echo json_encode($resultado);

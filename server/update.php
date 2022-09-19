<?php
header("Access-Control-Allow-Origin: https://to-do-angular.stackblitz.io" );
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
$sentencia = $bd->prepare("UPDATE pendientes SET titulo = ?, descripcion = ?, caducidad = ?, lMod = CURDATE() WHERE id = ?");
$resultado = $sentencia->execute([$jsonPendiente->titulo, $jsonPendiente->descripcion, $jsonPendiente->caducidad, $jsonPendiente->id]);
echo json_encode($resultado);

<?php
header("Access-Control-Allow-Origin: https://to-do-angular.stackblitz.io");
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

switch ($jsonPendiente->estado) {
    case 587587587:
        $newStatus = 588588588;
        $sentencia = $bd->prepare("UPDATE pendientes SET estado = ?, lMod = CURDATE() WHERE id = ?");
        $resultado = $sentencia->execute([$newStatus, $jsonPendiente->id]);
        break;
    case 588588588:
        $newStatus = 589589589;
        $sentencia = $bd->prepare("UPDATE pendientes SET estado = ?, lMod = CURDATE(), cierre = CURDATE() WHERE id = ?");
        $resultado = $sentencia->execute([$newStatus, $jsonPendiente->id]);
        break;
    case 589589589:
        $newStatus = 587587587;
        $sentencia = $bd->prepare("UPDATE pendientes SET estado = ?, lMod = CURDATE(), cierre = NULL WHERE id = ?");
        $resultado = $sentencia->execute([$newStatus, $jsonPendiente->id]);
        break;
    default:
        $newStatus = 588588588;
        $sentencia = $bd->prepare("UPDATE pendientes SET estado = ?, lMod = CURDATE() WHERE id = ?");
        $resultado = $sentencia->execute([$newStatus, $jsonPendiente->id]);
        break;
}
echo json_encode($resultado);

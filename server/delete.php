<?php
header("Access-Control-Allow-Origin: https://to-do-angular.stackblitz.io" );
header("Access-Control-Allow-Methods: DELETE");
$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["idPendiente"])) {
    exit("No hay id de Pendiente para eliminar");
}
$idPendiente = $_GET["idPendiente"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("DELETE FROM pendientes WHERE id = ?");
$resultado = $sentencia->execute([$idPendiente]);
echo json_encode($resultado);

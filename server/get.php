<?php
header("Access-Control-Allow-Origin: https://angular-ivy-gdpfhs.stackblitz.io" );
if (empty($_GET["idPendiente"])) {
    exit("No hay id de Pendiente");
}
$idPendiente = $_GET["idPendiente"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("select * from pendientes where id = ?");
$sentencia->execute([$idPendiente]);
$Pendiente = $sentencia->fetchObject();
echo json_encode($Pendiente);

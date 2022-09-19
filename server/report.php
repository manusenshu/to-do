<?php
header("Access-Control-Allow-Origin: https://to-do-angular.stackblitz.io");
header("Access-Control-Allow-Headers: *");
if (empty($_GET["tipoFecha"])) {
    exit("No hay información para generar el reporte");
}
$estado = $_GET["estado"];
$tipoFecha = $_GET["tipoFecha"];
$fechaInicio = $_GET["fechaInicio"];
$fechaFin = $_GET["fechaFin"];
$bd = include_once "bd.php";

$query = "SELECT * from pendientes WHERE";

switch ($tipoFecha) {
    case 1: 
        $query .= " fecha between '$fechaInicio' and '$fechaFin' ";
        break;
    case 2:
        $query .= " caducidad between '$fechaInicio' and '$fechaFin' ";
        break;
    case 3:
        $query .= " cierre between '$fechaInicio' and '$fechaFin' ";
        break;
        default:
        $query .= " (fecha between '$fechaInicio' and '$fechaFin' OR 
        caducidad between '$fechaInicio' and '$fechaFin' OR 
        cierre between '$fechaInicio' and '$fechaFin')";
        break;
}

if($estado == 587587587 || $estado == 588588588 || $estado == 589589589){
    $query .= " and estado = $estado";
}

$sentencia = $bd->prepare($query);
$sentencia->execute();
$Pendiente = $sentencia->fetchAll(PDO::FETCH_OBJ);


foreach ($Pendiente as $object){
    $object->estado = str_replace("587587587", "Nuevo", $object->estado);
    $object->estado = str_replace("588588588", "En Proceso", $object->estado);
    $object->estado = str_replace("589589589", "Terminado", $object->estado);
}

echo json_encode($Pendiente);

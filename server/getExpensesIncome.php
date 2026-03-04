<?php

if($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){
        http_response_code(200);
        exit();
    }

session_start();


include ("conexion.php");

if( !isset($_SESSION['ID_USUARIO'])){
    echo json_encode(["status"=>"error", "mensaje" => "no hay sesion activa"]);
    exit;
}

$id_usuario = $_SESSION['ID_USUARIO'];

$ingreso_query = "SELECT Cantidad_ingreso AS cantidad, Descripcion_ingreso AS descripcion, Fecha_ingreso AS fecha FROM ingreso WHERE Id_usuario='$id_usuario'";
$ingreso_result = mysqli_query($conexion,$ingreso_query);
$ingreso = mysqli_fetch_all($ingreso_result,MYSQLI_ASSOC);

$gasto_query = "SELECT Cantidad_gasto AS cantidad, Descripcion_gasto AS descripcion, Fecha_gasto AS fecha FROM gasto WHERE Id_usuario='$id_usuario'";
$gasto_result = mysqli_query($conexion,$gasto_query);
$gasto = mysqli_fetch_all($gasto_result,MYSQLI_ASSOC);

echo json_encode([
    "status" => "success",
    "ingreso" => $ingreso,
    "gasto" => $gasto
]);

?>
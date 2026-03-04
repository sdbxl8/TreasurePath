<?php
if($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){
        http_response_code(200);
        exit();
    }

session_start();


include ("conexion.php");

if( !isset($_SESSION['ID_USUARIO'])){
    echo json_encode(["status"=>"error", "mensaje" => "no hay sesion activa"]);
    exit();
}

$id_usuario = $_SESSION['ID_USUARIO'];

$sql = "SELECT COALESCE(SUM(Cantidad_ingreso),0) AS total_ingreso FROM ingreso WHERE Id_usuario = ?";

$sentencia = $conexion -> prepare($sql);
$sentencia -> bind_param("i",$id_usuario);
$sentencia -> execute();
$result = $sentencia->get_result() -> fetch_assoc();

$sentencia->close();
$conexion -> close();

echo json_encode([
    'status' =>'success',
    'total_ingreso' => $result['total_ingreso']
]);
?>
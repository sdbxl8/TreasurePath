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

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $input = json_decode(file_get_contents("php://input"),true);

    if(!isset($input['porcentajeAhorro'])){
        echo json_encode(["status" => "error", "mensaje"=>"falta porcentaje"]);
        exit();
    }

    $nuevo_porcentaje=floatval($input['porcentajeAhorro']);

    $query = "UPDATE usuario SET Porcentaje_ahorro = ? WHERE Id_usuario = ? ";
    $sentencia = $conexion -> prepare($query);
    $sentencia->bind_param("di",$nuevo_porcentaje,$id_usuario);

    if($sentencia -> execute()){
        echo json_encode(["status" => "success", "mensaje" => "porcentaje actualizado correctamente"]);
    }else{
        echo json_encode(["status" => "error", "mensaje" => "error actualizar porcentaje"]);
    };
}
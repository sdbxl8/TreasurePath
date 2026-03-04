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

if ($_SERVER['REQUEST_METHOD'] === 'GET'){
    $query = "SELECT Saldo_inicial FROM usuario WHERE Id_usuario = ? ";
    $sentencia = $conexion ->prepare($query);
    $sentencia->bind_param("i",$id_usuario);
    $sentencia -> execute();

    $resultado = $sentencia->get_result();
    $saldo = $resultado->fetch_assoc();

    if($saldo){
        echo json_encode([
            "status" =>"success",
            "saldo"=>floatval($saldo['Saldo_inicial']),
        ]);
    }else{
        echo json_encode(["status" => "error", "mensaje" => "no se encontro saldo"]);
    }
}

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $input = json_decode(file_get_contents("php://input"),true);

    if(!isset($input['saldo'])){
        echo json_encode(["status" => "error", "mensaje"=>"falta saldo"]);
        exit();
    }

    $saldo_nuevo=floatval($input['saldo']);

    $query = "UPDATE usuario SET Saldo_inicial = ? WHERE Id_usuario = ? ";
    $sentencia = $conexion -> prepare($query);
    $sentencia->bind_param("di",$saldo_nuevo,$id_usuario);

    if($sentencia -> execute()){
        echo json_encode(["status" => "success", "mensaje" => "saldo actualizado correctamente"]);
    }else{
        echo json_encode(["status" => "error", "mensaje" => "error actualizar saldo"]);
    };
}
?>
<?php

include("conexion.php");

$data = json_decode(file_get_contents('php://input'),true);

$nombre = $data['nombre'];
$apellido = $data['apellido'];
$nombre_usuario = $data['nombre_usuario'];
$contraseña = $data['contraseña'];

if (empty($nombre) || empty($apellido) || empty($nombre_usuario) || empty($contraseña)){
    echo json_encode(["status" => "error", "mensaje" => "Faltan datos"]);
    exit;
}

$hash = password_hash($contraseña,PASSWORD_DEFAULT);

$sentencia = $conexion -> prepare(
    "INSERT INTO Usuario (Nombre,Apellido,Nombre_usuario,Contraseña) 
      VALUES (?,?,?,?)"
);

$sentencia -> bind_param("ssss",$nombre,$apellido,$nombre_usuario,$hash);

if($sentencia -> execute()){
    echo json_encode(["status"=> "success","mensaje" => "usuario registrado correctamente"]);
}else{
    echo json_encode(["status" => "error", "mensaje" => "Error al registrar: ".$sentencia ->error]);
}

$sentencia -> close();
$conexion -> close();

?>
<?php

if($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){
    http_response_code(200);
    exit();
}

session_set_cookie_params([
    'samesite' => 'none',
    'secure' => false
]);

session_start();

include("conexion.php");

$data = json_decode(file_get_contents('php://input'),true);

$nombre_usuario = trim($data['nombre_usuario'] ?? '');
$contraseña = trim($data['contraseña'] ?? '');


if(empty($nombre_usuario) || empty($contraseña)){
    echo json_encode(["status" => "error", "mensaje" => "faltan datos"]);
    exit;
};

$sentencia = $conexion -> prepare("SELECT Id_usuario, Contraseña FROM usuario WHERE Nombre_usuario =?");
$sentencia ->bind_param("s",$nombre_usuario);
$sentencia -> execute();
$sentencia -> store_result();
$sentencia -> bind_result($id_usuario,$hashBD);
$sentencia -> fetch();

if($sentencia -> num_rows === 0){
    echo json_encode(["status" => "error", "mensaje" => "Usuario no encontrado"]);
    exit;
}


if (password_verify($contraseña, $hashBD)){

    $_SESSION['ID_USUARIO'] = $id_usuario;
    $_SESSION['NOMBRE_USUARIO'] = $nombre_usuario;

    echo json_encode(["status" => "success", "mensaje" => "inicio correcto"]);
}else{
    echo json_encode(["status" => "error", "mensaje" => "Contraseña incorrecta"]);
};

$sentencia -> close();
$conexion -> close();

?>
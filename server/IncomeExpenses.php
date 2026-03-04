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

$data=json_decode(file_get_contents("php://input"), true);
if(!$data || !isset($data['tipo'],$data['descripcion'],$data['cantidad'])){
    echo json_encode(["status" => "error", "mensaje" => "json invalido o tipo mal"]);
    exit();
}
$tipo = $data['tipo'];
$descripcion = $data['descripcion'];
$cantidad = floatval($data['cantidad']);
$fecha = date('Y-m-d');

if($tipo ==='ingreso'){
    $sql = "INSERT INTO Ingreso (Id_usuario, Cantidad_ingreso,Fecha_ingreso,Descripcion_ingreso)
            VALUES ('$id_usuario','$cantidad','$fecha','$descripcion')";
} else if ($tipo === 'gasto'){
    $sql = " INSERT INTO Gasto (Id_usuario,Cantidad_gasto, Fecha_gasto, Descripcion_gasto)
            VALUES ('$id_usuario','$cantidad','$fecha','$descripcion')";
}else {
    echo json_encode(["status" => "error", "mensaje" => "tipo invalido"]);
    exit();
}

if(mysqli_query($conexion,$sql)){

    if($tipo === 'ingreso'){
        $updateSaldo = 'UPDATE usuario SET Saldo_inicial = Saldo_inicial + ? WHERE Id_usuario = ?';
    } else {
        $updateSaldo = 'UPDATE usuario SET Saldo_inicial = Saldo_inicial - ? WHERE Id_usuario = ?';
    }

    $sentencia = $conexion ->prepare($updateSaldo);
    $sentencia ->bind_param("di",$cantidad,$id_usuario);
    $sentencia -> execute();
    $sentencia->close();

    echo json_encode([
        "status" => "success",
        "mensaje" => "peticion exitosa",
        "data" =>[
            "tipo" => $tipo,
            "descripcion" => $descripcion,
            "cantidad" => $cantidad,
            "fecha" => $fecha
        ]
        ]);
}else {
    echo json_encode([
        "status"=>"error",
        "mensaje" => mysqli_error($conexion)
    ]);
}
?>

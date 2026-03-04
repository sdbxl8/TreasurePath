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

if($_SERVER['REQUEST_METHOD'] === 'GET'){
    $query = "SELECT Id_meta,Descripcion_meta,Cantidad_meta,Fecha_meta,Meta_completada FROM metas WHERE Id_usuario=? ORDER BY Meta_completada ASC, Fecha_meta DESC";
    $sentencia = $conexion -> prepare($query);
    $sentencia->bind_param("i",$id_usuario);
    $sentencia ->execute();
    $resultado = $sentencia -> get_result();

    $metas = [];

    while($fila = $resultado -> fetch_assoc()){
        $metas[]=$fila;
    }
    echo json_encode([
        "status" => "success",
        "value" => $metas
    ]);

    $sentencia->close();
    $conexion -> close();
}

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $input = json_decode(file_get_contents("php://input"),true);

    if(!isset($input['descripcion']) || !isset($input['cantidad'])){
        echo json_encode(["status" => "error", "mensaje"=>"faltan datos"]);
        exit();
    }

    $descripcion = trim($input['descripcion']);
    $cantidad = floatval($input['cantidad']);
    
    $query = "INSERT INTO metas (Id_usuario,Descripcion_meta,Cantidad_meta,Fecha_meta)
                VALUES (?,?,?,CURDATE()) ";
    $sentencia = $conexion -> prepare($query);
    $sentencia->bind_param("isd",$id_usuario,$descripcion,$cantidad);

    if($sentencia -> execute()){
        echo json_encode(["status" => "success", "mensaje" => "meta añadida correctamente"]);
    }else{
        echo json_encode(["status" => "error", "mensaje" => "error al añadir meta"]);
    };

    $sentencia->close();
    $conexion -> close();
}

if($_SERVER['REQUEST_METHOD'] === 'PUT'){

     $input = json_decode(file_get_contents("php://input"),true);

    if(!isset($input['id'])){
        echo json_encode(["status" => "error", "mensaje"=>"Id meta invalido"]);
        exit();
    }

    $id_meta=intval($input['id']);
    
    $query = "UPDATE metas SET Meta_completada = 1 WHERE Id_meta = ? AND Id_usuario = ?";
    $sentencia = $conexion -> prepare($query);
    $sentencia->bind_param("ii",$id_meta,$id_usuario);

    if($sentencia -> execute()){
        echo json_encode(["status" => "success", "mensaje" => "meta completada"]);
    }else{
        echo json_encode(["status" => "error", "mensaje" => "no se pudo actualizar meta"]);
    };

    $sentencia->close();
    $conexion -> close();
}

if($_SERVER['REQUEST_METHOD'] === 'DELETE'){

     $input = json_decode(file_get_contents("php://input"),true);

    if(!isset($input['ID'])){
        echo json_encode(["status" => "error", "mensaje"=>"Id meta invalido"]);
        exit();
    }

    $id_meta=intval($input['id']);
    
    $query = "DELETE FROM metas WHERE Id_meta = ? AND Id_usuario = ?";
    $sentencia = $conexion -> prepare($query);
    $sentencia->bind_param("ii",$id_meta,$id_usuario);

    if($sentencia -> execute()){
        echo json_encode(["status" => "success", "mensaje" => "meta eliminada"]);
    }else{
        echo json_encode(["status" => "error", "mensaje" => "no se pudo eliminar meta"]);
    };

    $sentencia->close();
    $conexion -> close();
}

?>
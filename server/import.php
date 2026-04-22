<?php

header("Content-Type: application/json");

$conexion = new mysqli(
    getenv("MYSQLHOST"),
    getenv("MYSQLUSER"),
    getenv("MYSQLPASSWORD"),
    getenv("MYSQLDATABASE"),
    getenv("MYSQLPORT")
);

if ($conexion->connect_error) {
    die(json_encode(["status" => "error", "msg" => "conexion fallida"]));
}

$sql = file_get_contents("treasurepath.sql");

if ($conexion->multi_query($sql)) {
    echo json_encode(["status" => "ok", "msg" => "importado correctamente"]);
} else {
    echo json_encode(["status" => "error", "msg" => $conexion->error]);
}

$conexion->close();
?>
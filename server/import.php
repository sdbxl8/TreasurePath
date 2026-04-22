<?php
$conexion = new mysqli(
    getenv("MYSQLHOST"),
    getenv("MYSQLUSER"),
    getenv("MYSQLPASSWORD"),
    getenv("MYSQLDATABASE"),
    getenv("MYSQLPORT")
);

$sql = file_get_contents("../database/treasurepath.sql");

if ($conexion->multi_query($sql)) {
    echo "Importación correcta";
} else {
    echo "Error: " . $conexion->error;
}
?>
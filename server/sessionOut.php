<?php

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

session_start();
$_SESSION = [];
session_destroy();

echo json_encode([
    "status" => "success",
    "message" => "Sesión cerrada correctamente"
]);
?>
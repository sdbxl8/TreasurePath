<?php

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

session_set_cookie_params([
    'samesite' => 'none',
    'secure' => false
]);

session_start();

// Clear session data and destroy the session
$_SESSION = [];
session_unset();
session_destroy();

// Remove the session cookie on the client
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params['path'], $params['domain'],
        $params['secure'], $params['httponly']
    );
}

echo json_encode([
    "status" => "success",
    "message" => "Sesión cerrada correctamente"
]);
?>
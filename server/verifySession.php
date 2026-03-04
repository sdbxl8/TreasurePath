<?php

     if($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){
        http_response_code(200);
        exit();
    }

    session_set_cookie_params([
        'samesite' => 'None',
        'secure' => false
    ]);

    session_start();

    if(isset($_SESSION['ID_USUARIO'])){
        echo json_encode([
            "logged" => true,
            "usuario"=>[
            "id" => $_SESSION['ID_USUARIO'],
            "nombre_usuario" => $_SESSION['NOMBRE_USUARIO']
            ]
            ]);
    } else {
        echo json_encode(["logged" => false]);
    }
?>
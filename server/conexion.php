<?php

$servidor="sql100.infinityfree.com";
$usuario="if0_41706214";
$contraseña="K0PW4xfzkqY";
$base_datos="if0_41706214_XXX";
$port=3306;


$conexion = mysqli_connect($servidor,$usuario,$contraseña,$base_datos,$port);

    if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}


?>
<?php
session_start();
if(isset($_SESSION['Usuario'])){
    header('Location: /obededom/Administrador');
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="/obededom/media/svg/Logo.svg" type="image/x-icon">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
    <script src='https://kit.fontawesome.com/1e193e3a23.js' crossorigin='anonymous'></script>
    <script src="/obededom/JS/web.js"></script>
    <script src="/obededom/Form/JS/Login.js"></script>
    <script src="/obededom/Form/JS/Usuario.js"></script>
    <script src="/obededom/JS/modal.js"></script>

    <link rel="stylesheet" href="/obededom/CSS/styles.css">
    <title>Obed-Edom | Login</title>
</head>
<body>

    <div id="header"></div>

    <div id="modal"></div>

    <section class="login">
        <img src="/obededom/media/img/Background.png" alt="" class="background">

        <div class="login-wrapper">
            <img src="/obededom/media/svg/Logo.svg" alt="" class="logo">
            <h1><i class="fas fa-sign-in-alt"></i> Iniciar Sesión</h1>

            <div class="form">
                <div class="input">
                    <i class="fas fa-user" id="icon"></i>
                    <input type="text" name="usuario" id="usuario" placeholder="Usuario">
                </div>

                <div class="input">
                    <i class="fas fa-key" id="icon"></i>
                    <input type="password" name="password" id="password" placeholder="Contraseña">
                </div>

                <button onclick="login()">Login</button>
            </div>
        </div>
    </section>

    <div id="footer"></div>
    
</body>
</html>
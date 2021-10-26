<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    require '../Plugins/PHPmailer/src/Exception.php';
    require '../Plugins/PHPmailer/src/PHPMailer.php';
    require '../Plugins/PHPmailer/src/SMTP.php';

class mails
{
    public static function mailLink(){
        $mail = new PHPMailer(true);
        $mail->CharSet = 'UTF-8';
        $mail->isSMTP(); 
        $mail->SMTPOptions = array(
            'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
            )
            );
            $mail->SMTPDebug = 2; //2->cliente y servidor
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Host = "smtp.gmail.com"; // usa como host smtp
            $mail->Port = 587;
            $mail->SMTPSecure = 'tls'; 
            $mail->SMTPAuth = true;
            $mail->Username = 'sasa.it.software@gmail.com';
            $mail->Password = 'sasasoftware2';
            $mail->setFrom('sasa.it.software@gmail.com');
            $mail->addAddress($_SESSION["mail"]);
            $mail->Subject = 'Recuperar contraseña';
            $mail->AddEmbeddedImage('../../media/img/logos/Logonombre.png','prueba','../../media/img/logos/Logonombre.png');
            $mail->msgHTML("<html>
            <head>
                <meta charset='UTF-8'>
            </head>
            <body>
                <div style='border-radius: 15px;
                width: 560px;
                height: 435px;
                background-color: #433f3b;'>
                <img src='cid:prueba'
                style='margin-top: 30px; 
                width: 330px; 
                margin-left: 115px;'> 
                <p style='color:white;
                text-align: center;
                margin-top: 25px; 
                font-size: 20px; '>El usuario ".$_SESSION['usuario']." ha solicitado un cambio de contraseña</p>
                <p style='color:white; 
                font-size: 20px; 
                margin-top: 25px; 
                text-align: center;'>Tu código es: </p>
                <p 
                style='
                color:white; 
                margin-top: 10px; 
                font-size: 30px; 
                text-align: center;'>".$_SESSION['codigo']."</p>
                <hr style='width: 75%;'>
                <a href='http://179.27.156.47/chessiep/usuario/recuperarPWD.html' 
                style='color:white;
                text-decoration:none;
                margin-left: 175px;
                padding: 15px;
                display: inherit;
                text-align: center;
                width: 200px;
                border-radius: 30px;
                background-color: #85603f; 
                margin-top: 18px;
                font-size: 15px;
                 '>Cambiar mi contraseña</a>
                </div>
            </body>
            </html>");
            $mail->isHTML(true); 
            //$mail->AltBody = 'HTML messaging not supported';
            if(!$mail->send()){
                echo "Mailer Error: " . $mail->ErrorInfo;
            }else{

            }
    }
}
?>
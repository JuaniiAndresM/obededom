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
            $mail->Username = 'obededomorganizacion@gmail.com';
            $mail->Password = 'malbec2003';
            $mail->setFrom('obededomorganizacion@gmail.com');
            $mail->addAddress('obededomorganizacion@gmail.com');
            $mail->Subject = 'Nueva Consulta';
            //$mail->AddEmbeddedImage('../../media/img/logos/Logonombre.png','prueba','../../media/img/logos/Logonombre.png');
            $mail->msgHTML('
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Template | Mail</title>
            </head>
            <body>
                <div class="mail" style="max-width: 600px; background: #7200ff;">
                    <table style="width: 100%; background: linear-gradient(120deg, #64006d, #ea00ff); border: none;" cellspacing="0" cellpadding="0">
                        <tr>
                            <td style="padding: 20px; text-align: center;">
                                <img src="https://i.imgur.com/tFHUeCa.png" alt="" style="max-width: 150px; margin-bottom: 20px;" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    style="width: 100%; height: 100px; margin: 0; padding: 0; vertical-align: middle;"
                                    class="vector-top"
                                    src="https://i.imgur.com/UHCg5RQ.png"
                                    alt=""
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="mail-content" style="width: 100%; padding: 40px 0; margin-top: -120px; background: white;">
                                    <h1 style="width: 80%; margin: 20px auto; color: #91009d; font-family: Arial;">Nueva Solicitud de Contacto</h1>
                                    <p style="width: 80%; margin: 20px auto; font-family: Arial; color: #555;">
                                        <b>Consulta</b>: Venta
                                    </p>
                                    <p style="width: 80%; margin: 20px auto; font-family: Arial; color: #555;">
                                        <b>Nombre</b>: Juan
                                    </p>
                                    <p style="width: 80%; margin: 20px auto; font-family: Arial; color: #555;">
                                        <b>Correo Electronico</b>: ejemplo@gmail.com
                                    </p>
                                    <p style="width: 80%; margin: 20px auto; font-family: Arial; color: #555;">
                                        <b>Celular / Telefono</b>: 099487923
                                    </p>
                                    <p style="width: 80%; margin: 20px auto; font-family: Arial; color: #555;">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe similique adipisci numquam veritatis sed nihil harum quidem nisi culpa in!
                                    </p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <div class="mail-footer" style="width: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column; text-align: center; background: #91009d;">
                                <p style="color: #ddd; font-size: 1em; margin: 5px auto; font-family: Arial;">Copyright © 2021 <b style="font-weight: normal; color: white;">Obed-Edom</b>. Todos los derechos reservados.</p>
                            </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </body>
            </html>');
            $mail->isHTML(true); 
            //$mail->AltBody = 'HTML messaging not supported';
            if(!$mail->send()){
                echo "Mailer Error: " . $mail->ErrorInfo;
            }else{

            }
    }

    public static function mailTotum(){
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
            $mail->Username = 'obededomorganizacion@gmail.com';
            $mail->Password = 'malbec2003';
            $mail->setFrom('obededomorganizacion@gmail.com');
            $mail->addAddress('totumorganizacion@gmail.com');
            $mail->Subject = 'Nueva Consulta de Obed-Edom';
            //$mail->AddEmbeddedImage('../../media/img/logos/Logonombre.png','prueba','../../media/img/logos/Logonombre.png');
            $mail->msgHTML('
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Template | Mail</title>
            </head>
            <body>
                <div class="mail" style="max-width: 600px; background: #7200ff;">
                    <table style="width: 100%; background: linear-gradient(120deg, #64006d, #ea00ff); border: none;" cellspacing="0" cellpadding="0">
                        <tr>
                            <td style="padding: 20px; text-align: center;">
                                <img src="https://i.imgur.com/tFHUeCa.png" alt="" style="max-width: 150px; margin-bottom: 20px;" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    style="width: 100%; height: 100px; margin: 0; padding: 0; vertical-align: middle;"
                                    class="vector-top"
                                    src="https://i.imgur.com/UHCg5RQ.png"
                                    alt=""
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="mail-content" style="width: 100%; padding: 40px 0; margin-top: -120px; background: white;">
                                    <h1 style="width: 80%; margin: 20px auto; color: #91009d; font-family: Arial;">Nueva Solicitud de Contacto</h1>
                                    <p style="width: 80%; margin: 20px auto; font-family: Arial; color: #555;">
                                        <b>Consulta</b>: Apoyo Técnico Obed-Edom
                                    </p>
                                    <p style="width: 80%; margin: 20px auto; font-family: Arial; color: #555;">
                                        <b>Nombre</b>: '. $_POST["nombre"] .'
                                    </p>
                                    <p style="width: 80%; margin: 20px auto; font-family: Arial; color: #555;">
                                        '. $_POST["consulta"] .'
                                    </p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <div class="mail-footer" style="width: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column; text-align: center; background: #91009d;">
                                <p style="color: #ddd; font-size: 1em; margin: 5px auto; font-family: Arial;">Copyright © 2021 <b style="font-weight: normal; color: white;">Obed-Edom</b>. Todos los derechos reservados.</p>
                            </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </body>
            </html>');
            $mail->isHTML(true); 
            //$mail->AltBody = 'HTML messaging not supported';
            if(!$mail->send()){
                echo "Mailer Error: " . $mail->ErrorInfo;
            }else{

            }
    }
}
?>
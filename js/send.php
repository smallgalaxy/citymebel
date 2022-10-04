<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$name = $_POST['name'];
$tel = $_POST['contact'];
$city = $_POST['city'];
$info = $_POST['info'];
$title = $_POST['subject'];


$arr = array($name, $tel, $city, $info);
$array = array('Имя:', 'Номер:', 'Город:', 'Описание:');

$body_word = "";

for ($ct = 0; $ct < count($arr); $ct++) {
  if ($arr[$ct] != "") {
     $body_word =  $body_word. "
  <th style='background-color: #3d85db; padding: 10px 20px; border-radius:4px; border: 1px solid white;'>$array[$ct]</th>
  <td style='border: 1px solid white; padding: 10px 20px;   background: #009999; border-radius:4px; '>$arr[$ct]</td>
</tr>";
  }
}

$body = "<table style='font-size:14px; border: 1px solid blue; border-collapse: separate;
empty-cells: hide; color:white; border-radius: 4px;'>". $body_word. "</table>";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'mistik.tepaykin@mail.ru'; // Логин на почте
    $mail->Password   = 'nadoelo222'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('mistik.tepaykin@mail.ru', 'citymebel'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('Littelfox98@mail.ru');
    $mail->addAddress('mistik.tepaykin@mail.ru');

for ($ct = 0; $ct < count($_FILES['myfile']['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['myfile']['name'][$ct]));
        $filename = $_FILES['myfile']['name'][$ct];
        if (move_uploaded_file($_FILES['myfile']['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
        } else {
            $msg .= 'Failed to move file to ' . $uploadfile;
        }
    }

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);	
?>
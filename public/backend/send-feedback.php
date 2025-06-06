<?php
// Включаем CORS, если форма размещена на другом домене
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Получаем JSON-данные из тела POST-запроса
$data = json_decode(file_get_contents("php://input"), true);

// Проверяем данные
if (!$data || !isset($data['name'], $data['email'], $data['tel'])) {
    echo json_encode(['success' => false, 'message' => 'Invalid input']);
    exit;
}

$name = htmlspecialchars($data['name']);
$email = htmlspecialchars($data['email']);
$tel = htmlspecialchars($data['tel']);

// Подключаем PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    // Настройка SMTP
    $mail->isSMTP();
    $mail->Host = 'srv-plesk29.ps.kz';
    $mail->SMTPAuth = true;
    $mail->Username = 'info@statusrk.kz'; // замените
    $mail->Password = 'uav!*2R4ww'; // замените
    $mail->SMTPSecure = 'ssl'; // SSL
    $mail->Port = 465;

    $mail->setFrom('info@statusrk.kz', 'Сайт statusrk.kz');
    $mail->addAddress('info@statusrk.kz');

    $mail->isHTML(true);
    $mail->Subject = 'Новое сообщение с формы обратной связи';
    $mail->Body = "
        <h2>Новое сообщение</h2>
        <p><strong>Имя:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Телефон:</strong> {$tel}</p>
    ";

    $mail->send();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => $mail->ErrorInfo]);
}

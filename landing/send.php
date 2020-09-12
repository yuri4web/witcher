<?php

$name = $_POST['name'];
$tel = $_POST['tel'];

$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);

$name = urldecode($name);
$tel = urldecode($tel);

$name = trim($name);
$tel = trim($tel);

if (mail("yuriy.shelemba@gmail.com", "Заказ с сайта щщщ", "Имя:".$name.". Телефон: ".$tel ,"From: example2@mail.ru \r\n"))
//  {
//     echo "сообщение успешно отправлено";
// } else {
//     echo "при отправке сообщения возникли ошибки";
// }
?>
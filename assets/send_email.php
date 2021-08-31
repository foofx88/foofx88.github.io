<?php
if($_POST["submit"]) {
$recipient = "fangxuan.foo@gmail.com"; //my email
$subject = 'Email message from foofx88.github.io';
$name = $_POST ["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$mailBody="Name: $name\nEmail: $email\n\n$message";
mail($recipient, $subject, $mailBody, "From: $name <$email>");
$thankYou="<p>Thank you for your email, I will be in touch!.</p>";
}
?>

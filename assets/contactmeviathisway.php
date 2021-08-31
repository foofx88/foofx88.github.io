<?php
if(isset($_POST["submit"])) {
echo $recipient = "fangxuan.foo@gmail.com"; //my email
echo $subject = 'Email message from foofx88.github.io';
echo $name = $_POST ["name"];
echo $email = $_POST["email"];
echo $message = $_POST["message"];

$mailBody="Name: $name\nEmail: $email\n\n$message";
mail($recipient, $subject, $mailBody, "From: $name <$email>");
$thankYou="<p>Thank you for your email, I will be in touch!.</p>";
}
?>

<?php
  $image = @imagecreatetruecolor(160, 45) or die("Cannot Initialize new GD image stream");
  $background = imagecolorallocate($image, 0x66, 0xCC, 0xFF);
  imagefill($image, 0, 0, $background);
  $lineColor = imagecolorallocate($image, 0x33, 0x99, 0xCC);
  $textColor1 = imagecolorallocate($image, 0x00, 0x00, 0x00);
  $textColor2 = imagecolorallocate($image, 0xFF, 0xFF, 0xFF);

  for($i = 0;$i < 8;$i++) {
    imagesetthickness($image, rand(1,3));
    imageline($image, rand(0,160), 0, rand(0,160), 45, $lineColor);
  }

  session_start();

  $fonts = array();
  $fonts[] = "ttf-dejavu/DejaVuSerif-Bold.ttf";
  $fonts[] = "ttf-dejavu/DejaVuSans-Bold.ttf";
  $fonts[] = "ttf-dejavu/DejaVuSansMono-Bold.ttf";

  $digit = '';
  for($x = 10; $x <= 130; $x += 30) {
    $textColor = (rand() % 2) ? $textColor1 : $textColor2;
    $digit .= ($num = rand(0,9));
    imagettftext($image, 20, rnad(-30,30), $x, rand(20,42), $textColor, $fonts[array_rand($fonts)], $num);
  }

  $_SESSION['digit'] = $digit;

  header('Content-type: image/png');
  imagepng($image);
  imagedestroy($image);
 ?>

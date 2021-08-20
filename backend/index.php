<?php
header("Access-Control-Allow-Origin: *");


var_dump($_POST);
var_dump($_FILES);

foreach($_FILES as $file)
    file_put_contents($file['name'], file_get_contents($file['tmp_name']));

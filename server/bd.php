<?php
  $host_name = 'db5009771834.hosting-data.io';
  $database = 'dbs8283645';
  $user_name = 'dbu928621';
  $password = '9KGLSA4eTcbtBNB';

try {
    return new PDO('mysql:host=db5009771834.hosting-data.io;dbname=' . $database, $user_name, $password);
} catch (Exception $e) {
    echo "Ocurrió algo con la base de datos: " . $e->getMessage();
}

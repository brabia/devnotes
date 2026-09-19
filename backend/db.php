<?php
$config = require __DIR__ . '/config.php';
$dsn = "mysql:host={$config['host']};dbname={$config['database']};charset=utf8mb4";
$pdo = new PDO($dsn, $config['user'], $config['password'], [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
]);

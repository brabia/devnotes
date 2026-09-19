<?php
header('Content-Type: application/json; charset=utf-8');
$pdo = new PDO(
    'mysql:host='.(getenv('DB_HOST') ?: '127.0.0.1').';dbname='.(getenv('DB_DATABASE') ?: 'car_rental').';charset=utf8mb4',
    getenv('DB_USER') ?: 'car_rental',
    getenv('DB_PASSWORD') ?: 'change_me',
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]
);
echo json_encode($pdo->query('SELECT id,brand,model,year,price_per_day,image_url,available FROM cars ORDER BY id DESC')->fetchAll());

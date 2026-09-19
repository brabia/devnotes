<?php
header('Content-Type: application/json; charset=utf-8');
require __DIR__ . '/db.php';

$stmt = $pdo->query(
    'SELECT id, brand, model, year, price_per_day, image_url, available
     FROM cars ORDER BY id DESC'
);

echo json_encode($stmt->fetchAll());

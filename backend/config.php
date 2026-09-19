<?php
return [
    'host' => getenv('DB_HOST') ?: '127.0.0.1',
    'database' => getenv('DB_DATABASE') ?: 'car_rental',
    'user' => getenv('DB_USER') ?: 'car_rental',
    'password' => getenv('DB_PASSWORD') ?: 'change_me',
];

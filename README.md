# Car Rental - PHP / MySQL / Nginx

## Structure
- front/ : browser UI
- backend/ : PHP API
- db/ : MySQL schema

## API
GET /api/cars.php

The frontend calls the API with fetch(). PHP reads the cars from MySQL and returns JSON.

## Database
Import db/schema.sql into MySQL and set DB_HOST, DB_DATABASE, DB_USER and DB_PASSWORD.

Adjust the PHP-FPM socket in nginx.conf to match your server, for example:
unix:/run/php/php8.3-fpm.sock

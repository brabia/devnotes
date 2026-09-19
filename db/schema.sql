CREATE DATABASE IF NOT EXISTS car_rental
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE car_rental;

CREATE TABLE cars (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  brand VARCHAR(100) NOT NULL,
  model VARCHAR(100) NOT NULL,
  year SMALLINT UNSIGNED NOT NULL,
  price_per_day DECIMAL(10,2) NOT NULL,
  image_url VARCHAR(500) NOT NULL,
  available BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO cars (brand, model, year, price_per_day, image_url, available) VALUES
('Toyota','Corolla',2024,45.00,'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=900&q=80',1),
('Volkswagen','Golf',2023,55.00,'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=900&q=80',1),
('BMW','3 Series',2024,85.00,'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80',1),
('Tesla','Model 3',2024,95.00,'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=900&q=80',1);

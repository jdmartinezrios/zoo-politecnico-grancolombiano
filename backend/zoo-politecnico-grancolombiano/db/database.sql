CREATE TABLE `users` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255),
  `password` varchar(8),
  `role` varchar(255),
  `fullname` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `animals` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `specie` varchar(255),
  `user_id` integer,
  `habitat` varchar(255),
  `name` varchar(255),
  `food_type` varchar(255),
  `weight` double,
  `vaccines` varchar(255),
  `allergies` varchar(255),
  `medicines` varchar(255),
  `animal_grooming_needs` varchar(255),
  `habitat_grooming_needs` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `reports` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `animal_id` integer,
  `user_id` integer,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `attentions` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `animal_id` integer,
  `user_id` integer,
  `description` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `photos` (`content` blob, `animal_id` integer);

ALTER TABLE
  `animals`
ADD
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE
  `reports`
ADD
  FOREIGN KEY (`animal_id`) REFERENCES `animals` (`id`);

ALTER TABLE
  `reports`
ADD
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE
  `attentions`
ADD
  FOREIGN KEY (`animal_id`) REFERENCES `animals` (`id`);

ALTER TABLE
  `attentions`
ADD
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE
  `photos`
ADD
  FOREIGN KEY (`animal_id`) REFERENCES `animals` (`id`);
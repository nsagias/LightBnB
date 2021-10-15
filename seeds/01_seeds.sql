-- \i seeds/01_seeds.sql
INSERT INTO
  users (name, email, password)
VALUES
  ('red', 'red@red.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
  ('blue','blue@blue.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
  ('green','green@green.com','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO 
  properties (owner_id, title, description, thumbnail_photo_url,  cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
VALUES      
  (1, 'Red title Home', 'description', 'bnb_thumbs.com/red', 'bnb_cover.com/red', 100, 1, 1, 1, 'Canada', '1 Red Street', 'Red City', 'Ontario', 'M0M0M0', TRUE),
  (2, 'Blue title Home', 'description', 'bnb_thumbs.com/blue', 'bnb_cover.com/blue', 200, 2, 2, 2, 'Canada', '2 Blue Street', 'Blue City', 'Ontario', 'M0M0M0', TRUE),
  (3, 'Green title Home', 'description', 'bnb_thumbs.com/green', 'bnb_cover.com/green', 300, 3, 3, 3, 'Canada', '3 Green Street', 'Green City', 'Ontario', 'M0M0M0', TRUE);


INSERT INTO 
  reservations (start_date, end_date, property_id, guest_id)
VALUES
  ('2021-10-14', '2021-10-15', 1, 1),
  ('2021-10-14', '2021-10-15', 2, 2),
  ('2021-10-14', '2021-10-15', 3, 3);

INSERT INTO
  property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES
  (1, 1, 1, 5, 'message'),
  (2, 2, 3, 5, 'message'),
  (3, 3, 3, 5, 'message');
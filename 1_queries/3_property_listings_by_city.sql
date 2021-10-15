-- \i 1_queries/3_property_listings_by_city.sql



-- SELECT *, AVG(rating) AS average_rating, property_id
-- FROM properties, property_reviews
-- WHERE city = 'Vancouver'
-- GROUP BY properties.id, property_reviews.id
-- ORDER BY cost_per_night
-- LIMIT 10
-- ;

SELECT properties.*, avg(property_reviews.rating) as average_rating
FROM properties
JOIN property_reviews ON properties.id = property_id
WHERE city LIKE '%ancouv%'
GROUP BY properties.id
HAVING avg(property_reviews.rating) >= 4
ORDER BY cost_per_night
LIMIT 10;
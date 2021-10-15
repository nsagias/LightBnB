-- \i 1_queries/2_average_length_of_reservation.sql


SELECT
   AVG(end_date-start_date) as average_duration
FROM
  reservations
-- \i 1_queries/1_user_login.sql

SELECT
  id, name, email, password
FROM 
  users
WHERE
  email = 'tristanjacobs@gmail.com'
;
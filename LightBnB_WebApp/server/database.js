const properties = require('./json/properties.json');
const users = require('./json/users.json');

const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
// const getUserWithEmail = function(email) {
//   let user;
//   for (const userId in users) {
//     user = users[userId];
//     if (user.email.toLowerCase() === email.toLowerCase()) {
//       break;
//     } else {
//       user = null;
//     }
//   }
//   return Promise.resolve(user);
// }
// const getUserWithEmail = (email) => {
//   return pool
//     .query(`SELECT * FROM properties LIMIT $1`, [limit])
//     .then((result) => {
//       console.log(result.rows);
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// };
const getUserWithEmail = function(email) {
  const queryParams = [email];
  const queryString = `
    SELECT *
    FROM users
    WHERE email = $1
    `;

  return pool
    .query(queryString, queryParams)
    .then((res) => {
    return res.rows[0];
    })
    .catch(err => err);
}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
// const getUserWithId = function(id) {
//   return Promise.resolve(users[id]);
// }

const getUserWithId= function(id) {
  const queryParams = [id];
  const queryString = `
    SELECT *
    FROM users
    WHERE id = $1
    `;

  return pool
    .query(queryString, queryParams)
    .then((res) => {
      return res.rows[0];
    })
    .catch(err => err);
}
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
// const addUser =  function(user) {
//   const userId = Object.keys(users).length + 1;
//   user.id = userId;
//   users[userId] = user;
//   return Promise.resolve(user);
// }

const addUser = function (user) {
  const queryParams = [user.name, user.password, user.email];
  const queryString = `
  INSERT INTO users (name, password, email)
  VALUES ($1, $2, $3)
  RETURNING *;
  `;

  return pool
    .query(queryString, queryParams)
    .then((res) => {
      return res.rows[0];
    })
    .catch(err => err);
};

exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {
  return getAllProperties(null, 2);
}
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function(options, limit = 10) {
  const limitedProperties = {};
  for (let i = 1; i <= limit; i++) {
    limitedProperties[i] = properties[i];
  }
  return Promise.resolve(limitedProperties);

}


// const getAllProperties = (options, limit = 10) => {
//   return pool
//     .query(`SELECT * FROM properties LIMIT $1`, [limit])
//     .then((result) => { result.rows})
//     .catch((err) => {
//       console.log(err.message);
//     });
// };

exports.getAllProperties = getAllProperties;



/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
}


// const aaddProperty = function (property) {
  const queryParams = [
  property.owner_id,
  property.title, 
  property.description, 
  property.thumbnail_photo_url,
  property.cover_photo_url, 
  property.cost_per_night,
  property.parking_spaces,
  property.number_of_bathrooms, 
  property.number_of_bedrooms ,
  property.country,
  property.street, 
  property.city, 
  property.province, 
  property.post_code 
];
  const queryString = `
  INSERT INTO properties (
    owner_id,
    title, 
    description, 
    thumbnail_photo_url,
    cover_photo_url, 
    cost_per_night,
    parking_spaces,
    number_of_bathrooms, 
    number_of_bedrooms ,
    country,
    street, 
    city, 
    province, 
    post_code 
  )
    VALUES ($1, $2, $3)
    RETURNING *;
    `;

//   return pool
//     .query(queryString, queryParams)
//     .then((res) => {
//       return res.rows[0];
//     })
//     .catch(err => err);
// };
exports.addProperty = addProperty;

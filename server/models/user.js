const db = require('../../db');

module.exports = {
  getUserDetails(id, callback) {
    const queryString = 'SELECT u.name_user, u.last_name, u.address_user, u.email, u.image_url, u.banned, u.created_at, ut.name_user_type FROM user AS u LEFT JOIN user_type AS ut ON u.fk_user_type_id = ut.id WHERE u.id = ?';
    db.connection.query(queryString, [id], (err, result) => {
      if (err) {
        console.log(err);
      }
      callback(result);
    });
  },
  getUserFriends(id, callback) {
    const queryString = 'SELECT u.id, u.name_user, u.last_name FROM user AS u LEFT JOIN friend AS f ON u.id = f.fk_source_user_id WHERE f.fk_target_user_id = ? UNION SELECT u.id, u.name_user, u.lastname FROM user AS u LEFT JOIN friend AS f ON u.id = f.fk_target_user_id WHERE f.fk_source_user_id = ?';
    db.connection.query(queryString, [id, id], (err, result) => {
      if (err) {
        console.log(err);
      }
      callback(result);
    });
  },
  getAllUsers(callback) {
    const queryString = 'SELECT name_user, last_name, address_user, email, banned, created_at FROM user';
    db.connection.query(queryString, (err, result) => {
      if (err) {
        console.log(err);
      }
      callback(result);
    });
  },
  getUserType(id, callback) {
    const queryString = 'SELECT u.id, ut.id, ut.name_user_type FROM user AS u LEFT JOIN user_type AS ut WHERE u.id = ?';
    db.connection.query(queryString, [id], (err, result) => {
      if (err) {
        console.log(err);
      }
      callback(result);
    });
  },
  getBannedUsers(callback) {
    const queryString = 'SELECT u.name_user, u.last_name, u.address_user, u.email, u.image_url, u.banned, u.created_at, ut.name_user_type FROM user AS u LEFT JOIN user_type AS ut ON u.fk_user_type_id = ut.id WHERE u.banned = true';
    db.connection.query(queryString, (err, result) => {
      if (err) {
        console.log(err);
      }
      callback(result);
    });
  },
  putUpdateUserProfilePicture(pic, callback) {
    // const queryString = ''
  },
};

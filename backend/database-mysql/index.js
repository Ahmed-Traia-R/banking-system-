const mysql = require('mysql2');
const mysqlConfig = require('./config.js');

const con = mysql.createConnection(mysqlConfig);

const getAllUsers = `SELECT * FROM clients `
const updateBalanceResul = `UPDATE clients SET balance= balance+ ? WHERE name=?`
const decreaseBalance = `UPDATE clients SET balance= balance - ? WHERE id=?`
const cretaeAccount = `INSERT INTO clients (balance,name) VALUES(?,?)`
const deleteAccount = `DELETE FROM clients WHERE name=?`
const updateName = `UPDATE clients SET name = ? WHERE id=?`

module.exports = { 
  getAllUsers: getAllUsers,
  connection: con,
  updateBalanceResul: updateBalanceResul,
  decreaseBalance: decreaseBalance,
  cretaeAccount: cretaeAccount,
  deleteAccount: deleteAccount,
  updateName: updateName
}

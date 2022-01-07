

const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "mayur",
};
const selectAllUser = async () => {
    const connection = mysql.createConnection(dbinfo);

    await connection.connectAsync();

    let sql = `SELECT * FROM messages `;
    const list = await connection.queryAsync(sql);

    await connection.endAsync();
    return list;
};

const addMsg = async (msg) => {
    const connection = mysql.createConnection(dbinfo);

    await connection.connectAsync();

    let sql = `INSERT INTO messages values (?)`;
    connection.queryAsync(sql, [user.msg]);
    console.log("Message Added!");

    await connection.endAsync();
};

module.exports = { selectAllUser, addMsg };
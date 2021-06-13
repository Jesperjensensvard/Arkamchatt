var mysql = require('mysql')

class database 
{
  constructor() 
  {
    this.dbHost = 'localhost';
    this.dbUser= 'root';
    this.dbPassword = '';
    this.dbName = 'arkham';
  }
  CreateDbConnnection ()
  {
    const connection  = mysql.createConnection({
      host: this.dbHost,
      user: this.dbUser,
      password: this.dbPassword,
      database: this.dbName
    });
    return connection;
  }
  UserQuery(query,password,username)
  {
  /*   this.connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
      if (err) throw err
    
      console.log('The solution is: ', rows[0].solution)
    }) */
  }
  DisconnectDbConnection()
  {
  // this.connection.end();
  }
}

/* 
connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
}) */


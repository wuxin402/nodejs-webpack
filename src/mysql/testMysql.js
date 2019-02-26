var mysql = require("mysql");
var connection = mysql.createConnection({
    host     : '172.20.182.49',
    user     : 'data_platform_user',
    password : 'kingdee',
    database : 'data_platform'
  });

connection.connect();
const sql = "select * from jdy_workorder_details where workorder_number = ?"
const sqlParam = "20181227000002"
connection.query(sql,sqlParam,function(err,result) {
    if (err) {
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }
    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');  
})
connection.end();
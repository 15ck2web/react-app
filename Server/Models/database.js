var mysql=require('mysql');
const config = mysql.createPool({
    database:{
        host: 'localhost',
        user: 'roof',
        password: '',
        port: 3306,
        db: 'db_banhang'
    }

})
module.exports = config;
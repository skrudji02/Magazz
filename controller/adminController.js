const db = require('../db')

class adminController{

    async getNameTables(req, res){
        try{
            const table_db = await db.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name");
            return res.render('admin', {table: table_db.rows, layout: "admin_main"});
        }
        catch(err){
            return res.render('Ошибка получения таблиц !!!');
        }
    }

    async getObjectTables(req, res){
        try{
            const table = req.params.table;
            const data_table = await db.query(`SELECT * FROM ${table}`); 
            return res.render('table', {data_table: data_table.rows, table: table, layout: "admin_main"});
        }
        catch(err){
            return res.render('Ошибка получения object !!!');
        }
    }

    async getDataObject(req, res){
        try{
            const table = req.params.table;
            const id = req.params.id;
            const object = await db.query(`SELECT * FROM ${table} WHERE id = $1`, [id]);
            return res.render('object', {data: object.rows[0], layout: "admin_main"});
        }catch(err){
            return res.render('Ошибка получения object !!!');
        }
    }

    async addObjectTables(req, res){
        try{
            const table = req.params.table;
            const object_column = await db.query(`select COLUMN_NAME from INFORMATION_SCHEMA.COLUMNS where TABLE_NAME = '${table}'`);
            delete object_column.rows[0];
            let column_table = [];
            for(let elem of object_column.rows){
                if(elem != undefined)
                column_table.push(elem.column_name);
            }
            return res.render('add', {column: column_table, layout: "admin_main"});
        }catch(err){
            return res.render('Ошибка добавления пользователя !!!');
        }
    }

    async postAddObjectTables(req, res){
        try{
            const table = req.params.table;
            let obj = req.body;
            const column_table = Object.keys(obj);
            let data = [];
            for(let i = 0; i < column_table.length; i++){
                data.push('\'' + obj[`${column_table[i]}`] + '\'');
            }
            const addObject = await db.query(`INSERT INTO ${table}  (${column_table.toString()}) VALUES (${data.toString()})`);
            return res.render('add', {column: column_table, layout: "admin_main"});
        }catch(err){
            return res.render('Ошибка добавления пользователя !!!');
        }
    }

    async deleteObjectTables(req, res){
        try{
            const table = req.params.table;
            const id = req.params.id;
            const data_table = await db.query(`SELECT * FROM ${table}`); 
            const delete_object = await db.query(`DELETE FROM ${table} WHERE id = $1`, [id]);
            return res.render('table', {data_table: data_table.rows, table: table, layout: "admin_main"});
        }catch(err){
            return res.render('Ошибка удаления пользователя !!!');
        }
    }

}

module.exports = new adminController;
const { ConcatenationScope } = require('webpack');
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
            const data_table = await db.query('SELECT * FROM acoustic_guitars'); 
            const object_column = await db.query('select COLUMN_NAME from INFORMATION_SCHEMA.COLUMNS where TABLE_NAME = $1', ['acoustic_guitars']);
            let column_table = [];
            for(let elem of object_column.rows){
                column_table.push(elem.column_name);
            }
            return res.render('table', {data_table: data_table.rows, table: column_table, layout: "admin_main"});
        }
        catch(err){
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
    
            console.log(req.body.name_guitar);
            const addObject = await db.query('INSERT INTO acoustic_guitars (name_guitar, about_guitar, price, photo) VALUES ($1, $2, $3, $4)', [req.body.name_guitar, req.body.about_guitar, req.body.price, req.body.photo]);
            return res.render('add', {layout: "admin_main"});
        }catch(err){
            return res.render('Ошибка добавления пользователя !!!');
        }
    }

    async deleteObjectTables(req, res){
        try{
            const id = req.params.id;
            const delete_object = await db.query(`DELETE FROM acoustic_guitars WHERE id = $1`, [id]);
            return res.render('table', {layout: "admin_main"});
        }catch(err){
            return res.render('Ошибка удаления пользователя !!!');
        }
    }

}

module.exports = new adminController;
import db from 'sqlite'
import Promise from 'bluebird';

export class Database {

  constructor() {
    Promise.resolve()
      .then(() => db.open('./sqlite-recipes.db', { Promise }))
  }

  create(options){
    // options.tableName
    // options.item
    // let params = {
    //   TableName: options.tableName,
    //   Item: options.item
    // }
  }

  list(options){
    // options.tableName
    let params = {
      TableName: options.tableName
    }
    return db.all('SELECT * FROM recipes ORDER BY created_on DESC');
  }

  read(options){
    // send back all data as a simple JSON document or object literal
    // options.success(myData)
  }

  find(options){
    // send back all data as a simple JSON document or object literal
    // options.success(myData)
  }

  update(options){
    // update an existing entity with the `options.data` here
    // call `options.success(entity)` when I'm done
  }

  archive(options){
    // destroy an entity identified with the `options.data` here
    // call `options.success(entity)` when I'm done
  }

  destroy(options){
    // destroy an entity identified with the `options.data` here
    // call `options.success(entity)` when I'm done
  }

}

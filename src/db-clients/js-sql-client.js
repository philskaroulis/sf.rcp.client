
// NOTE: MAKE SURE sql.js IS SOURCED IN HTML HEADER
import sqlUtils from './js-sql/js-sql-utils'
import 'lodash'
import 'promise'

function marshallResults(response) {
  /*
    INPUT:
    response = {
      columns: ['first','second'],              // array of columns
      values: [['a','1'],['b','2'],['c','3']]   // array of arrays of values
    }

    OUTPUT:
    marshalled = [
      {first: a, second: 1},
      {first: b, second: 2},
      {first: c, second: 3}
    ]

  */
  let marshalled = [];
  for (let i = 0; i < response.values.length; i++) {
    marshalled.push( _.zipObject( response.columns, response.values[i] ) );
  }
  // console.info('res',marshalled)
  return marshalled
}

export class Database {

  constructor() {

    if (typeof SQL !== 'object') {
      console.error("Failed to load sql.js");
    }

    //Create the database
    // console.log('creating db');
    this.db = new SQL.Database();
    sqlUtils.migrate(this.db);
  }

  create(options){
    // options.tableName
    // options.item
    // let params = {
    //   TableName: options.tableName,
    //   Item: options.item
    // }
    // return this.dynamoDB.put(params).promise()
  }

  list(options){
    // options.tableName
    let self = this;
    return new Promise(function (fulfill, reject){
      try {
        let res = self.db.exec("SELECT id, code, title, status FROM recipe");
        fulfill( marshallResults(res[0]) );
      } catch (err) {
        reject(err);
      }
    });
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

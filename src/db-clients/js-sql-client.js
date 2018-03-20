
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
  if ( !response || response.length===0)
    return response
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

  create( options ){
    // options.collection
    // options.item
    if ( ( !options ) || ( !options.collection ) || ( !options.collection ) ) {
      throw 'db.list: Incorrect options object'
    }
    let self = this;
    let sqlStr = '';
    if (options.collection === 'Recipes') {
      sqlStr += "INSERT INTO recipe (id, code, person_id, title) VALUES ('"+options.item.id+"', '"+options.item.code+"', '"+options.item.person_id+"', '"+options.item.title+"');"
    }
    return new Promise(function ( fulfill, reject ){
      try {
        self.db.run( sqlStr );
        fulfill( {status: 'success'} );
      } catch ( err ) {
        reject( err );
      }
    });
  }

  list( options ){
    // options.collection
    // options.status
    if ( ( !options ) || ( !options.collection ) ) {
      throw 'db.list: Incorrect options object'
    }
    options.status = options.status || { status: 'draft' };
    let self = this;
    let sqlStr = '';
    if (options.collection === 'Recipes') {
      if (options.status==='archived') {
        sqlStr += "SELECT id, code, title, status FROM recipe WHERE status = 'archived' ORDER BY created_on DESC;"
      } else {
        sqlStr += "SELECT id, code, title, status FROM recipe WHERE status != 'archived' ORDER BY created_on DESC;"
      }
    }
    return new Promise(function ( fulfill, reject ){
      try {
        let res = self.db.exec( sqlStr );
        if (res && res.length>0)
          fulfill( marshallResults( res[0] ) )
        else
          fulfill( [] )
      } catch ( err ) {
        reject( err );
      }
    });
  }

  get( options ){
    // options.collection
    // options.id
    if ( ( !options ) || ( !options.collection ) || ( !options.id )) {
      throw 'db.get: Incorrect options object'
    }
    let self = this;
    let sqlStr = '';
    if (options.collection === 'Recipes') {
      sqlStr += "SELECT id, code, title, status FROM recipe WHERE id = '"+options.id+"';"
    }
    return new Promise(function ( fulfill, reject ){
      try {
        let res = self.db.exec( sqlStr );
        if (res && res.length>0)
          fulfill( marshallResults(res[0])[0] );
        else
          fulfill( [] )
      } catch ( err ) {
        reject( err );
      }
    });
  }

  find(options){
    // send back all data as a simple JSON document or object literal
    // options.success(myData)
  }

  update(options){
    // options.collection
    // options.item
    if ( ( !options ) || ( !options.collection ) || ( !options.item ) ) {
      throw 'db.list: Incorrect options object'
    }
    let self = this;
    let sqlStr = '';
    if (options.collection === 'Recipes') {
      sqlStr += "UPDATE recipe SET code='"+options.item.code+"', title='"+options.item.title+"', person_id='"+options.item.person_id+"' WHERE id='"+options.item.id+"';"
    }
    return new Promise(function ( fulfill, reject ){
      try {
        self.db.run( sqlStr );
        fulfill( {status: 'success'} );
      } catch ( err ) {
        reject( err );
      }
    });
  }

  archive(options){
    // options.collection
    // options.item
    if ( ( !options ) || ( !options.collection ) || ( !options.item ) ) {
      throw 'db.list: Incorrect options object'
    }
    let self = this;
    let sqlStr = '';
    if (options.collection === 'Recipes') {
      sqlStr += "UPDATE recipe SET status='archived', person_id='"+options.item.person_id+"' WHERE id='"+options.item.id+"';"
    }
    return new Promise(function ( fulfill, reject ){
      try {
        self.db.run( sqlStr );
        fulfill( {status: 'success'} );
      } catch ( err ) {
        reject( err );
      }
    });
  }

  destroy(options){
    // destroy an entity identified with the `options.data` here
    // call `options.success(entity)` when I'm done
  }

}

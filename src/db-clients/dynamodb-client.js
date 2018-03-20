import 'aws-sdk/global'
import 'aws-sdk/clients/dynamodb'

export class Database {

  constructor() {
    let config = {
      "apiVersion": "2012-08-10",
      "accessKeyId": "abcde",
      "secretAccessKey": "abcde",
      "region":"us-east-1",
      "logger": console,
      "endpoint": "http://localhost:8000"
    }
    // With DynamoDB document client you don't have to marshall attributes back and forth.
    this.dynamoDB = new AWS.DynamoDB.DocumentClient(config)
  }

  create(options){
    // options.tableName
    // options.item
    let params = {
      TableName: options.tableName,
      Item: options.item
    }
    return this.dynamoDB.put(params).promise()
  }

  list(options){
    // options.tableName
    let params = {
      TableName: options.tableName
    }
    return this.dynamoDB.scan(params).promise()
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


/*
var ApiBuilder = require('claudia-api-builder'),
  AWS = require('aws-sdk'),
  api = new ApiBuilder(),
  dynamoDb = new AWS.DynamoDB.DocumentClient()

module.exports = api

// Create new user
api.post('/user', function (request) {
  'use strict'
  var params = {
    TableName: request.env.tableName,
    Item: {
      userid: request.body.userId,
      name: request.body.name,
      age: request.body.age
    }
  }
  // return dynamo result directly
  return dynamoDb.put(params).promise()
}, { success: 201 }) // Return HTTP status 201 - Created when successful

// get user for {id}
api.get('/user/{id}', function (request) {
  'use strict'
  var id, params
  // Get the id from the pathParams
  id = request.pathParams.id
  params = {
    TableName: request.env.tableName,
    Key: {
      userid: id
    }
  }

  // post-process dynamo result before returning
  return dynamoDb.get(params).promise().then(function (response) {
    return response.Item
  })
})

// delete user with {id}
api.delete('/user/{id}', function (request) {
  'use strict'
  var id, params
  // Get the id from the pathParams
  id = request.pathParams.id
  params = {
    TableName: request.env.tableName,
    Key: {
      userid: id
    }
  }
  // return a completely different result when dynamo completes
  return dynamoDb.delete(params).promise()
    .then(function () {
      return 'Deleted user with id "' + id + '"'
    })
}, {success: { contentType: 'text/plain'}})

api.addPostDeployConfig('tableName', 'DynamoDB Table Name:', 'configure-db')
*/
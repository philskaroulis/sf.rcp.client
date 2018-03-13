
import 'aws-sdk/global'
import 'aws-sdk/clients/dynamodb'

const config = {
  "apiVersion": "2012-08-10",
  "accessKeyId": "abcde",
  "secretAccessKey": "abcde",
  "region":"us-east-1",
  "logger": console,
  "endpoint": "http://localhost:8000"
}

export let dynamodb = new AWS.DynamoDB(config);

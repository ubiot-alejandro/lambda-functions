e strict';
var AWS=require('aws-sdk');
var dclient =new AWS.DynamoDB.DocumentClient();

/*
 * var input={
 *     TableName:"Bicycle",
 *          Key:{
 *                  "GTIN":"4bfae518-813a-11e8-8af9-07d7321fb577"
 *                       }
 *                       }
 *                       */

var getInvoices = (event, context, callback) => {
	    // TODO implement
	//     //callback(null, 'Hello from Lambada');
	//         
	//            /* var params={    
	//                "TableName":"Bicycle",
	//                     "Key":{
	//                             "bicycleId":event.bicycleId
	//                                  }
	//                                      };*/
	//                                          
	//                                             var params={    
	//                                                 "TableName":"Bicycle",
	//                                                     // "FilterExpression" : 'dataCreation = :t_dataCreation',
	//                                                          //"ExpressionAttributeValues" : {':t_dataCreation' : '01-01-2000'}
	//                                                              };
	//                                                                  
	//                                                                      //el parametro event.params, trae lo que venga en el llamado de la funcion
	//                                                                          dclient.scan(params,(error,data)=>{
	//                                                                                if(error){
	//                                                                                         console.log(error) ;
	//                                                                                                  callback(null,"error explodes" );
	//                                                                                                        }else{
	//                                                                                                                 callback(null, data);
	//                                                                                                                       }
	//                                                                                                                           });
	//
	//                                                                                                                           };
	//                                                                                                                           exports.getInvoices=getInvoices;

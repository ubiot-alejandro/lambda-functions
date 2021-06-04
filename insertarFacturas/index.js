e strict';

var AWS = require('aws-sdk'),
		uuid = require('uuid'),
		documentClient = new AWS.DynamoDB.DocumentClient(); 
	
	
var writeInvoice = function(event, context, callback){
		var params = {
					Item : {
									"bicycleId" : uuid.v1(),
									"idInvoice"     :event.idInvoice,     
						            "SERIAL"        :event.SERIAL,        
						            "saleDate"      :event.saleDate,      
						            "warrantyStatus":event.warrantyStatus,
						            "warrantyDate"  :event.warrantyDate,  
						            "movementStatus":event.movementStatus,
						            "class"         :event.class,
						            "GTIN"          :event.GTIN,          
						            "userCreation"  :event.userCreation,  
						            "dataCreation"  :event.dataCreation,
						            "manufacturing" :event.manufacturing
								},
				 "TableName":"Bicycle"
				};
		
		documentClient.put(params, function(error, data){
				  if(error){
					           console.log(error) ;
					           callback(null,"error explodes" );
					        }else{
							         callback(null,data);
							      }
				});
}


exports.writeInvoice=writeInvoice;

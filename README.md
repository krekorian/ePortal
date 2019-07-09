# ePortal

may delete just testing table data

`npx sequelize-cli model:generate --name Users --attributes id:integer,firstName:string,lastName:string,email:string,password:string,type:string`

`npx sequelize-cli model:generate --name RequestStatus --attributes id:integer,requestNum:integer,itMN:boolean,SP1:boolean,SP2:boolean`

`npx sequelize-cli model:generate --name Requests --attributes id:integer,userID:string,requestStatus:boolean,bearingCost:float,requestType:string,objective:string,note:string,futureWork:string`

`npx sequelize-cli model:generate --name RequestedItems --attributes id:integer,requestNum:integer,item:string,quantity:integer,price:integer,tax:integer,purchaseType:string,period:string,vendor:string`

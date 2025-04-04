import { Sequelize } from "sequelize-typescript";
import { Product } from "../models/product";

const connection = new Sequelize({
database: 'sisweb_db',
dialect: "mysql",
username: 'root',
password: '1234',
storage: ':memory:',
models: [
Product
]
});

async function connectionDB(){
try{
await connection.sync();
}catch(e){
console.log(e);
}
} 

export default connectionDB;

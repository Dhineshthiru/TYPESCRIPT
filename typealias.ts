 //Primitive TYpes

 type UserName = string
 type YesOrNo = boolean
 type age = number

 let username:UserName = 'Dhinesh'
 let isEng:YesOrNo = true
 let age:age = 30


 //Array

 type NamesArray = string[]
 let UserNames:NamesArray = ['a','b','c','d']

 //Object

 type User = {
   name: UserName,
   age: age,
   isLang:YesOrNo
 }

 let user:User = {name:'Dev',age:25,isLang:true}

 //UnionTypes

 type strOrNum = string | number

 let errorCode:StrOrNum = '401'

 errorCode = 401

 //Tuples

 type nameAndage = [name:string, age:number]

 let UserTuple:nameAndage = ['John', 30]
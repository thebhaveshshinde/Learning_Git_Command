const Array_object = require("./index1.js")

// const person =
// {
//     fname: "Bhavesh",
//     lname: "Shinde",
//     full: function () {
        // return console.log(this)  //  { fname: 'Bhavesh', lname: 'Shinde', full: [Function: full] }
        // return console.log(`${this}`) //[object Object] , Here this refer to person object
        // return console.log(`${this.fname}`) //Bhavesh
        //  return console.log(this.lname) //Shinde
        // return console.log(`${this.fname}  and ${this.lname}`)    //Bhavesh and Shinde
     
//     }
// }

// console.log(Array_object.gunc1())
Array_object.forEach((element) => {element.gunc()})
// Array_object.gunc()
// person.full()

// const hi = 
//     {
//         id:1,
//         name:"hello",
//         func:function ()
//         {
//            return console.log(`${this}`)
//         }
//     }

// hi.func()
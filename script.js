
// console.log("====Student Bio-Data====")

// const record = [
//   {
//      Fall:[{
//       ID:"21F-01",
//       Name:"Mian M. Khubaib",
//       FatherName:"Samiullah",
//       subject:[{
//         Course:"MERN",
//           Instructor:"Sir suleman",
//           Marks:"78"
//       },
//     {
//       Course:"Django",
//       Instructor:"Sir umer",
//       Marks:"77"
//     }]
//      },
//     {
//       ID:"21F-02",
//       Name:"Bilal Ahsan",
//       FatherName:"Ahsan",
//       subject:[{
//           Course:"OOP",
//           Instructor:"Sir Umair",
//           Marks:"78"
//       },
//     {
//       Course:"ICT",
//       Instructor:"Sir Farhan",
//       Marks:"88"
//     }]

//     }]
//   },
//   {
//     Spring:[{
//       ID:"21S-01",
//       Name:"Moeez Iqbal",
//       FatherName:"Iqbal",
//       subject:[{
//         Course:"Programing",
//         Instructor:"Sir usman",
//         Marks:"75"
//       },
//     {
//       Course:"DSA",
//       Instructor:"Sir Salman",
//       Marks:"69"
//     }]

//      },
//     {
//       ID:"21S-02",
//       Name:"Usman Naveed",
//       FatherName:"Naveed",
//       subject:[{
//         Course:"Web",
//         Instructor:"Sir Hamza",
//         Marks:"86"
//       },
//     {
//       Course:"App-dev",
//       Instructor:"Sir Abdullah",
//       Marks:"91"
//     }]

//     }]
//   }
// ]


// const record =[
//   {
//       ID:"21S-01",
//       Name:"Ali",
//       FatherName:"Ahmad",
//       subject:[{
//         sub:"OOP1",
//         marks:"11"
//       },
//     {
//       sub:"ICT1",
//       marks:"22"
//     }]
//   },
//   {
//      ID:"21S-02",
//      Name:"Usman Naveed",
//      FatherName:"Naveed",
//      subject:[{
//       sub:"OOP2",
//       marks:"33"
//     },
//   {
//     sub:"ICT2",
//     marks:"44"
//   }]
//   },
//   {
//      ID:"21F-02",
//      Name:"Bilal Ahsan",
//      FatherName:"Ahsan",
//      subject:[{
//       sub:"OOP3",
//       marks:"55"
//     },
//   {
//     sub:"ICT3",
//     marks:"66"
//   }]
//   }
// ]
// record.forEach((record)=>{

//     record.subject.forEach((subject)=>{
//       console.log(record.Name + " got " + subject.marks + " in " + subject.sub)
//     })

// })


// for (let i = 0; i < record.length; i++) {
//   const element1 = record[i];
//   for (let j = 0; j < element1.subject.length; j++) {
//     const element2 = element1.subject[j];
//      console.log(element1.Name + " got " + element2.marks + " in " + element2.sub)
//   }
// }


// const office = [
//   {
//      name:"ali",
//      addres:"sindh",
//      subject:[
//       {
//        sub:"phy",
//        marks:"29"
//       },
//       {
//         sub:"eng",
//         marks:"39"
//       }
//      ]

//   },
//   {
//     name:"ahmad",
//     addres:"  punjab",
//     subject:[
//      {
//       sub:"comp",
//       marks:"49"
//      },
//      {
//        sub:"urdu",
//        marks:"59"
//      }
//     ]
//   }
// ]

// console.log( office.find((ele)=> ele.subject ))


// for (let x in office[0]){
//   for (let y in )
// }




// for( let i=0; i< office.lenght; i++){
//     const element = office[i]
    
//     console.log(element);
// }

office.forEach( (element)=>{
    element.subject.forEach((element1)=>{
        console.log(element1)
    }

    )
}
   
)

office.map((element) => {
 
   element.subject.map((Thinghs) => {
      console.log(element.name + " received against " + element.name + " have matrials "  + Thinghs.sub )
   });
});

// array function == Find , filter, findindex, splice, js arrays method 
// promices

// const stu = [
//   {
//      name:"khubaib",
//      marks:45
//   },
//   {
//     name:"khubaib",
//     marks:55
//  },
//  {
//   name:"arsal",
//   marks:33
// },
// {
//   name:"umer",
//   marks:50
// },

// ]
// for (let index = 0; index < stu.length; index++) {
//   const element = stu[index];
//   console.log(element)
// }
// const std = [
//   {
//     name: "ayesha",
//     Marks: 50,
//   },
//   {
//     name: "ayesha",
//     Marks: 48,
//   },

//   {
//     name: "ayesha",
//     Marks: 48,
//   },
// ];

// const stud = std.find((ele) => {
//   return ele.name == "ayesha" && ele.Marks > 50;
// });
// console.log(stud);
// const hello="Hello"
// const world="dsadasd"
// const user =`${hello} write ${world}`;
// console.log(user)
// let myFunction = (a, b) => a * b;

// myFunction(12,23)

// const ans= sum=>(12,2,2,2);

// const sum=(a,b)=>{
//   return a+b;
// }
// console.log(sum(12,23))

// if(undefined===0)
// {
//   console.log("true")
// }

// const student ={
//   brach : "CSE",
//   city: "Delhi",
//   name: "rohut",
//   21: "Date of Birth"
// };


// console.log(student[21])

const Student=[
  {
    index :0,
    name: "Ajay",
    city: "Delhi",
    cgpa: 90, 

  },
  {
    index :1,
    name: "Mohit",
    city: "Bhopal",
    cgpa: 85, 

  },
  {
    index :2,
    name: "Sumit",
    city: "Mumabi",
    cgpa: 85, 

  },{
    index :3,
    name: "Aman",
    city: "Agra",
    cgpa: 82, 

  },
];
for(let i=0;i<Student.length;i++) 
{
  if(Student[i].cgpa>=85)
    console.log(Student[i])
}














// console.log("Hello Akash")
// function add (x:number, y:number): number {
//     return x + y;
// };
// const sum = (x:number, y:number): number=> {
//     return x + y;
// };
// let output = add(1, 2);

type user={
    id:number;
    name:string;
    age:number;
    salary:number;
};

const Sort =(arr:user[],para:string)=>{



}

const arr:user[]= [
    {
      id: 1,
      name: "ram",
      age: 25,
      salary: 27000,
    },
    {
      id: 2,
      name: "raju",
      age: 23,
      salary: 48000,
    },
    {
      id: 3,
      name: "ramesh",
      age: 40,
      salary: 89000,
    },
    {
      id: 4,
      name: "hari",
      age: 63,
      salary: 285000,
    },
    {
      id: 5,
      name: "shyam",
      age: 33,
      salary: 55000,
    },
  ];
  Sort(arr, "id");
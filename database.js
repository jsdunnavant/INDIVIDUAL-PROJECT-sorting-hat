export const database = {
  students: [
  {
   id: 1,
   name: "Taylor",
   house: "ravenclaw",
  },
  {
    id: 2,
    name: "Jenna",
    house: "gryffindor",
  },
  {
    id: 3,
    name: "Jamel",
    house: "hufflepuff",
  },
  {
    id: 4,
    name: "Patrick",
    house: "slytherin",
  },
  {
    id: 5,
    name: "Spongebob",
    house: "hufflepuff",
  },
  {
    id: 6,
    name: "Asuna",
    house: "ravenclaw",
  },
  {
    id: 7,
    name: "Kirito",
    house: "gryffindor",
  },
  {
    id: 8,
    name: "Eren",
    house: "slytherin",
  },
  ]
}

 const newStudent = () => {
  database.students.forEach((item, i) =>{
  item.id = i + 1;
 })
}
export const getStudents = () => {
  return database.students.map(student => ({...student}))
}

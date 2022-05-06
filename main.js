const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender
};

const mySortHat = () => {
  const domString = `
<div class="card">
    <div class="cardHead">
    Welcome to the funky fresh halls of Hogmaneli
    </div>
    <div class="card-body">
    <h5 class="card-title">Time to get served</h5>
    <p class="card-text">Are you nervous</p>
    </div>
</div>`;
  renderToDom('#container', domString);
};

const house = ["ravenclaw", "gryffindor", "slytherin", "hufflepuff"];
const randomHouse = Math.floor(Math.random() * house.length);
console.log(randomHouse, house[randomHouse]);


const formBtn = () => {
  let domString = "";
  domString = `
  <form>
  <div class="mb-3">
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3 form-check">
  </div>
  <button type="submit" class="btn btn-primary">Sort this out</button>
</form>`;
renderToDom("#sortingHat", domString);
}

const filterBtns = () => {
  let domString = "";
  domString =  `
  <header>Filter Students</header>
  <button type="btn btn-primary" id="ravenclaw" class="ravenclaw">Ravenclaw</button>
  <button type="btn btn-secondary" id="gryffindor" class="gryffindor">Gryffindor</button>
  <button type="btn btn-success" id="hufflepuff" class="hufflepuff">Hufflepuff</button>
  <button type="btn btn-danger" id="slytherin" class="slytherin">Slytherin</button>
  <button type="btn btn-danger" id="allStudents" class="allStudents">All Students</button>
  `;
  renderToDom("#filterDiv", domString);
}

// const filterFunction = (arr) => {
//   let domString = "";
//   for (const students of arr) {
//     domString += `
//     <div class="card" style="width: 18rem;">
//     <img src="..." class="card-img-top" alt="...">
//       <div class="card-body">
//        <h5 class="card-title">${students.name}</h5>
//          <p class="card-text">${students.house}</p>
//       </div>
//     </div>
//     `
//   }
//   renderToDom("#sortingHat", domString)
// }



// figure out filterfunction//
const eventListeners = () => {
  document.querySelector("#filterDiv").addEventListener('click', (e) => {
    if (e.target.id === "allStudents") {
      filterFunction(students)
    } if (e.target.id === "ravenclaw") {
      const ravenclaw = students.filter((taco) => taco.house === "ravenclaw")
      filterFunction(ravenclaw)
    } if (e.target.id === "hufflepuff") {
      const hufflepuff = students.filter((tacos) => tacos.house === "hufflepuff")
      filterFunction(hufflepuff)
    } if (e.target.id === "gryffindor") {
      const gryffindor = students.filter((burrito) => burrito.house === "gryffindor")
      filterFunction(gryffindor)
    } if (e.target.id === "slytherin") {
      const slytherin = students.filter((burritos) => burritos.house === "slytherin")
      filterFunction(slytherin)
    }
  })
}
  document.querySelector("#sortingHat").addEventListener('click', (e) => {
    if (e.target.id === "sortingHat") {
      randomHouse(student)
  }})

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newStudentCard = {
      name: document.querySelector('#name').value,
      house: document.querySelector('#house').value,
    };
  
     students.push(newStudentCard);
     filterFunction();
     formModal.hide();
     form.reset();
  });

const startApp = () => {
  mySortHat();
  filterFunction(students);
  formBtn();
  filterBtns();
  eventListeners();
};

startApp();

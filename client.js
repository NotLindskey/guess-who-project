console.log('Here are all the available people:', people);


$(document).ready(readyNow);

function readyNow() {
  console.log("DOM is loaded!");

  populatePicture();
  randomNumber();
  randomSelectedPerson();

  $('.pictures').on('click', '.imageClick', checkGuess);
};

// Load pictures
function populatePicture (){
    console.log('Working!');

   for (let person of people) {
    $('.pictures').append(`<div>
    <img class="imageClick" data-person=${person.name} src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
    </div>`);
}
}

let newPeople = [];

// function that selects a random number
function randomNumber(min, max){
   return Math.floor(Math.random()*(1 + max - min) + min);
} 

// function that randomly generate a selected object (a person)
function randomSelectedPerson () {
  let selectedPerson = people[randomNumber(0, people.length -1)];
  newPeople.push(selectedPerson);
  for (names of newPeople){
  $('.selectedName').empty().append(`<p>Click this person: ${names.name}</p>`);
}
};

console.log(newPeople);

// if people match -> return true {restart game}
// if people dont match -> return false {restart game}

function checkGuess(){
  console.log($(this));

  let checkAnswer = $(this).data('person');
  console.log('data person', checkAnswer);



}

// dont forget to save!!! :)
// H
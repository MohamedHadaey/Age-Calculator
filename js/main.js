var yearInput = document.getElementById("yearInput");
var ageElement = document.getElementById("ageElement");
var typeElement = document.getElementById("typeElement");

function calcAge() {
  var date = new Date();
  var age = date.getFullYear() - yearInput.value;
  ageElement.innerHTML = "Your Age is <span> " + age + " </span>";
  if (age < 18) {
    typeElement.innerHTML = "You are kid";
  } else if (age >= 18 && age <= 40) {
    typeElement.innerHTML = "You are young";
  } else {
    typeElement.innerHTML = "You are old";
  }
}
let a = Math.random() * 100;
a = Number.parseInt(a);
let input;
let score = 0;
let sc;
while (input != a) {
  sc = score++;
  input = prompt("Enter a number:");
  if (input == a) {
    alert("Congrats you gause the correct ");
    alert("You gauss the number in" + sc);
  } else if (input > a && input < 100) {
    alert("Your enter number is greater than a random number");
  } else if (input < a && input > 0) {
    alert("Your entered number is smaller than a random number");
  } else {
    alert("Enter the number between 1 to 100");
  }
}

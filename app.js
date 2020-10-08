$(document).ready(function () {
  let $container = $('<div class="container"></div>');
  $("body").append($container);
  let sqrId = 1;
  let diceArr = [];
  $("#button").click(() => {
    let newDie = new Die(Math.floor(Math.random() * 6) + 1);
    diceArr.push(newDie);
  });
  $(".button2").click(() => {
    diceArr.forEach((die) => die.roll());
  });
  $(".button3").click(() => {
    let sum = 0;
    diceArr.forEach((die) => (sum += die.value));
    alert(sum);
  });

  class Die {
    constructor(value) {
      this.value = value;
      this.square = $('<div class="square"></div>');
      $container.append(this.square);
      this.square.id = sqrId;
      this.square.text(this.value);
      sqrId++;
      this.square.click(() => this.roll());
      
      this.square.dblclick(() => {
        if (this.square.value % 1 == 0) {
          if (square.nextSibling) {
            $container.removeChild(square.nextSibling);
          } else {
            alert("No die here man!");
          }
        }

        if (this.square.value % 0 == 0) {
          if (square.nextSibling) {
            $container.removeChild(square.nextSibling);
          } else {
            alert("No die here either man!");
          }
        }
      });
    } // random value now works now work on making the number change on click

    roll() {
      let randomNum = Math.floor(Math.random() * 6);
      this.value = randomNum;
      this.square.text(this.value);
    }
  }
});

$(document).on('ready', function () {
  let $container: JQuery<HTMLDivElement> = $('<div class="container"></div>');
  $("body").append($container);
  let sqrId = 1;
  let diceArr = [];
  $("#button").on("click", () => {
    let newDie = new Die(Math.floor(Math.random() * 6) + 1);
    diceArr.push(newDie);
  });
  $(".button2").on("click", () => {
    diceArr.forEach((die) => die.roll());
  });
  $(".button3").on("click", () => {
    let sum = 0;
    diceArr.forEach((die) => (sum += die.value));
    alert(sum);
  });

  class Die {
      value: number;
      square: JQuery<HTMLDivElement>;
    
    constructor(value: any) {
      this.value = value;
      this.square = $('<div class="square"></div>');
      $container.append(this.square);
      this.square.attr("id", sqrId);
      this.square.text(this.value);
      sqrId++;
      this.square.on("click", () => this.roll());

      this.square.on('dblclick', () => {
        if (this.value % 1 == 0) {
          if (this.square.next()) {
            $container.find(this.square.next().remove())
          } else {
            alert("No die here man!");
          }
        }

        if (this.value % 0 == 0) {
          if (this.square) {
            $container.find(this.square.prev().remove());
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

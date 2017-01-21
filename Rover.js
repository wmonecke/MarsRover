var nextDir = prompt("Where do you want the Rover to move (N, E, S, W): ");

var myRover = {
  position: [4,9],
  direction: "N"
};

var marsFloor = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, "R", 0, 0, 0, 0, 0]
  ];

var yValue = 0;

marsFloor.forEach(function(x){

    yValue ++;

    if(x.indexOf("R") >= 0){

      console.log(`The Rover is currently at X:  ${x.indexOf("R")}  Y:  + ${yValue}`);

      var xValue = x.indexOf("R");

      yValue = yValue - 1;

      console.log(xValue);

      console.log(yValue);

      return xValue; // Can I return two values? //

    }
  });

  console.log(yValue); //Is yValue changed with if function? //

  var currentPosition = [yValue][xValue];

  var nextDir = prompt("Where do you want the Rover to move (N, E, S, W): ");

  function capitalizeFirstLetter(nextDir) {
      return string.charAt(0).toUpperCase();
  }

  /*

     1. Function that actually finds the current position of the Rover.

     2. Prompt the user to give the next Direction.

     3. For "N"/"S": take current position of Rover and add/substract 1 from the y value.

       Draw Array in console with new "R" Position.

       For "E"/"W": Do nothing (Rover just rotates).

     4.Tell user the new coordinates of Rover.
*/
  // marsFloor.forEach(function findRover(x){
  //   console.log(indexOf("R"));
  // }

  // function goForward(rover) {
  //   switch(rover.direction) {
  //     case "N":
  //       rover.position[0]++;
  //       break;
  //     case "E":
  //       rover.position[1]++;
  //       break;
  //     case "S":
  //       rover.position[0]--;
  //       break;
  //     case "W":
  //       rover.position[1]--;
  //       break;
  //   }
  //
  //   console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
  // }

// goForward(myRover);

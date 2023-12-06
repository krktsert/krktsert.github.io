// Function to draw the letter 'T' on the display at a specific position
function drawLetterT(display, x, y) {
  const height = display.length;
  const width = display[0].length;

  // Check if the position is within the display boundaries
  if (x < 0 || x >= width || y < 0 || y >= height) {
    console.error('Invalid position for drawing the letter');
    return;
  }

  // Draw the vertical line of the 'T'
  for (let i = 0; i < height; i++) {
    display[i][x] = '😘';
  }
  for (let i = 0; i < height; i++) {
    display[i][6] = '😘';
  }

  // Draw the horizontal line of the 'T'
  for (let j = 0; j < width; j++) {
    display[y][j] = '😘';
  }
  for (let j = 0; j < width; j++) {
    display[1][j] = '😘';
  }
}

function drawLetterU(display, x, y) {
  const height = display.length;
  const width = display[0].length;

  // Check if the position is within the display boundaries
  if (x < 0 || x >= width || y < 0 || y >= height) {
    console.error('Invalid position for drawing the letter');
    return;
  }

  // Draw the left vertical line of the 'U'
  for (let i = 0; i < height - 1; i++) {
    display[i][x] = '😘';
  }
  for (let i = 0; i < height - 1; i++) {
    display[i][1] = '😘';
  }

  // Draw the bottom horizontal line of the 'U'
  for (let j = 0; j < width; j++) {
    display[height - 1][j] = '😘';
  }
  for (let j = 0; j < width; j++) {
    display[height - 2][j] = '😘';
  }

  // Draw the right vertical line of the 'U'
  for (let k = 0; k < height - 1; k++) {
    display[k][x + width - 1] = '😘';
  }
  for (let k = 0; k < height - 1; k++) {
    display[k][x + width - 2] = '😘';
  }
}

function drawLetterG(display, x, y) {
  const height = display.length;
  const width = display[0].length;

  for (let i = 2; i < height; i++) {
    display[i][x] = '😘';
  }
  for (let i = 2; i < height; i++) {
    display[i][1] = '😘';
  }

  for (let i = 0; i < height; i++) {
    display[2][i] = '😘';
  }
  for (let i = 0; i < height; i++) {
    display[3][i] = '😘';
  }

  for (let i = 4; i < 8; i++) {
    display[0][i] = '😘';
  }

  for (let i = 0; i < width; i++) {
    display[12][i] = '😘';
  }
  for (let i = 0; i < width; i++) {
    display[11][i] = '😘';
  }

  for (let i = 6; i < width; i++) {
    display[i][12] = '😘';
  }
  for (let i = 6; i < width; i++) {
    display[i][11] = '😘';
  }

  for (let i = 6; i < width; i++) {
    display[6][i] = '😘';
  }
  for (let i = 6; i < width; i++) {
    display[7][i] = '😘';
  }
}

function drawLetterC(display, x, y) {
  const height = display.length;
  const width = display[0].length;
  
  for (let i = 0; i < width; i++) {
    display[x][i] = '😘';
  }
  for (let i = 0; i < width; i++) {
    display[1][i] = '😘';
  }

  for (let i = 0; i < width -2; i++) {
    display[i][0] = '😘';
  }
  for (let i = 0; i < width -2; i++) {
    display[i][1] = '😘';
  }

  for (let i = 0; i < width; i++) {
    display[height - 3][i] = '😘';
  }
  for (let i = 0; i < width; i++) {
    display[height - 4][i] = '😘';
  }

  display[11][8] = '😘';

  for (let i = 5; i < 9; i++) {
    display[height-1][i] = '😘';
  }

}

function drawLetterE(display, x, y) {
  const height = display.length;
  const width = display[0].length;

  for (let i = 0; i < width; i++) {
    display[x][i] = '😘';
  }
  for (let i = 0; i < width; i++) {
    display[1][i] = '😘';
  }

  for (let i = 0; i < height; i++) {
    display[i][x] = '😘';
  }
  for (let i = 0; i < height; i++) {
    display[i][1] = '😘';
  }

  for (let i = 0; i < width -2; i++) {
    display[5][i] = '😘';
  }
  for (let i = 0; i < width -2; i++) {
    display[6][i] = '😘';
  }

  for (let i = 0; i < width; i++) {
    display[12][i] = '😘';
  }
  for (let i = 0; i < width; i++) {
    display[11][i] = '😘';
  }

}
// Function to print the display
function printDisplay(display) {
  for (let i = 0; i < display.length; i++) {
    console.log(display[i].join(' '));
  }
}

// Create a new display array
const displayT = Array.from({ length: 13 }, () => Array(13).fill('💋'));
const displayU = Array.from({ length: 13 }, () => Array(13).fill('💋'));
const displayG = Array.from({ length: 13 }, () => Array(13).fill('💋'));
const displayC = Array.from({ length: 13 }, () => Array(13).fill('💋'));
const displayE = Array.from({ length: 13 }, () => Array(13).fill('💋'));


// Draw the letter 'T' at position (5, 5)
drawLetterT(displayT, 5, 0);
// printDisplay(displayT);
drawLetterU(displayU, 0, 0);
// printDisplay(displayU);
drawLetterG(displayG, 0, 0);
// printDisplay(displayG);
drawLetterC(displayC, 0, 0);
// printDisplay(displayC);
drawLetterE(displayE, 0, 0);
// printDisplay(displayE);


let frame = document.getElementById("frame");
let consoleOne = document.getElementById("Console1");
let myconsoleOne = document.getElementById("myconsole");

let hT = document.createElement("Div")
hT.id = "divhT"
hT.innerHTML = ""
hT.className = "item"
hT.append(displayT)

let hU = document.createElement("Div")
hU.innerHTML = ""
hU.className = "item"
hU.append(displayU)

let hG = document.createElement("Div")
hG.innerHTML = ""
hG.className = "item"
hG.append(displayG)

let hC = document.createElement("Div")
hC.innerHTML = ""
hC.className = "item"
hC.append(displayC)

let hE = document.createElement("Div")
hE.innerHTML = ""
hE.className = "item"
hE.append(displayE)

let br1 = document.createElement("br")
let br2 = document.createElement("br")
let br3 = document.createElement("br")
let br4 = document.createElement("br")

frame.append(hT)
frame.append(br1)
frame.append(hU)
frame.append(br2)
frame.append(hG)
frame.append(br3)
frame.append(hC)
frame.append(br4)
frame.append(hE)


var seconds = 0;

var d = new Date(2023, 10, 3, 11, 40, 0);
var dNow = new Date();
var secondsSince =Math.round( (dNow - d) / 1000 );

let counter = document.getElementById("counter")
let counterTwo = document.getElementById("counter-two")
counter.innerHTML = seconds+1
counterTwo.innerHTML = secondsSince

function incrementSeconds(){ 
  seconds+=1;
  secondsSince += 1;
  counter.innerHTML = seconds;
  counterTwo.innerHTML = secondsSince;
}

var cancel = setInterval(incrementSeconds, 1000);

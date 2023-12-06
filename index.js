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

  // Draw the horizontal line of the 'T'
  for (let j = 0; j < width; j++) {
    display[y][j] = '😘';
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

  // Draw the bottom horizontal line of the 'U'
  for (let j = 0; j < width; j++) {
    display[height - 1][j] = '😘';
  }

  // Draw the right vertical line of the 'U'
  for (let k = 0; k < height - 1; k++) {
    display[k][x + width - 1] = '😘';
  }
}

function drawLetterG(display, x, y) {
  const height = display.length;
  const width = display[0].length;

  for (let i = 2; i < height; i++) {
    display[i][x] = '😘';
  }

  for (let i = 0; i < height; i++) {
    display[2][i] = '😘';
  }

  for (let i = 4; i < 8; i++) {
    display[0][i] = '😘';
  }

  for (let i = 0; i < width; i++) {
    display[12][i] = '😘';
  }

  for (let i = 6; i < width; i++) {
    display[i][12] = '😘';
  }

  for (let i = 6; i < width; i++) {
    display[6][i] = '😘';
  }
}

function drawLetterC(display, x, y) {
  const height = display.length;
  const width = display[0].length;
  
  for (let i = 0; i < width; i++) {
    display[x][i] = '😘';
  }

  for (let i = 0; i < width -2; i++) {
    display[i][x] = '😘';
  }

  for (let i = 0; i < width; i++) {
    display[height - 3][i] = '😘';
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

  for (let i = 0; i < height; i++) {
    display[i][x] = '😘';
  }

  for (let i = 0; i < width -2; i++) {
    display[5][i] = '😘';
  }

  for (let i = 0; i < width; i++) {
    display[12][i] = '😘';
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
// drawLetterT(displayT, 5, 0);
// printDisplay(displayT);
// drawLetterU(displayU, 0, 0);
// printDisplay(displayU);
// drawLetterG(displayG, 0, 0);
// printDisplay(displayG);
// drawLetterC(displayC, 0, 0);
// printDisplay(displayC);
// drawLetterE(displayE, 0, 0);
// printDisplay(displayE);


// Fill the empty space with 💋
// fillEmptySpace(display);



let consoleOne = document.getElementById("Console1");
consoleOne.innerHTML = ""
consoleOne.append(displayE)

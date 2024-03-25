// Please don't change the pre-written code
// Import the necessary modules here
const { error } = require('console');
const fs = require('fs');

const Solution = () => {
  try {
    fs.writeFileSync('notes.txt','The world has enough coders')
  } catch {
    console.log(error);
  }

  try {
    const buffer = fs.readFileSync('notes.txt');
    console.log(buffer.toString());
  } catch {
    console.log("File doesn't exist");
  }

  try {
    fs.appendFileSync('notes.txt','BE A CODING NINJA!')
  } catch {
    console.log(error);
  }

  try {
    const buffer = fs.readFileSync('notes.txt');
    console.log(buffer.toString());
  } catch {
    console.log("File doesn't exist");
  }
  


};
Solution();
module.exports = Solution;

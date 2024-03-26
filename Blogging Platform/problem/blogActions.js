// Do not change the pre-written code.
// Make the necessary imports here.
const fs = require('fs');
const readline = require('readline');

export const writeBlog = (filePath, name) => {
// Write your code here.
fs.writeFileSync(filePath, (err,data) => {
    if(err) {
        console.log(err);
    }else {
        const qInterface = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
          });
        
          // Prompt the user for input
          qInterface.question("Enter the blog: ", (n1) => {
           
              qInterface.close();
            });
          }),
        },


export const publishBlog = (filePath) => {
// Write your code here.
fs.readFileSync(filePath, (err,data) => {
    if(err) {
        console.log(err);
    }else {
        console.log(data.toString());
    }
})
}
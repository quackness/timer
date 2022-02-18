const args = process.argv.slice(2);
console.log(args);
for (let x of args) {
  if (!isNaN(x)) {//if x is a number then execute the code inside
    if (x >= 0) {//if x is greater than 0
      x = 1000 * Number(x);//x is 1000 larger to make it in seconds
      setTimeout(() => {
        process.stdout.write('Hello \n');//sound does not work for me so I used a string instead
      }, x);
    }
  }
}

//isNaN https://www.w3schools.com/jsref/jsref_isnan.asp
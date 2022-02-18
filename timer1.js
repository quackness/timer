const args = process.argv.slice(2);
console.log(args);
for (let i = 0; i < args.length; i++) {
  let num = Number(args[i]);//changing strings to numbers 
  if (num === undefined) {
    break;
  }
  if (num < 0) {
    continue;
  }
  if (typeof num !== 'number') {
    continue;
  } else {
    setTimeout(() => {
      process.stdout.write('Hello \n');//sound does not work for me so I used a string instead
    }, args[i] * 1000); 
  }
};


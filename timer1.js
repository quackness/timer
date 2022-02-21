const args = process.argv.slice(2);//slice is guarded, it knows how long the array is. If the array has less than 3 items it is not going to loop it, this takes care of the egde case with "no numbers provided"
for (let x of args) {
  if (!isNaN(x)) {//if x is a number then execute the code inside, it filters out NaNs from entering the block
    if (x >= 0) {//if x is greater or equal to 0, takes care of the edge case regarding negative numbers
      x = 1000 * Number(x);//x is 1000 larger to make it in seconds
      setTimeout(() => {
        process.stdout.write('Hello \n');//sound does not work for me so I used a string instead
      }, x);
    }
  }
}

//isNaN https://www.w3schools.com/jsref/jsref_isnan.asp
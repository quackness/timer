const args = process.argv.slice(2);
for (let x of args) {
  if (!isNaN(x)) {
    if (x >= 0) {
      x = 1000 * Number(x);
      setTimeout(() => {
        process.stdout.write('Hello \n');
      }, x);
    }
  }
}

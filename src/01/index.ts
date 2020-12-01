import * as fs from "fs";

// Brute forcing it today bb with a little Nightmare Before Christmas charm

const oogieBoogie = (() => {
  const data: string = fs.readFileSync("input.txt").toString();

  const numbers: number[] = data.split(/\r?\n/).map((line) => Number(line));

  for (let i = 0; i < numbers.length; i += 1) {
    const lock = numbers[i];
    for (let j = i + 1; j < numbers.length - 1; j += 1) {
      const stock = numbers[j];
      for (let k = j + 1; k < numbers.length - 2; k += 1) {
        const barrel = numbers[k];
        if (lock + stock + barrel === 2020) {
          return lock * stock * barrel;
        }
      }
    }
  }
})();

console.log(oogieBoogie);

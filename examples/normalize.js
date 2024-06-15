/**
 * If you have a range of numbers between 1 and N (inclusive), and you want to transform it
 * so that the numbers are between 0 and 5 (inclusive), but without losing the information
 * the data represents, you might do something like the following:
 */

// This is a list of three rankings that we retrived from some data source. Each ranking
// (or "ballot") ranks 9 options from 1 to 9 (inclusive).
const rankings = [
  {
    'option-1': 2,
    'option-2': 5,
    'option-3': 9,
    'option-4': 1,
    'option-5': 8,
    'option-6': 3,
    'option-7': 6,
    'option-8': 7,
    'option-9': 4
  },
  {
    'option-1': 1,
    'option-2': 2,
    'option-3': 8,
    'option-4': 3,
    'option-5': 4,
    'option-6': 9,
    'option-7': 5,
    'option-8': 6,
    'option-9': 7
  }
];

// Suppose each ranking was between 1 and 9 (inclusive). Then N = 9
const oldMin = 1;
const oldMax = 9;
// And we want to take each of these rankings and transform them so that they're between
// 0-5 instead of 1-N (inclusive)
const newMin = 0;
const newMax = 5;

function normalizeANumber(value) {
  return Math.round(newMin + (value - oldMin) / (oldMax - oldMin) * newMax);
}

// normalizeANumber(1) == 0
// normalizeANumber(2) == 1
// normalizeANumber(3) == 1
// normalizeANumber(4) == 2
// normalizeANumber(5) == 3
// normalizeANumber(6) == 3
// normalizeANumber(7) == 4
// normalizeANumber(8) == 4
// normalizeANumber(9) == 5

console.log(
  rankings.map((ranking) =>
    Object.fromEntries(
      Object.entries(ranking).map(([option, rank]) => [
        option,
        normalizeANumber(rank)
      ])
    )
  )
);

let nickname = "Gabrielle";
let heightInInches = 61;
let weightInKg = 65;

let heightInFeet = Math.floor(heightInInches / 12);
let heightInInchesRemainder = heightInInches % 12;
let weightInLbs = weightInKg * 2.20462;

alert(`Name: ${nickname}\nHeight: ${heightInFeet}’${heightInInchesRemainder}”\nWeight: ${weightInLbs.toFixed(3)} lbs`);

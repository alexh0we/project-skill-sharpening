/**
 * isEqual()
 * ---------------------
 * Takes in two values and returns if they are strictly equal or not
 * HINT: The prompt says STRICTLY equal. What does that mean in JavaScript?
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 *
 * EXAMPLE:
 *  isEqual(10, 10);
 *  //> true
 *
 *  isEqual(10, "10");
 *  //> false
 */
function isEqual(a, b) {
  let result;
  if (a === b) {
    result = true;
  } else {
    result = false
  }
  return result;
}

/**
 * findLarger()
 * ---------------------
 * Takes in two numbers and returns the larger number. The numbers are guaranteed to be unique (not equal to each other).
 * @param {number} a
 * @param {number} b
 * @returns {number}
 *
 * EXAMPLE:
 *  findLarger(19, 7);
 *  //> 19
 */
function findLarger(a, b) {
  if (a > b) {
    return a;
  }
  if (b > a) {
    return b;
  }
}

/**
 * findLargerOrTie()
 * ---------------------
 * Takes in two numbers and returns the larger number. Returns the string "tie" if both numbers are the same.
 * @param {number} a
 * @param {number} b
 * @returns {number|string}
 *
 * EXAMPLE:
 *  findLargerOrTie(0, 1);
 *  //> 1
 *
 *  findLargerOrTie(0, 0);
 *  //> "tie"
 */
function findLargerOrTie(a, b) {
  let result;
  if (a > b) {
    result = a;
    }
  if (b > a) {
    result = b;
    } 
  if (a === b) {
    result = "tie";
  }
    return result;
  }


/**
 * positiveNegativeOrZero()
 * ---------------------
 * Takes in a number and returns whether that number is "Positive", "Negative", or "Zero".
 * HINT: Capitalization and spelling count!
 * @param {number} a
 * @returns {string}
 *
 * EXAMPLE:
 *  positiveNegativeOrZero(-1);
 *  //> "Negative"
 *
 *  positiveNegativeOrZero(0);
 *  //> "Zero"
 *
 *  positiveNegativeOrZero(1);
 *  //> "Positive"
 */
function positiveNegativeOrZero(a) {
  let result;
  if (a === 0) {
    result ="Zero";
  }
  if (a > 0) {
    result = "Positive";
  } 
  if (a < 0) {
    result = "Negative";
  }
  return result;
}

/**
 * aroundTheWorldGreeting()
 * ---------------------
 * Takes in a `language` (e.g "english", "spanish", or "german") and returns "Hello World" in that language. Must work for at least "english", "spanish", and "german". It should default to English if no argument is passed in.
 *
 * TRANSLATIONS: english -> "Hello World"
 *               spanish -> "Hola Mundo"
 *               german  -> "Hallo Welt"
 * HINT: The function expects lowercase names of languages.
 * @param {string} language
 * @returns {string}
 *
 * EXAMPLE:
 *  aroundTheWorldGreeting("spanish");
 *  //> "Hola Mundo"
 *
 *  aroundTheWorldGreeting();
 *  //> "Hello World"
 */
function aroundTheWorldGreeting(language) {
  let result = "Hello World";
  if (language === "english") {
    result = "Hello World";
  }
  if (language === "spanish") {
    result = "Hola Mundo";
  }
  if (language === "german") {
    result = "Hallo Welt";
  }
  return result;
}

/**
 * aroundTheWorldGreetingWithSwitch()
 * ---------------------
 * Takes in a language (e.g "english", "spanish", "german") and returns "Hello World" in that language. Must work for at least "english", "spanish", and "german". It should default to English if no argument is passed in.
 *
 * TRANSLATIONS: English -> "Hello World"
 *               Spanish -> "Hola Mundo"
 *               German  -> "Hallo Welt"
 *
 * NOTE: You must use a `switch` statement in solving this.
 *
 * @param {string} language
 * @returns {string}
 *
 * EXAMPLE:
 *  aroundTheWorldGreetingWithSwitch("german");
 *  //> "Hallo Welt"
 *
 *  aroundTheWorldGreetingWithSwitch();
 *  //> "Hello World"
 */
 function aroundTheWorldGreetingWithSwitch(language) {
  String result;
  switch (language) {
    case spanish: 
      result = "Hola Mundo";
                  break;
    case german:
      result = "Hallo Welt";
                  break;
    default:
      "Hello World";
                  break;
  return result;
}
 }
 

/**
//  * calculateLetterGrade()
//  * ---------------------
//  * Takes in a number and returns the letter grade corresponding to that number. Letter grades consist of "A", "B", "C", "D", or "F".
//  *
//  * SCORING: 90 and above is an A
//  *          80 and above is a B
//  *          70 and above is a C
//  *  

// /**
//  *         60 and above is a D
//  *          Anything lower than 60 is an F
//  * @param {number} grade
//  * @returns {string}
//  *
//  * EXAMPLE:
//  *  calculateLetterGrade(99);
//  *  //> "A"
//  */
function calculateLetterGrade(grade) {
  let result;
  if (grade >= 90) {
    result = "A";
  }
  if (grade >= 80 && grade < 90) {
    result = "B";
  }
  if (grade >= 70 && grade < 90 && grade < 80) {
    result = "C";
  }
  if (grade >= 60 && grade < 90 && grade < 80 && grade < 70) {
    result = "D";
  }
  if (grade < 60) {
    result = "F"
  }
  return result;
}

//  * animalCounts()
//  * ---------------------
//  * Returns the count of animals, properly pluralizing the animal if there is more than one.
//  * The animal is guaranteed to be one you can pluralize by adding `s`. (NO geese, fish, deer, oxen, etc.)
//  * @param {string} animal
//  * @param {number} numberOfAnimals
//  * @returns {string}
//  *
//  * EXAMPLE:
//  *  animalCounts("dog", 2);
//  *  //> "2 dogs"
//  *
//  *  animalCounts("pig", 1);
//  *  //> "1 pig"
//  */
function animalCounts(animal, numberOfAnimals) {
  let result; 
  if (numberOfAnimals >= 2) {
    result = `${numberOfAnimals} ${animal}s`;
  }
  if (numberOfAnimals < 2) {
    result = `${numberOfAnimals} ${animal}`;
  }
  return result;
}

/**
 * evenOrOdd()
 * ---------------------
 * Takes in a number and returns whether that number is "Even" or "Odd".
 * HINT: How is this similar to isOdd() or isEven() from part 2?
 * @param {number} a
 * @returns {string}
 *
 * EXAMPLE:
 *  evenOrOdd(11);
 *  //> "Odd"
 * 
 *  evenOrOdd(48);
 *  //> "Even"
 */
function evenOrOdd(a) {
  let result;
  if (a % 2 === 0) {
    result = "Even";
  }
  if (a % 2 === 1 || a % 2 === -1) {
    result = "Odd";
  }
  return result;
}

/**
 * evenOrOddWithTernary()
 * ---------------------
 * Takes in a number and returns whether that number is even or odd.
 *
 * NOTE: You must use a ternary to solve this.
 *
 * @param {number} a
 * @returns {string}
 *
 * EXAMPLE:
 *  evenOrOddWithTernary(8);
 *  //> "Even"
 */
function evenOrOddWithTernary(a) {
  let result;
  result = a % 2 === 1 || a % 2 === -1 ? "Odd": "Even";
  return result;
}

// Do not change any code below this line.
module.exports = {
  isEqual,
  findLarger,
  findLargerOrTie,
  positiveNegativeOrZero,
  aroundTheWorldGreeting,
  aroundTheWorldGreetingWithSwitch,
  calculateLetterGrade,
  animalCounts,
  evenOrOdd,
  evenOrOddWithTernary,
};
